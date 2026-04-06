function Cart(props) {

    return (
        <div className="cart">
            <h2>🛒 Shopping Cart</h2>
            <p>Total Items in Cart: {props.cartCount}</p>
        </div>
    );
}
export default Cart;