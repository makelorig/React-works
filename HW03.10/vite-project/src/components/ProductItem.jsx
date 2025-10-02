function ProductItem({product,onRemove}) {
    return (
        <li>
            {product.important && "*"}{product.title}
            <button onClick={()=>onRemove(product.id)}>Удалить</button>
        </li>
    )
}
export default ProductItem