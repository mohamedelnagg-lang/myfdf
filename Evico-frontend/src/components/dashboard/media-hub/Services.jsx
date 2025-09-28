import React, { useState } from "react";

export default function Services() {
    const [serviceRequestFormVisible, setServiceRequestFormVisible] = useState(false);

    const requestService = (service) => {
        alert(`Request service: ${service}`);
        setServiceRequestFormVisible(true);
    };

    const submitServiceRequest = () => {
        alert("Service request submitted");
        setServiceRequestFormVisible(false);
    };

    const cancelServiceRequest = () => {
        setServiceRequestFormVisible(false);
    };

    const contactProvider = (provider) => {
        alert(`Contact provider: ${provider}`);
    };

    const viewServiceDetails = (service) => {
        alert(`View service details: ${service}`);
    };

    const rateService = (service) => {
        alert(`Rate service: ${service}`);
    };

    const downloadDelivery = (service) => {
        alert(`Download delivery: ${service}`);
    };

    const reviewService = (service) => {
        alert(`Review service: ${service}`);
    };

    const viewAllServiceRequests = () => {
        alert("View all service requests");
    };

    return (
        <div id="services" className="media-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="service-card">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6A4,4 0 0,1 16,10A4,4 0 0,1 12,14A4,4 0 0,1 8,10A4,4 0 0,1 12,6Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">تصميم جرافيك</h3>
                    <p className="text-gray-600 mb-4">لوجوهات، بوسترات، ومواد تسويقية احترافية</p>
                    <div className="text-evico-blue font-bold mb-2">من 50 ر.س</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ التسليم: 1-3 أيام</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(127 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('design')}>طلب الخدمة</button>
                </div>

                <div className="service-card">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">كتابة محتوى</h3>
                    <p className="text-gray-600 mb-4">مقالات، منشورات، ونصوص تسويقية مؤثرة</p>
                    <div className="text-evico-blue font-bold mb-2">من 75 ر.س</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ التسليم: 2-5 أيام</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(89 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('writing')}>طلب الخدمة</button>
                </div>

                <div className="service-card">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">مونتاج فيديو</h3>
                    <p className="text-gray-600 mb-4">تحرير وإنتاج مقاطع فيديو احترافية</p>
                    <div className="text-evico-blue font-bold mb-2">من 150 ر.س</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ التسليم: 3-7 أيام</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(64 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('video')}>طلب الخدمة</button>
                </div>

                <div className="service-card">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">تصوير فوتوغرافي</h3>
                    <p className="text-gray-600 mb-4">جلسات تصوير منتجات وفعاليات</p>
                    <div className="text-evico-blue font-bold mb-2">من 200 ر.س</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ التسليم: حسب الطلب</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(156 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('photography')}>طلب الخدمة</button>
                </div>

                <div className="service-card">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">استراتيجية تسويق</h3>
                    <p className="text-gray-600 mb-4">خطط تسويقية متكاملة ومدروسة</p>
                    <div className="text-evico-blue font-bold mb-2">من 500 ر.س</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ التسليم: 5-10 أيام</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(73 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('strategy')}>طلب الخدمة</button>
                </div>

                <div className="service-card">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">إدارة حسابات</h3>
                    <p className="text-gray-600 mb-4">إدارة شاملة لحساباتك على السوشال ميديا</p>
                    <div className="text-evico-blue font-bold mb-2">من 800 ر.س/شهر</div>
                    <div className="text-sm text-gray-600 mb-4">⏱️ خدمة شهرية مستمرة</div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm text-gray-600 mr-2">(201 تقييم)</span>
                    </div>
                    <button className="btn-primary w-full" onClick={() => requestService('social-management')}>طلب الخدمة</button>
                </div>
            </div>

            {/* Service Request Form */}
            {serviceRequestFormVisible && (
                <div id="serviceRequestForm" className="feature-card">
                    <h3 className="text-xl font-bold mb-6 text-evico-blue">طلب خدمة جديدة</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">نوع الخدمة</label>
                                <select id="serviceType" className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                    <option>اختر نوع الخدمة</option>
                                    <option>تصميم جرافيك</option>
                                    <option>كتابة محتوى</option>
                                    <option>مونتاج فيديو</option>
                                    <option>تصوير فوتوغرافي</option>
                                    <option>استراتيجية تسويق</option>
                                    <option>إدارة حسابات</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">الميزانية المتاحة</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                    <option>أقل من 100 ر.س</option>
                                    <option>100 - 500 ر.س</option>
                                    <option>500 - 1000 ر.س</option>
                                    <option>1000 - 5000 ر.س</option>
                                    <option>أكثر من 5000 ر.س</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">وصف مفصل للمطلوب</label>
                            <textarea className="w-full p-3 border border-gray-300 rounded-lg text-base" rows="5" placeholder="اكتب تفاصيل دقيقة عن الخدمة المطلوبة، الأهداف، والمتطلبات الخاصة..."></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">الموعد المطلوب للتسليم</label>
                                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">الأولوية</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                    <option>عادية</option>
                                    <option>عالية</option>
                                    <option>عاجلة</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">رفع ملفات مرجعية (اختياري)</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="text-gray-600">اسحب الملفات هنا أو انقر للاختيار</p>
                                <p className="text-sm text-gray-500 mt-1">PNG, JPG, PDF, DOC (حد أقصى 10 ملفات)</p>
                            </div>
                        </div>

                        <div className="flex !space-x-4 space-x-reverse">
                            <button type="button" className="btn-primary flex-1" onClick={submitServiceRequest}>إرسال الطلب</button>
                            <button type="button" className="btn-secondary flex-1" onClick={cancelServiceRequest}>إلغاء</button>
                        </div>
                    </form>
                </div>
            )}

            {/* My Service Requests */}
            <div className="feature-card">
                <h3 className="text-lg font-bold mb-4">طلباتي الحالية</h3>
                <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-medium">تصميم لوجو لمطعم</h4>
                                <p className="text-sm text-gray-600">مصمم: أحمد التصميم</p>
                                <p className="text-xs text-gray-500">تم الطلب: منذ 3 أيام</p>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">قيد التنفيذ</span>
                        </div>
                        <div className="progress-bar mb-3">
                            <div className="progress-fill" style={{ width: "65%" }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">المتبقي: يومين</span>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-secondary text-sm py-1 px-3" onClick={() => contactProvider('ahmed-design')}>تواصل</button>
                                <button className="btn-secondary text-sm py-1 px-3" onClick={() => viewServiceDetails('logo-design')}>التفاصيل</button>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-medium">كتابة محتوى للموقع</h4>
                                <p className="text-sm text-gray-600">كاتب: سارة المحتوى</p>
                                <p className="text-xs text-gray-500">تم الطلب: منذ أسبوع</p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">مكتمل</span>
                        </div>
                        <div className="progress-bar mb-3">
                            <div className="progress-fill" style={{ width: "100%" }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-green-600">تم التسليم بنجاح</span>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-primary text-sm py-1 px-3" onClick={() => rateService('content-writing')}>تقييم</button>
                                <button className="btn-secondary text-sm py-1 px-3" onClick={() => downloadDelivery('content-writing')}>تحميل</button>
                            </div>
                        </div>
                    </div>

                    <div className="border border-red-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="font-medium">مونتاج فيديو إعلاني</h4>
                                <p className="text-sm text-gray-600">منتج: محمد المونتاج</p>
                                <p className="text-xs text-gray-500">تم الطلب: منذ 5 أيام</p>
                            </div>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">يحتاج مراجعة</span>
                        </div>
                        <div className="progress-bar mb-3">
                            <div className="progress-fill" style={{ width: "85%" }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-red-600">يحتاج توضيحات إضافية</span>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-primary text-sm py-1 px-3" onClick={() => reviewService('video-editing')}>مراجعة</button>
                                <button className="btn-secondary text-sm py-1 px-3" onClick={() => contactProvider('mohammed-montage')}>تواصل</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn-secondary w-full mt-4" onClick={viewAllServiceRequests}>عرض جميع الطلبات</button>
            </div>
        </div>
    );
}
