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

    updateCategory(id: number, category: Category) {
        return axios.put(`/api/categories/${id}`, category)
    }

    changeCategoryStatus(id: number, status: boolean) {
        return axios.put(`/api/categories/status/${id}?status=${status}`)
    }
}