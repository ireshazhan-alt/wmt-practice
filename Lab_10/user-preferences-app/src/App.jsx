import { useContext, Suspense, lazy } from "react";
import { PreferencesContext } from "./context/PreferencesContext";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const Settings = lazy(() => import("./components/Settings"));

function App() {
  const { theme } = useContext(PreferencesContext);

  const appStyle = {
    backgroundColor: theme === "dark" ? "#222" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <h2>User Preferences App</h2>
      <Header />
      <Suspense fallback={<p>Loading settings...</p>}>
        <Settings />
      </Suspense>
      <ItemList />
    </div>
  );
}

export default App;