import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home } from "./Routes.jsx"; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ Home Route */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
