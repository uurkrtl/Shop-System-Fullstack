import './ProductDetail.css';
import ProductService from "../../services/ProductService.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../../types/Product.ts";
import {Unit} from "../../types/enums/Unit.ts";


const productService = new ProductService();
function ProductDetail() {
    const { id = '0' } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
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
    });

    useEffect(() => {
        if (id) {
            productService.getProductById(Number(id))
                .then((response) => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching product:', error);
                    navigate('*');
                });
        }
    }, [id, navigate]);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }

    return (
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-2">

                <div className="container mt-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-chevron p-3 rounded-3">
                            <li className="breadcrumb-item">
                                <Link to={'/'} className="link-body-emphasis">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                                    </svg>
                                    <span className="visually-hidden">Home</span>
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={`/`} className="link-body-emphasis fw-semibold text-decoration-none">{product.categoryName}</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {product.name}
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={product.imageUrl} className="d-block mx-lg-auto img-fluid img-shadow" alt="Product"
                         width="400" height="300" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{product.name}</h1>
                    <p className="lead">{product.description}</p>

                    <div className="d-flex align-items-center mb-3">
                        <h3 className="me-2 text-success">
                            {product.price.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'EUR'
                            })}
                        </h3>
                        <h6 className="text-body-tertiary">
                            ({Unit[product.unit as keyof typeof Unit]})
                        </h6>
                    </div>

                    {product.ingredients && (
                        <div className="alert alert-warning" role="alert">
                            <h4 className="text-body-tertiary">Zutaten</h4>
                            <p className="lead">{product.ingredients}</p>
                        </div>
                    )}

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={`/products`} type="button"
                              className="btn btn-outline-secondary btn-lg px-4">Ähnliche Produkte</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;