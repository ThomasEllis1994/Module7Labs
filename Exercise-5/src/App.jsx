import "./App.css";
import AppRoutes from "./routes/AppRoutes";
// import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/AppBar";

// Update App.jsx as shown - all components rendered via routes
function App() {
    return (
        <UserProvider>
            {/* {ThemeProvider} */}
            <Navbar />
            <AppRoutes />
        </UserProvider>
    );
} // ++ Create a Footer component as well and add under AppRoutes

export default App;
