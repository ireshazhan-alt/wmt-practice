function Navbar(props) {

    return (
        <nav className="navbar">
            <h2>🐶 Pet Shop</h2>

            <ul className="nav-links">
                <li>Home</li>
                <li>Pets</li>
                <li>Contact</li>
                <li>🛒 Cart ({props.cartCount})</li>
            </ul>
        </nav>
    );
}
export default Navbar;