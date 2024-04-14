import ProductService from "../../../services/ProductService.ts";
import React, {useEffect, useState} from "react";
import {Product} from "../../../types/Product.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import {Link} from "react-router-dom";
import {Category} from "../../../types/Category.ts";
import CategoryService from "../../../services/CategoryService.ts";
import {Unit} from "../../../types/enums/Unit.ts";


const productService = new ProductService();
const categoryService = new CategoryService();
function AdminProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [filterByName, setFilterByName] = useState("");
    const [productByCategory, setProductByCategory] = useState<Product[]>(products);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        categoryService.getAllCategories().then((response) => {
            setCategories(response.data);
        });
    });

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    const filteredProducts = productByCategory.filter(
        (product) =>
            product.name.toLowerCase().includes(filterByName.toLowerCase())
    );

    const handleCategorySelect = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === "allProducts") {
            setProductByCategory(products)
        }else {
            setProductByCategory(products.filter((product) => product.categoryName === target.id));
        }
    };

    useEffect(() => {
        productService.getAllProducts().then((response) => {
            setProducts(response.data);
            setProductByCategory(response.data);
            setErrorMessage('');
            setLoading(false);
        }).catch((error) => {
            setErrorMessage(`Fehler beim Abrufen von Produkte: ${error.message}`);
            setLoading(false);
            setProducts([]);
            setProductByCategory([]);
        });
    }, []);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }

    return (
        <div className={'container'}>
            <PageHeader title="Produktliste" pageType="product"/>

            <div className="d-flex justify-content-end">
                <Link to={"/admin/products/add"} className="btn btn-outline-secondary">Produkt erstellen</Link>
            </div>

            <div className="input-group">
                <div className="form-check-inline">
                    <p className="form-check-label mx-1">Kategorie wählen:</p>
                </div>

                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="allProducts"
                           value="allProducts" onClick={handleCategorySelect} defaultChecked/>
                    <label className="form-check-label" htmlFor="allProducts">Alle Produkte</label>
                </div>

                {categories.map((category) => {
                    return (
                        <div className="form-check form-check-inline mb-3" key={category.id}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={category.name}
                                   value={category.name} onClick={handleCategorySelect}/>
                            <label className="form-check-label" htmlFor={category.name}>{category.name}</label>
                        </div>
                    );
                })}
            </div>

            <div className="input-group mb-2">
                <span className="input-group-text" id="basic-addon3">Schreiben einen Namensfilter</span>
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                    onChange={(e) => setFilterByName(e.target.value)}
                />
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Leseanzahl</th>
                    <th scope="col">Verkaufspreis</th>
                    <th scope="col">Kategoriename</th>
                    <th scope="col">Status</th>
                    <th scope="col">Detail</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td className={!product.active ? "text-danger" : "text-black"}>{truncateText(product.name, 40)}</td>
                            <td>{product.readCount}</td>
                            <td>{product.price.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'EUR'
                            })}&nbsp;
                                <small>({Unit[product.unit as keyof typeof Unit]})</small>
                            </td>
                            <td>{product.categoryName}</td>
                            <td>{product.active ? "Aktiv" : "Passiv"}</td>
                            <td><Link to={`/admin/products/detail/${product.id}`}
                                      className="btn btn-outline-info">Detail</Link></td>
                        </tr>
                    );
                })}
                </tbody>

                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                    </div>
                )}

            </table>
        </div>
    );
}

export default AdminProductList;