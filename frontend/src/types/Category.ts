import {Product} from "./Product.ts";

export type Category = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    products: Product[];
}