import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage } from './Routes.jsx'; // ✅ Import both LoginPage and SignupPage


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
