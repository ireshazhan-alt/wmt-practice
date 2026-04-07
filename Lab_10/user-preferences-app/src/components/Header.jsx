import { useContext } from "react";
import { PreferencesContext} from "../context/PreferencesContext"; 

function Header() {
    const { theme, userName } = useContext(PreferencesContext);

    return (
        <div>
            <h3>Welcome, {userName}</h3>
            <p>Current Theme: {theme}</p>
        </div>
    );
}
export default Header;