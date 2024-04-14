import axios from "axios";
import {Product} from "../types/Product.ts";

export default class ProductService {
    getAllProducts() {
        return axios.get('/api/products')
    }

    getActiveProducts() {
        return axios.get('/api/products/active')
    }

    getProductById(id: number) {
        return axios.get(`/api/products/${id}`)
    }

    addProduct(product: Product) {
        return axios.post('/api/products', product)
    }
}