import React, { useState } from "react";

export default function PublicNavbar({ onOpenChat }) {
    const [showRankModal, setShowRankModal] = useState(false);
    const [showMarketingModal, setShowMarketingModal] = useState(false);
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showNotificationsModal, setShowNotificationsModal] = useState(false);
    const [showCustomRankModal, setShowCustomRankModal] = useState(false);
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);
    const [customRankName, setCustomRankName] = useState('');
    const [customRankDesc, setCustomRankDesc] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');

    const openRankModal = () => {
        setShowRankModal(true);
    };

    const closeRankModal = () => {
        setShowRankModal(false);
    };

    const selectRank = (rank) => {
        alert(`تم اختيار الرتبة: ${rank}`);
        setShowRankModal(false);
    };

    const addCustomRank = () => {
        setShowCustomRankModal(true);
    };

    const saveCustomRank = () => {
        if (customRankName.trim()) {
            alert(`تم حفظ الرتبة المخصصة: ${customRankName}`);
            setShowCustomRankModal(false);
            setCustomRankName('');
            setCustomRankDesc('');
        } else {
            alert('يرجى إدخال اسم الرتبة');
        }
    };

    const openMarketingWorkflow = () => {
        setShowMarketingModal(true);
    };

    const closeMarketingModal = () => {
        setShowMarketingModal(false);
    };

    const proceedToNextStep = () => {
        alert('الانتقال للخطوة التالية - هذه الميزة قيد التطوير');
    };

    const viewCampaignDetails = () => {
        alert('عرض تفاصيل الحملة - هذه الميزة قيد التطوير');
    };

    const openWallet = () => {
        setShowWalletModal(true);
    };

    const closeWalletModal = () => {
        setShowWalletModal(false);
    };

    const showAddFunds = () => {
        setShowPaymentMethods(true);
    };

    const showWithdrawFunds = () => {
        alert('سحب رصيد - هذه الميزة قيد التطوير');
    };

    const downloadStatement = () => {
        alert('تحميل كشف حساب - هذه الميزة قيد التطوير');
    };

    const selectPaymentMethod = (method) => {
        setSelectedPaymentMethod(method);
    };

    const processPayment = () => {
        if (paymentAmount && selectedPaymentMethod) {
            alert(`تم إتمام الدفع بمبلغ ${paymentAmount} ر.س عبر ${selectedPaymentMethod}`);
            setShowPaymentMethods(false);
            setPaymentAmount('');
            setSelectedPaymentMethod('');
        } else {
            alert('يرجى اختيار وسيلة الدفع وإدخال المبلغ');
        }
    };

    const openNotifications = () => {
        setShowNotificationsModal(true);
    };

    const closeNotificationsModal = () => {
        setShowNotificationsModal(false);
    };

    const toggleSidebar = () => {
        alert('Sidebar Toggle - Feature under development');
    };

    return (
        <>
            <header className="bg-evico-white p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                        {/* Left side - Rank Badge and Marketing Button */}
                        <div className="flex items-center !space-x-4 space-x-reverse">
                            <div className="rank-badge cursor-pointer" onClick={openRankModal}>
                                <span id="currentRank">شركة</span>
                                <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <button className="btn-primary" onClick={openMarketingWorkflow}>
                                <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                                </svg>
                                التسويق
                            </button>
                        </div>

                        {/* center side - Actions */}
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <button onClick={openWallet} className="text-evico-blue hover:bg-blue-50 p-2 rounded-lg relative">
                                <svg className="icon-svg" fill="#0026CF" viewBox="0 0 24 24">
                                    <path d="M21 18V15C21 13.9 20.1 13 19 13H17V7C17 5.9 16.1 5 15 5H5C3.9 5 3 5.9 3 7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18M15 7V13H5V7H15M19 15V18H5V15H19Z"/>
                                </svg>
                            </button>

                            <button onClick={onOpenChat} className="text-evico-blue hover:bg-blue-50 p-2 rounded-lg relative">
                                <svg className="icon-svg" fill="#0026CF" viewBox="0 0 24 24">
                                    <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"/>
                                </svg>
                                <span className="notification-badge">5</span>
                            </button>

                            <button onClick={openNotifications} className="text-evico-blue hover:bg-blue-50 p-2 rounded-lg relative">
                                <svg className="icon-svg" fill="#0026CF" viewBox="0 0 24 24">
                                    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22M18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5S10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"/>
                                </svg>
                                <span className="notification-badge">3</span>
                            </button>

                            <button onClick={toggleSidebar} className="lg:hidden">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        {/* right side - Logo */}
                        <div className="text-2xl font-bold text-evico-blue">
                            Evico
                        </div>

                    </div>
            </header>

            {/* Rank Selection Modal */}
            {showRankModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">اختيار الرتبة</h3>
                            <button onClick={closeRankModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-3" id="rankList">
                            <div className="rank-option bg-blue-50 border-2 border-blue-200 p-3 rounded-lg cursor-pointer" onClick={() => selectRank('شركة')}>
                                <div className="font-bold">شركة</div>
                                <div className="text-sm text-gray-600">حساب للشركات لإدارة حملات ورعايات</div>
                            </div>
                            <div className="rank-option bg-gray-50 border-2 border-gray-200 p-3 rounded-lg cursor-pointer" onClick={() => selectRank('يوزر عادي')}>
                                <div className="font-bold">يوزر عادي</div>
                                <div className="text-sm text-gray-600">شخص يستخدم المنصة للتواصل أو الخدمات</div>
                            </div>
                            <div className="rank-option bg-gray-50 border-2 border-gray-200 p-3 rounded-lg cursor-pointer" onClick={() => selectRank('مصمم')}>
                                <div className="font-bold">مصمم</div>
                                <div className="text-sm text-gray-600">متخصص في تقديم خدمات (تصميم، مونتاج، تصوير)</div>
                            </div>
                        </div>
                        <button className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg" onClick={addCustomRank}>
                            + إضافة رتبة مخصصة
                        </button>
                    </div>
                </div>
            )}

            {/* Custom Rank Modal */}
            {showCustomRankModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="text-xl font-bold mb-4">إضافة رتبة مخصصة</h3>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-4"
                            placeholder="اسم الرتبة"
                            value={customRankName}
                            onChange={(e) => setCustomRankName(e.target.value)}
                        />
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-4"
                            placeholder="وصف الرتبة"
                            rows="3"
                            value={customRankDesc}
                            onChange={(e) => setCustomRankDesc(e.target.value)}
                        ></textarea>
                        <div className="flex space-x-2 space-x-reverse">
                            <button className="btn-primary flex-1" onClick={saveCustomRank}>حفظ</button>
                            <button className="btn-secondary flex-1" onClick={() => setShowCustomRankModal(false)}>إلغاء</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Marketing Workflow Modal */}
            {showMarketingModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-evico-blue">مراحل التسويق المتكاملة</h3>
                            <button onClick={closeMarketingModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="workflow-step completed">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold ml-4">✓</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">1. إنشاء الحملة</h4>
                                    <p className="text-sm text-gray-600">تم إنشاء حملة "هواوي الجديدة" بنجاح</p>
                                </div>
                                <span className="text-xs text-gray-500">مكتمل</span>
                            </div>

                            <div className="workflow-step completed">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold ml-4">✓</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">2. البحث عن الشركاء</h4>
                                    <p className="text-sm text-gray-600">تم العثور على 12 شريك مناسب</p>
                                </div>
                                <span className="text-xs text-gray-500">مكتمل</span>
                            </div>

                            <div className="workflow-step active">
                                <div className="w-8 h-8 bg-evico-blue rounded-full flex items-center justify-center text-white font-bold ml-4">3</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">3. التفاوض والاتفاق</h4>
                                    <p className="text-sm text-gray-600">جاري التفاوض مع 3 مؤثرين</p>
                                </div>
                                <span className="text-xs text-blue-600">نشط</span>
                            </div>

                            <div className="workflow-step pending">
                                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold ml-4">4</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">4. الدفع الآمن</h4>
                                    <p className="text-sm text-gray-600">في انتظار إتمام الاتفاق</p>
                                </div>
                                <span className="text-xs text-gray-500">معلق</span>
                            </div>

                            <div className="workflow-step pending">
                                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold ml-4">5</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">5. تنفيذ الحملة</h4>
                                    <p className="text-sm text-gray-600">سيبدأ التنفيذ بعد الدفع</p>
                                </div>
                                <span className="text-xs text-gray-500">معلق</span>
                            </div>

                            <div className="workflow-step pending">
                                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold ml-4">6</div>
                                <div className="flex-1">
                                    <h4 className="font-bold">6. المتابعة والتقييم</h4>
                                    <p className="text-sm text-gray-600">تقييم النتائج وإصدار التقارير</p>
                                </div>
                                <span className="text-xs text-gray-500">معلق</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 space-x-reverse mt-6">
                            <button className="btn-primary flex-1" onClick={proceedToNextStep}>الانتقال للخطوة التالية</button>
                            <button className="btn-secondary flex-1" onClick={viewCampaignDetails}>عرض تفاصيل الحملة</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Wallet Modal */}
            {showWalletModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-evico-blue">المحفظة المالية</h3>
                            <button onClick={closeWalletModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-6">
                            <div className="text-sm opacity-90">الرصيد المتاح</div>
                            <div className="text-4xl font-bold">3,245.50 ر.س</div>
                            <div className="text-sm opacity-90 mt-1">آخر تحديث: اليوم 2:30 م</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <button className="btn-primary" onClick={showAddFunds}>إضافة رصيد</button>
                            <button className="btn-secondary" onClick={showWithdrawFunds}>سحب رصيد</button>
                            <button className="btn-secondary" onClick={downloadStatement}>كشف حساب</button>
                        </div>

                        {/* Payment Methods */}
                        {showPaymentMethods && (
                            <div className="mb-6">
                                <h4 className="font-bold mb-4">وسائل الدفع</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-evico-blue" onClick={() => selectPaymentMethod('mada')}>
                                        <input type="radio" name="payment" id="mada" className="ml-3" checked={selectedPaymentMethod === 'mada'} readOnly />
                                        <label htmlFor="mada" className="flex-1 cursor-pointer">
                                            <div className="font-medium">بطاقة مدى</div>
                                            <div className="text-sm text-gray-600">شبكة المدفوعات السعودية</div>
                                        </label>
                                        <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">مدى</div>
                                    </div>

                                    <div className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-evico-blue" onClick={() => selectPaymentMethod('visa')}>
                                        <input type="radio" name="payment" id="visa" className="ml-3" checked={selectedPaymentMethod === 'visa'} readOnly />
                                        <label htmlFor="visa" className="flex-1 cursor-pointer">
                                            <div className="font-medium">فيزا / ماستركارد</div>
                                            <div className="text-sm text-gray-600">بطاقات ائتمانية دولية</div>
                                        </label>
                                        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                                    </div>

                                    <div className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-evico-blue" onClick={() => selectPaymentMethod('apple-pay')}>
                                        <input type="radio" name="payment" id="apple-pay" className="ml-3" checked={selectedPaymentMethod === 'apple-pay'} readOnly />
                                        <label htmlFor="apple-pay" className="flex-1 cursor-pointer">
                                            <div className="font-medium">Apple Pay</div>
                                            <div className="text-sm text-gray-600">دفع سريع وآمن</div>
                                        </label>
                                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-xs font-bold">🍎</div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-2">المبلغ</label>
                                    <input
                                        type="number"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                        placeholder="أدخل المبلغ بالريال السعودي"
                                        value={paymentAmount}
                                        onChange={(e) => setPaymentAmount(e.target.value)}
                                    />
                                </div>

                                <button className="btn-primary w-full mt-4" onClick={processPayment}>إتمام الدفع</button>
                            </div>
                        )}

                        <h4 className="font-bold mb-4">آخر المعاملات</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                <div>
                                    <div className="font-medium">حملة سامسونج</div>
                                    <div className="text-sm text-gray-600">اليوم 2:30 م</div>
                                </div>
                                <div className="text-green-600 font-bold">+2,450 ر.س</div>
                            </div>

                            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                <div>
                                    <div className="font-medium">سحب إلى البنك</div>
                                    <div className="text-sm text-gray-600">أمس 4:15 م</div>
                                </div>
                                <div className="text-red-600 font-bold">-1,500 ر.س</div>
                            </div>

                            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                <div>
                                    <div className="font-medium">إعلان مطعم الأصالة</div>
                                    <div className="text-sm text-gray-600">أول أمس 11:20 ص</div>
                                </div>
                                <div className="text-green-600 font-bold">+875 ر.س</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Notifications Modal */}
            {showNotificationsModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-evico-blue">الإشعارات</h3>
                            <button onClick={closeNotificationsModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <div className="font-medium">طلب تعاون جديد</div>
                                <div className="text-sm text-gray-600">مصمم يريد العمل مع حملتك</div>
                                <div className="text-xs text-gray-500 mt-1">منذ 5 دقائق</div>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <div className="font-medium">تم قبول عرضك</div>
                                <div className="text-sm text-gray-600">المؤثر وافق على الشراكة</div>
                                <div className="text-xs text-gray-500 mt-1">منذ ساعة</div>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                                <div className="font-medium">حملة جاهزة للتنفيذ</div>
                                <div className="text-sm text-gray-600">جميع المتطلبات مكتملة</div>
                                <div className="text-xs text-gray-500 mt-1">منذ يومين</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
