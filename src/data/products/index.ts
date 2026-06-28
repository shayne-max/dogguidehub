import { foodProducts } from "./food";
import { healthProducts } from "./health";
import { trainingProducts } from "./training";
import { insuranceProducts } from "./insurance";
import type { Product } from "./types";

export type { Product };

// category 参数统一用小写（跟 URL /food /health /training /insurance 保持一致）
export const productsByCategory: Record<string, Product[]> = {
  food: foodProducts,
  health: healthProducts,
  training: trainingProducts,
  insurance: insuranceProducts,
};

// 每个分类的简短引导文案，展示在 /[category]/products 页面顶部
export const categoryIntro: Record<string, string> = {
  food: "Here's the full lineup of dog foods we recommend throughout our nutrition guides.",
  health: "Here's the full lineup of supplements, care products, and prevention tools we recommend throughout our health guides.",
  training: "Here's the full lineup of training gear we recommend throughout our training guides.",
  insurance: "Here's the full lineup of insurance plans we recommend throughout our insurance guides.",
};

// 用于页面 <title> / Hero 的分类显示名称
export const categoryLabel: Record<string, string> = {
  food: "Food",
  health: "Health",
  training: "Training",
  insurance: "Insurance",
};
