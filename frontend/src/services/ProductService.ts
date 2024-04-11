import axios from "axios";

export default class ProductService {
    getProductById(id: number) {
        return axios.get(`/api/products/${id}`)
    }
}