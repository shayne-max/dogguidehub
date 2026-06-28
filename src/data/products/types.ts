export interface Product {
  title: string;
  description: string;
  link: string;
  price?: string;
  rating?: number;
  badge?: string;
  // 商品本身的客观属性标签（品类/适用犬型/年龄段/功能场景），
  // 用于文章详情页自动匹配相关商品，跟具体文章无关，新增商品时一起打上即可。
  tags?: string[];
}
