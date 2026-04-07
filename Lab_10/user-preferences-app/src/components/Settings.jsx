import { useContext } from "react";
import { PreferencesContext } from "../context/PreferencesContext";

function Settings() {
  const { setTheme, setUserName } = useContext(PreferencesContext);

  return (
    <div>
      <input
        placeholder="Enter username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default Settings;
