import ProductItem from "./ProductItem"
function ProductList({products,onRemove}) {
return( 
    <ul>
        {products.length === 0 ? (<p>Список пуст</p>):(products.map((product)=>(<ProductItem key={product.id} product={product} onRemove={onRemove}/>)))}
    </ul>)
}

export default ProductList