import CategoryService from "../../../services/CategoryService.ts";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Category} from "../../../types/Category.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import CategoryCommonFormFields from "../../../layouts/commonFormFields/CategoryCommonFormFields.tsx";

const categoryService = new CategoryService();
function AdminCategoryUpdate() {
    const { id = '0' } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [category, setCategory] = useState<Category>({
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    useEffect(() => {
        if (id) {
            categoryService.getCategoryById(Number(id))
                .then((response) => {
                    setCategory(prevCategory => ({...prevCategory, ...response.data}));
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        categoryService.updateCategory(Number(id), category)
            .then(() => {
                navigate('/admin/categories/detail/' + id)
            })
            .catch(error => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                }
            });
    };

    return (
        <main className={'container'}>
            <PageHeader title="Kategorieaktualisierung" pageType="category"/>

            <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <CategoryCommonFormFields category={category} setCategory={setCategory}/>
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

export default AdminCategoryUpdate;