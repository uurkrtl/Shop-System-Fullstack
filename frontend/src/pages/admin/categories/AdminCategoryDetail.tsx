import CategoryService from "../../../services/CategoryService.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Category} from "../../../types/Category.ts";


const categoryService = new CategoryService();
function AdminCategoryDetail() {
    const { id = '0' } = useParams();
    const [category, setCategory] = useState<Category>({
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    const handleStatusChange = (status: boolean) => {
        categoryService.changeCategoryStatus(Number(id), status)
            .then(() => {
                setSuccessMessage(successMessage + ' Der Kategoriestatus wurde erfolgreich geändert.')
                setErrorMessage('')
                setCategory({
                    ...category,
                    active: status
                });
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                    setSuccessMessage('');
                } else {
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                    setSuccessMessage('');
                }
            });
    }

    useEffect(() => {
        if (id) {
            categoryService.getCategoryById(Number(id))
                .then((response) => {
                    setCategory(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    if (error.response) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                    }
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
            <div className="row flex-lg-row align-items-center g-5 py-3">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{category.name}</h1>
                    <p className="lead">{category.description}</p>

                    <table className="table table-striped-columns">
                        <tbody>
                        <tr>
                            <th scope="row">Erstellung</th>
                            <td>{category.createdAt ? new Date(category.createdAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Letzte Aktualisierung</th>
                            <td>{category.updatedAt ? new Date(category.updatedAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Status</th>
                            <td>{category.active ?
                                <span className="badge text-bg-success rounded-pill">Aktiv</span>
                                : <span className="badge text-bg-danger rounded-pill">Passiv</span>}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={`/admin/categories/update/${category.id}`} type="button"
                              className="btn btn-primary btn-lg px-4 me-md-2">Aktualisieren</Link>
                        <button type="button"
                                className={category.active ? 'btn btn-danger px-4 me-md-2' : 'btn btn-success px-4 me-md-2'}
                                onClick={() => handleStatusChange(!category.active)}>
                            {category.active ? 'Deaktivieren' : 'Aktivieren'}</button>
                        <Link to={`/admin/categories`} type="button"
                              className="btn btn-outline-secondary btn-lg px-4">Kategorieliste</Link>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    {successMessage && (
                        <div className="alert alert-success mt-3" role="alert">
                            {successMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminCategoryDetail;