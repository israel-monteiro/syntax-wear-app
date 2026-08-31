import type { category } from "./category";

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    color: string;
    description: string;
    category: category;
}
