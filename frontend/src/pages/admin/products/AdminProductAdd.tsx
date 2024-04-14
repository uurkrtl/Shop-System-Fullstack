import React, {useEffect, useState} from "react";
import ProductService from "../../../services/ProductService.ts";
import CategoryService from "../../../services/CategoryService.ts";
import {Category} from "../../../types/Category.ts";
import {Product} from "../../../types/Product.ts";
import {useNavigate} from "react-router-dom";
import PageHeader from "../../../layouts/PageHeader.tsx";
import ProductCommonFormFields from "../../../layouts/commonFormFields/ProductCommonFormFields.tsx";


function AdminProductAdd() {
    const navigate = useNavigate();
    const productService = new ProductService();
    const categoryService = new CategoryService();
    const [categories, setCategories] = useState<Category[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        description: '',
        ingredients: '',
        price: 0,
        imageUrl: '',
        readCount: 0,
        unit: '',
        categoryId: 0,
        categoryName: '',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    useEffect(() => {
        categoryService.getAllCategories().then((response) => {
            setCategories(response.data);
        });
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        productService.addProduct(product)
            .then(response => {
                console.log(response)
                navigate('/admin/products')
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    setErrorMessage(error.response.data.message);
                } else {
                    console.log('Etwas ist schief gelaufen:', error.message);
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                }
            });
    };

    return (
        <main className={'container'}>
            <PageHeader title="Produkt hinzufügen" pageType="product"/>

            <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <ProductCommonFormFields product={product} setProduct={setProduct} categories={categories}/>
                        <button className="w-100 btn btn-primary btn-lg my-4" type="submit">Speichern</button>
                    </form>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}

export default AdminProductAdd;