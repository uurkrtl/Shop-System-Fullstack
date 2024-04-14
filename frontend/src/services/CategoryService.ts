import axios from "axios";

export default class CategoryService {
    getAllCategories() {
        return axios.get('/api/categories')
    }

    getActiveCategories() {
        return axios.get('/api/categories/active')
    }

    getCategoryById(id: number) {
        return axios.get(`/api/categories/${id}`)
    }
}