import './ProductList.css';
import CategoryService from "../../services/CategoryService.ts";
import {useEffect, useState} from "react";
import {Category} from "../../types/Category.ts";
import {Link, useParams} from "react-router-dom";
import {Unit} from "../../types/enums/Unit.ts";
import ProductService from "../../services/ProductService.ts";
import {Product} from "../../types/Product.ts";

const categoryService = new CategoryService();
const productService = new ProductService();
function ProductList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { categoryId = '' } = useParams();
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    useEffect(() => {
        if (categoryId) {
            categoryService.getCategoryById(Number(categoryId)).then((response) => {
                setCategories([response.data]);
                setLoading(false);
                setErrorMessage('')
            }).catch(error => {
                setErrorMessage(`Fehler beim Abrufen von Produkte: ${error.message}`);
                setLoading(false);
                setCategories([]);
            });
        }else {
        categoryService.getActiveCategories().then((response) => {
            setCategories(response.data);
            setLoading(false);
        }).catch(error => {
            setErrorMessage(`Fehler beim Abrufen von Produkte: ${error.message}`);
            setLoading(false);
            setCategories([]);
        });}
    }, [categoryId]);

    useEffect(() => {
        productService.getActiveProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary mt-5'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }

    return (
        <main>
            {categories.map((category) => {
                return (
                    <div className="container" key={category.id}>
                        <hr className="featurette-divider"/>
                        <section className="py-3 text-center container">
                            <div className="row py-lg-1">
                                <div className="col-lg-8 col-md-8 mx-auto">
                                    <h1 className="fw-light"><b>{category.name}</b></h1>
                                    <p className="lead text-body-secondary">{category.description}</p>
                                </div>
                            </div>
                        </section>

                        <div className="album py-2 ">
                            <div className="container">

                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

                                    {products.filter(product => product.categoryName === category.name).map((product) => {
                                        return (
                                            <Link to={`/products/detail/${product.id}`} className="text-decoration-none" key={product.id}>
                                                <div className="col">
                                                    <div className="card shadow-sm mt-3">
                                                        <img className="bd-placeholder-img card-img-top thumb-img" width="100%"
                                                             height="250" alt={product.name} src={product.imageUrl}/>
                                                        <div className="card-body" style={{ height: '130px', overflow: 'hidden' }}>
                                                            <p className="card-title">{truncateText(product.name, 70)}</p>
                                                            <p className="card-text">{truncateText(product.description, 40)}</p>
                                                            <h5 className={'text-body-emphasis'}
                                                                style={{display: 'inline'}}>
                                                                {product.price.toLocaleString('de-DE', {
                                                                    style: 'currency',
                                                                    currency: 'EUR'
                                                                })}&nbsp;
                                                            </h5>
                                                            <h6 className="text-body-tertiary" style={{display: 'inline'}}>
                                                                ({Unit[product.unit as keyof typeof Unit]})
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                )
            })}
        </main>
    );
}

export default ProductList;