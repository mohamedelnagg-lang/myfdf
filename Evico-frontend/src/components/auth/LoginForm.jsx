"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
    const navigate = useNavigate();
    const [primaryInput, setPrimaryInput] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [showPassword, setShowPassword] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [showNafath, setShowNafath] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Manual validation
    const [touched, setTouched] = useState({ primary: false, password: false });

    // Detect input type (email, phone, id)
    // Phone: Saudi format (starts with 05 or 5, 9 or 10 digits)
    // Email: must be a valid email format
    const detectInputType = (value) => {
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        const phonePattern = /^(05|5)[0-9]{8}$/;
        if (emailPattern.test(value)) return "email";
        if (phonePattern.test(value.replace(/\D/g, ''))) return "phone";
        return "";
    };

    // Show/hide fields based on input type
    const handlePrimaryChange = (e) => {
        const value = e.target.value;
        setPrimaryInput(value);
        setTouched((prev) => ({ ...prev, primary: true }));
        const type = detectInputType(value);
        setShowPassword(type === "email");
        setShowOtp(type === "phone");
        setShowNafath(false); // Only enable if you want to support ID logic
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setTouched((prev) => ({ ...prev, password: true }));
    };

    const handleOtpChange = (idx, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);
        }
    };

    // Manual validation logic
    const validate = () => {
        if (!primaryInput) return "يرجى إدخال البريد الإلكتروني أو رقم الجوال";
        if (showPassword && !password) return "يرجى إدخال كلمة المرور";
        if (showOtp && otp.some((d) => !d)) return "يرجى إدخال رمز التحقق بالكامل";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }
        setLoading(true);
        try {
            // Demo: only password login
            const response = await login(primaryInput, password);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container" dir="rtl">
            <div className="login-right">
                <div className="login-form-container">
                    <div className="login-header">
                        <h1 className="login-title">أهلاً وسهلاً</h1>
                        <p className="login-subtitle">سجل دخولك للوصول إلى حسابك في Evico Business</p>
                    </div>
                    <form onSubmit={handleSubmit} className="dynamic-form">
                        {/* Primary Input Field */}
                        <div className="smart-input-container">
                            <input
                                type="text"
                                className="smart-input"
                                id="primaryInput"
                                name="primaryInput"
                                placeholder="البريد الإلكتروني / رقم الجوال"
                                value={primaryInput}
                                onChange={handlePrimaryChange}
                                onBlur={() => setTouched((prev) => ({ ...prev, primary: true }))}
                                inputMode={showOtp ? "tel" : "email"}
                                style={{ direction: 'ltr' }}
                            />
                        </div>
                        {/* Password Field */}
                        {showPassword && (
                            <div className="secondary-field show" id="passwordField">
                                <input
                                    type="password"
                                    className="secondary-input"
                                    id="passwordInput"
                                    name="password"
                                    placeholder="كلمة المرور"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                                    style={{ direction: 'ltr' }}
                                />
                            </div>
                        )}
                        {/* OTP Field */}
                        {showOtp && (
                            <div className="secondary-field show" id="otpField">
                                <div className="text-center mb-4">
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
                                        تم إرسال رمز التحقق إلى رقم جوالك
                                    </p>
                                    <button type="button" className="btn btn-secondary" onClick={() => setOtp(["", "", "", "", "", ""])}>
                                        إرسال رمز التحقق
                                    </button>
                                </div>
                                <div className="otp-container">
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            className="otp-digit"
                                            maxLength={1}
                                            value={digit}
                                            onChange={e => handleOtpChange(idx, e.target.value)}
                                            inputMode="numeric"
                                            style={{ direction: 'ltr' }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Error Alert */}
                        {error && (
                            <div className="alert alert-warning text-center">
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary btn-full btn-large"
                            disabled={loading}
                        >
                            <i className="fas fa-sign-in-alt"></i>
                            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                        </button>
                    </form>


                    <div className="text-center">
                        <span style={{ color: 'var(--text-secondary)' }}>ليس لديك حساب؟</span>
                        <a href="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 700, marginRight: 8 }}>
                            إنشاء حساب جديد
                        </a>
                    </div>
                </div>
            </div>
            <div className="login-left">
                <div className="login-illustration">
                    <div className="illustration-icon">
                        <i className="fas fa-rocket"></i>
                    </div>
                    <h2 className="illustration-title">Evico Business</h2>
                    <p className="illustration-subtitle">
                        منصة الأعمال الرقمية الرائدة في المملكة العربية السعودية.
                        ابدأ رحلتك نحو النجاح الرقمي مع حلولنا المتطورة والذكية.
                    </p>
                </div>
            </div>
        </div>
    );
}
