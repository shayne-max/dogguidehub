import { foodProducts } from "../data/products/food";
import { healthProducts } from "../data/products/health";
import { trainingProducts } from "../data/products/training";
import { insuranceProducts } from "../data/products/insurance";
import type { Product } from "../data/products/types";
import { keywordTagMap, breedSizeMap } from "../data/keywordTagMap";

// 各分类对应的商品池。
// Breeds 和 Gear 没有自己专属的商品池，统一从 food + health + training 三个池子里混合检索。
function getPoolForCategory(category: string): Product[] {
  const key = category.toLowerCase();
  switch (key) {
    case "food":
      return foodProducts;
    case "health":
      return healthProducts;
    case "training":
      return trainingProducts;
    case "insurance":
      return insuranceProducts;
    case "breeds":
    case "gear":
    default:
      return [...foodProducts, ...healthProducts, ...trainingProducts];
  }
}

// 从文章的 title / excerpt / metaDescription 中提取标签
export function extractTagsFromText(...texts: (string | undefined)[]): string[] {
  const combined = texts.filter(Boolean).join(" ").toLowerCase();
  const tags = new Set<string>();

  for (const [keyword, mappedTags] of Object.entries(keywordTagMap)) {
    if (combined.includes(keyword)) {
      mappedTags.forEach((t) => tags.add(t));
    }
  }

  for (const [breed, sizeTag] of Object.entries(breedSizeMap)) {
    if (combined.includes(breed)) {
      tags.add(sizeTag);
    }
  }

  return Array.from(tags);
}

// 根据标签交集排序，取前 N 个商品
// 排序规则：1.标签交集数最多优先 2.交集数相同按rating从高到低 3.rating相同按是否有badge 4.以上都相同按数组原始顺序（保证结果稳定、可重现）
export function rankProducts(pool: Product[], articleTags: string[], count = 3): Product[] {
  return pool
    .map((p, idx) => {
      const overlap = (p.tags ?? []).filter((t) => articleTags.includes(t)).length;
      return { p, idx, overlap };
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      const ratingA = a.p.rating ?? 0;
      const ratingB = b.p.rating ?? 0;
      if (ratingB !== ratingA) return ratingB - ratingA;
      const badgeA = a.p.badge ? 1 : 0;
      const badgeB = b.p.badge ? 1 : 0;
      if (badgeB !== badgeA) return badgeB - badgeA;
      return a.idx - b.idx;
    })
    .slice(0, count)
    .map((x) => x.p);
}

// 给文章详情页用的入口函数：传入分类 + 文章文本，直接返回排好序的前3个商品
export function matchProductsForArticle(
  category: string,
  title: string,
  excerpt?: string,
  metaDescription?: string,
  count = 3
): Product[] {
  const pool = getPoolForCategory(category);
  if (pool.length === 0) return [];

  const tags = extractTagsFromText(title, excerpt, metaDescription);
  return rankProducts(pool, tags, count);
}
