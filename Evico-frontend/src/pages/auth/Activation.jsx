import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ActivationPage() {
    const [daysSinceRegister, setDaysSinceRegister] = useState(1);
    const [documentsCount, setDocumentsCount] = useState(0);
    const [profileCompletion, setProfileCompletion] = useState(100);
    const [securityStatus, setSecurityStatus] = useState("آمن");
    
    const navigate = useNavigate();

    // Example: Fetch real data from backend
    useEffect(() => {
        // TODO: call API to get activation status & account stats
        // setDaysSinceRegister(response.days);
        // setDocumentsCount(response.documents);
        // setProfileCompletion(response.completion);
        // setSecurityStatus(response.security);
    }, []);

    const goToDashboard = () => {
        // Redirect user to dashboard once approved
        window.location.href = "/dashboard";
    };

    return (
        <section id="activationSection" className="max-w-2xl mx-auto mt-12">
            <div className="card p-8 rounded-2xl text-center shadow-lg bg-white">
                {/* Check Icon */}
                <div className="primary-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-white text-2xl"></i>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">قيد التفعيل</h2>
                <h3 className="text-xl font-medium text-gray-700 mb-4">
                    مرحباً بك في Evico Business
                </h3>
                <p className="text-gray-600 mb-8">
                    منصة الأعمال الرقمية المتطورة لإدارة نشاطك التجاري بكفاءة
                </p>

                {/* Account Status Card */}
                <div className="card p-6 rounded-lg mb-8 border bg-gray-50">
                    <h4 className="text-lg font-bold text-green-600 mb-4">
                        تم إنشاء الحساب بنجاح!
                    </h4>
                    <p className="text-gray-600 mb-6">
                        نرجو انتظار التفعيل من فريقنا المختص. ستصلك رسالة تأكيد عند اكتمال
                        المراجعة خلال 24-48 ساعة.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold primary-color">
                                {daysSinceRegister}
                            </div>
                            <div className="text-sm text-gray-600">يوم منذ التسجيل</div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-green-600">
                                {profileCompletion}%
                            </div>
                            <div className="text-sm text-gray-600">اكتمال البيانات</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-600">
                                {securityStatus}
                            </div>
                            <div className="text-sm text-gray-600">حالة الأمان</div>
                        </div>
                    </div>
                </div>

                {/* Go to Dashboard Button */}
                <button
                    onClick={goToDashboard}
                    className="btn-primary px-8 py-3 rounded-lg"
                >
                    الانتقال إلى الداشبورد
                </button>
            </div>
        </section>
    );
}
