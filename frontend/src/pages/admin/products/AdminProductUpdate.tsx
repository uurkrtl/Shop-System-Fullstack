import CategoryService from "../../../services/CategoryService.ts";
import ProductService from "../../../services/ProductService.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../../../types/Product.ts";
import {Category} from "../../../types/Category.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import ProductCommonFormFields from "../../../layouts/commonFormFields/ProductCommonFormFields.tsx";


const productService = new ProductService();
const categoryService = new CategoryService();
function AdminProductUpdate() {
    const { id = '0' } = useParams();
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

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        categoryService.getAllCategories().then((response) => {
            setCategories(response.data);
        });
    });

    useEffect(() => {
        if (id) {
            productService.getProductById(Number(id))
                .then((response) => {
                    setProduct(prevProduct => ({...prevProduct, ...response.data}));
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
        }
    }, [id, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        productService.updateProduct(Number(id), product)
            .then(response => {
                console.log(response)
                navigate('/admin/products/detail/' + id)
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
            <PageHeader title="Produktaktualisierung" pageType="product"/>

            <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <ProductCommonFormFields product={product} setProduct={setProduct} categories={categories}/>
                        <button className="w-100 btn btn-primary btn-lg my-4" type="submit">Aktualisieren</button>
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

export default AdminProductUpdate;