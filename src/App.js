import { Header } from "./components";
import { Home, Cart, Auth } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Admin from "./pages/Admin";

function App() {
    const statusAuth = useSelector(({ user }) => user.authStatus);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/auth" element={<Auth />} />
                    {statusAuth && <Route path="/admin" element={<Admin />} />}
                </Routes>
            </div>
        </div>
    );
}

export default App;
