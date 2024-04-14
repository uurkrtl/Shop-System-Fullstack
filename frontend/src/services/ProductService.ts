import axios from "axios";
import {Product} from "../types/Product.ts";

export default class ProductService {
    getAllProducts() {
        return axios.get('/api/products')
    }

    getProductById(id: number) {
        return axios.get(`/api/products/${id}`)
    }

    addProduct(product: Product) {
        return axios.post('/api/products', product)
    }
}