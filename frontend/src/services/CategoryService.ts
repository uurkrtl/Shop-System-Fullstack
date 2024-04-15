import axios from "axios";
import {Category} from "../types/Category.ts";

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

    addCategory(category: Category) {
        return axios.post('/api/categories', category)
    }
}