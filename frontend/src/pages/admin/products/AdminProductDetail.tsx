import ProductService from "../../../services/ProductService.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../../../types/Product.ts";


const productService = new ProductService();
function AdminProductDetail() {
    const { id = '0' } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('');
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
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    const handleStatusChange = (status: boolean) => {
        productService.changeProductStatus(Number(id), status)
            .then(() => {
                console.log('Der Produktstatus wurde erfolgreich geändert.');
                setErrorMessage('')
                setProduct({
                    ...product,
                    active: status
                });
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    setErrorMessage(error.response.data.message);
                } else {
                    console.log('Etwas ist schief gelaufen:', error.message);
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                }
            });
    }

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
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={product.imageUrl} className="d-block mx-lg-auto img-fluid" alt="Product"
                         width="400" height="300" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{product.name}</h1>
                    <p className="lead">{product.description}</p>

                    <table className="table table-striped-columns">
                        <tbody>
                        <tr>
                            <th scope="row">Verkaufspreis</th>
                            <td>{product.price.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'EUR'
                            })}</td>
                        </tr>
                        <tr>
                            <th scope="row">Kategoriename</th>
                            <td>{product.categoryName}</td>
                        </tr>
                        <tr>
                            <th scope="row">Leseanzahl</th>
                            <td>{product.readCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">Erstellung</th>
                            <td>{product.createdAt ? new Date(product.createdAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Letzte Aktualisierung</th>
                            <td>{product.updatedAt ? new Date(product.updatedAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Status</th>
                            <td>{product.active ?
                                <span className="badge text-bg-success rounded-pill">Aktiv</span>
                                : <span className="badge text-bg-danger rounded-pill">Passiv</span>}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={`/admin/products/update/${product.id}`} type="button"
                              className="btn btn-primary btn-lg px-4 me-md-2">Aktualisieren</Link>
                        <button type="button"
                                className={product.active ? 'btn btn-danger px-4 me-md-2' : 'btn btn-success px-4 me-md-2'}
                                onClick={() => handleStatusChange(!product.active)}>
                            {product.active ? 'Deaktivieren' : 'Aktivieren'}</button>
                        <Link to={`/admin/products`} type="button"
                              className="btn btn-outline-secondary btn-lg px-4">Produktliste</Link>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminProductDetail;