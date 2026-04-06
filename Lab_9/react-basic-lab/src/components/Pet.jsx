function Pet(props) {
    return (
        <div className="pet-card">
            <h3>{props.name}</h3>
            <p>Type: {props.type}</p>
            <p>Price: Rs. {props.price}</p>
            <p>Stock: {props.stock}</p>

            <button onClick={props.onAddToCart} disabled={props.stock === 0}>
                {props.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
        </div>
    );
}
export default Pet;