import axios from "axios";

export default class CategoryService {
    getAllCategories() {
        return axios.get('/api/categories')
    }

    getCategoryById(id: number) {
        return axios.get(`/api/categories/${id}`)
    }
}