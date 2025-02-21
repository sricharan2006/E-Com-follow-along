import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct } from "./Routes.jsx"; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ Home Route */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} /> 
                <Route path="/create-product" element={<CreateProduct />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
