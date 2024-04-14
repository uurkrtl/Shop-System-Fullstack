import {Product} from "../../types/Product.ts";
import {Category} from "../../types/Category.ts";
import {Unit} from "../../types/enums/Unit.ts";

function ProductCommonFormFields({ product, setProduct, categories }: Readonly<{ product: Product, setProduct: (product: Product) => void, categories: Category[] }>) {
    const unitOptions = Object.keys(Unit).map((key) => ({
        value: key,
        label: Unit[key as keyof typeof Unit],
    }));

    return (
        <div className="row g-3">

            <div className="col-sm-6">
                <label htmlFor="name" className="form-label">Produktname</label>
                <input type="text" className="form-control" id="name"
                       placeholder="Schreiben Sie den Produktnamen" value={product.name}
                       onChange={(e) => setProduct({...product, name: e.target.value})}/>
            </div>

            <div className="col-sm-6">
                <label htmlFor="description" className="form-label">Beschreibung</label>
                <input type="text" className="form-control" id="description"
                       placeholder="Schreiben Sie die Beschreibung" value={product.description}
                       onChange={(e) => setProduct({...product, description: e.target.value})}/>
            </div>

            <div className="col-sm-12">
                <label htmlFor="ingredients" className="form-label">Zutaten</label>
                <input type="text" className="form-control" id="ingredients"
                       placeholder="Schreiben Sie die Zutaten" value={product.ingredients}
                       onChange={(e) => setProduct({...product, ingredients: e.target.value})}/>
            </div>

            <div className="col-sm-4">
                <label htmlFor="price" className="form-label">Verkaufspreis</label>
                <input type="number" step="0.01" className="form-control" id="price"
                       placeholder="Schreiben Sie den Verkaufspreis" value={product.price}
                       onChange={(e) => setProduct({
                           ...product, price: e.target.valueAsNumber
                       })}/>
            </div>

            <div className="col-sm-4">
                <label htmlFor="categoryName" className="form-label">Einheit</label>
                <select className="form-select" id="unit"
                        value={product.unit ? product.unit : ''}
                        onChange={(e) => setProduct({...product, unit: e.target.value})}>
                    {!product.unit && <option value="">Wählen...</option>}
                    <option
                        value={unitOptions.filter(unit => unit.value === product.unit).map(unit => unit.value)[0]}>{Unit[product.unit as keyof typeof Unit]}</option>
                    {unitOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))};
                </select>
            </div>

            <div className="col-sm-4">
                <label htmlFor="categoryName" className="form-label">Kategoriename</label>
                <select className="form-select" id="categoryName"
                        value={product.categoryId ? product.categoryId : ''}
                        onChange={(e) => setProduct({...product, categoryId: Number(e.target.value)})}>
                    {!product.categoryId && <option value="">Wählen...</option>}
                    <option
                        value={categories.filter(category => category.name === product.categoryName).map(category => category.id)[0]}>{product.categoryName}</option>
                    {categories.filter((category => category.name !== product.categoryName)).map((category) => {
                        return (
                            <option key={category.id}
                                    value={category.id}>{category.name}</option>
                        )
                    })};
                </select>
            </div>

            <div className="col-sm-12">
                <label htmlFor="imageUrl" className="form-label">Bild URL</label>
                <input type="text" className="form-control" id="imageUrl"
                       placeholder="Schreiben Sie die Bild URL" value={product.imageUrl}
                       onChange={(e) => setProduct({...product, imageUrl: e.target.value})}/>
            </div>
        </div>
    );
}

export default ProductCommonFormFields;