import React from "react";
import "./navbar.css"; 
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header className="card py-4 px-6 mb-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-reverse !space-x-4">
                    <i className="fas fa-building text-2xl primary-color"></i>
                    <h1 className="text-2xl font-bold primary-color">Evico Business</h1>
                </div>
                <nav className="flex space-x-reverse !space-x-4">
                    <button id="headerLoginBtn" onClick={()=>{navigate('/login')}} className="btn-primary px-4 py-2 rounded-lg">تسجيل الدخول</button>
                    <button id="headerRegisterBtn" onClick={()=>{navigate('/register')}} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">إنشاء حساب</button>
                </nav>
            </div>
        </header>
    );
}
