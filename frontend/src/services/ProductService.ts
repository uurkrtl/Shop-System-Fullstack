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

    updateProduct(id: number, product: Product) {
        return axios.put(`/api/products/${id}`, product)
    }

    changeProductStatus(id: number, status: boolean) {
        return axios.put(`/api/products/status/${id}?status=${status}`)
    }

    updateProductReadCount(id: number) {
        return axios.put(`/api/products/read-count/${id}`)
    }
}