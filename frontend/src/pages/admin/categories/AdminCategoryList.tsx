import CategoryService from "../../../services/CategoryService.ts";
import React, {useEffect, useState} from "react";
import {Category} from "../../../types/Category.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import {Link} from "react-router-dom";

const categoryService = new CategoryService();
function AdminCategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [filterByName, setFilterByName] = useState("");
    const [categoryByStatus, setCategoryByStatus] = useState<Category[]>(categories);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    const filteredCategories = categoryByStatus.filter(
        (category) =>
            category.name.toLowerCase().includes(filterByName.toLowerCase())
    );

    const handleStatusSelect = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === "activeCategories") {
            setCategoryByStatus(categories.filter((category) => category.active));
        } else if (target.id === "passiveCategories") {
            setCategoryByStatus(categories.filter((category) => !category.active));
        } else {
            setCategoryByStatus(categories);
        }
    };

    useEffect(() => {
        categoryService.getAllCategories().then((response) => {
            setCategories(response.data);
            setCategoryByStatus(response.data);
            setErrorMessage('');
            setLoading(false);
        }).catch((error) => {
            setErrorMessage(`Fehler beim Abrufen von Produkte: ${error.message}`);
            setLoading(false);
            setCategories([]);
            setCategoryByStatus([]);
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
            <PageHeader title="Kategorieliste" pageType="category"/>

            <div className="d-flex justify-content-end">
                <Link to={"/admin/categories/add"} className="btn btn-outline-secondary">Kategorie erstellen</Link>
            </div>

            <div className="input-group">
                <div className="form-check-inline">
                    <p className="form-check-label mx-1">Status auswählen:</p>
                </div>

                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="allProducts"
                           value="allProducts" onClick={handleStatusSelect} defaultChecked/>
                    <label className="form-check-label" htmlFor="allProducts">Alle Produkte</label>
                </div>

                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="activeCategories"
                           value="activeCategories" onClick={handleStatusSelect}/>
                    <label className="form-check-label" htmlFor="activeCategories">Aktive Kategorien</label>
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="passiveCategories"
                           value="passiveCategories" onClick={handleStatusSelect}/>
                    <label className="form-check-label" htmlFor="passiveCategories">Passive Kategorien</label>
                </div>
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
                    <th scope="col">Status</th>
                    <th scope="col">Detail</th>
                </tr>
                </thead>
                <tbody>
                {filteredCategories.map((category) => {
                    return (
                        <tr key={category.id}>
                            <td className={!category.active ? "text-danger" : "text-black"}>{truncateText(category.name, 40)}</td>
                            <td>{category.active ? "Aktiv" : "Passiv"}</td>
                            <td><Link to={`/admin/categories/detail/${category.id}`}
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

export default AdminCategoryList;