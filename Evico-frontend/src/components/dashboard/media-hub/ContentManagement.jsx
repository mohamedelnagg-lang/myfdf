import React from "react";

export default function ContentManagement() {
    const uploadNewMedia = () => {
        alert("Upload new media");
    };

    const selectMedia = (id) => {
        alert(`Select media: ${id}`);
    };

    const manageMediaLibrary = () => {
        alert("Manage media library");
    };

    const organizeMedia = () => {
        alert("Organize media");
    };

    const openPlatformChat = (platform) => {
        alert(`Open chat for ${platform}`);
    };

    const openUnifiedChatInterface = () => {
        alert("Open unified chat interface");
    };

    const schedulePost = () => {
        alert("Schedule post");
    };

    const saveAsDraft = () => {
        alert("Save as draft");
    };

    const publishNow = () => {
        alert("Publish now");
    };

    const editScheduledPost = (id) => {
        alert(`Edit post: ${id}`);
    };

    const deleteScheduledPost = (id) => {
        alert(`Delete post: ${id}`);
    };

    const viewPostStats = (id) => {
        alert(`View stats: ${id}`);
    };

    const boostPost = (id) => {
        alert(`Boost post: ${id}`);
    };

    return (
        <div id="content" className="media-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Media Library */}
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4">مكتبة الوسائط</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors" onClick={uploadNewMedia}>
                            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                        <div className="aspect-square bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('image1')}>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white opacity-0 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="aspect-square bg-gradient-to-r from-green-400 to-blue-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('image2')}>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200"></div>
                        </div>
                        <div className="aspect-square bg-gradient-to-r from-pink-400 to-red-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('video1')}>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white opacity-0 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="aspect-square bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('image3')}></div>
                        <div className="aspect-square bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('image4')}></div>
                        <div className="aspect-square bg-gradient-to-r from-teal-400 to-green-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('video2')}>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white opacity-0 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="aspect-square bg-gradient-to-r from-red-400 to-pink-500 rounded-lg relative overflow-hidden cursor-pointer" onClick={() => selectMedia('image5')}></div>
                    </div>
                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="btn-primary flex-1" onClick={manageMediaLibrary}>إدارة المكتبة</button>
                        <button className="btn-secondary flex-1" onClick={organizeMedia}>تنظيم المجلدات</button>
                    </div>
                </div>

                {/* Unified Chat */}
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4">الشات الموحد</h3>
                    <div className="space-y-3 mb-4">
                        <div className="social-platform platform-instagram" onClick={() => openPlatformChat('instagram')}>
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold ml-3">IG</div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Instagram</span>
                                    <span className="notification-badge">12</span>
                                </div>
                                <div className="text-sm text-gray-600">آخر رسالة: "شكراً لك على المنتج الرائع!"</div>
                            </div>
                        </div>

                        <div className="social-platform platform-facebook" onClick={() => openPlatformChat('facebook')}>
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold ml-3">FB</div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Facebook</span>
                                    <span className="notification-badge">3</span>
                                </div>
                                <div className="text-sm text-gray-600">آخر رسالة: "هل يمكن إرسال تفاصيل العرض؟"</div>
                            </div>
                        </div>

                        <div className="social-platform" onClick={() => openPlatformChat('whatsapp')}>
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold ml-3">WA</div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">WhatsApp Business</span>
                                    <span className="notification-badge">7</span>
                                </div>
                                <div className="text-sm text-gray-600">آخر رسالة: "متى سيتم التسليم؟"</div>
                            </div>
                        </div>

                        <div className="social-platform platform-youtube" onClick={() => openPlatformChat('youtube')}>
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold ml-3">YT</div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">YouTube</span>
                                    <span className="notification-badge">1</span>
                                </div>
                                <div className="text-sm text-gray-600">تعليق جديد: "فيديو مميز ومفيد جداً"</div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary w-full" onClick={openUnifiedChatInterface}>فتح الشات الموحد</button>
                </div>
            </div>

            {/* Content Scheduling */}
            <div className="feature-card mb-8">
                <h3 className="text-lg font-bold mb-4">جدولة المحتوى المتقدمة</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium mb-3">إنشاء منشور جديد</h4>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">المنصات</label>
                                <div className="flex flex-wrap gap-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="ml-2" defaultChecked />
                                        <span className="text-sm">Instagram</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="ml-2" />
                                        <span className="text-sm">Facebook</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="ml-2" />
                                        <span className="text-sm">Twitter</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="ml-2" />
                                        <span className="text-sm">TikTok</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">نص المنشور</label>
                                <textarea className="w-full p-3 border border-gray-300 rounded-lg text-base" rows="4" placeholder="اكتب محتوى المنشور هنا..."></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">الهاشتاقات</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg text-base" placeholder="#تسويق #إعلانات #تصميم" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">تاريخ النشر</label>
                                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">وقت النشر</label>
                                    <input type="time" className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">التقويم الشهري</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <button className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <h5 className="font-bold">يناير 2024</h5>
                                <button className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="calendar-grid">
                                <div className="text-xs font-bold text-center py-2">السبت</div>
                                <div className="text-xs font-bold text-center py-2">الأحد</div>
                                <div className="text-xs font-bold text-center py-2">الاثنين</div>
                                <div className="text-xs font-bold text-center py-2">الثلاثاء</div>
                                <div className="text-xs font-bold text-center py-2">الأربعاء</div>
                                <div className="text-xs font-bold text-center py-2">الخميس</div>
                                <div className="text-xs font-bold text-center py-2">الجمعة</div>
                                {/* Calendar will be populated by JavaScript */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex !space-x-2 space-x-reverse mt-6">
                    <button className="btn-primary" onClick={schedulePost}>جدولة المنشور</button>
                    <button className="btn-secondary" onClick={saveAsDraft}>حفظ كمسودة</button>
                    <button className="btn-secondary" onClick={publishNow}>نشر فوري</button>
                </div>
            </div>

            {/* Scheduled Posts */}
            <div className="feature-card">
                <h3 className="text-lg font-bold mb-4">المنشورات المجدولة</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                            <div className="font-medium">منشور عن المنتج الجديد</div>
                            <div className="text-sm text-gray-600">Instagram, Facebook • اليوم 6:00 م</div>
                            <div className="text-xs text-gray-500">تم الجدولة منذ ساعتين</div>
                        </div>
                        <div className="flex !space-x-2 space-x-reverse">
                            <button className="btn-secondary text-sm py-1 px-3" onClick={() => editScheduledPost('post1')}>تعديل</button>
                            <button className="bg-red-100 text-red-800 text-sm py-1 px-3 rounded" onClick={() => deleteScheduledPost('post1')}>حذف</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                            <div className="font-medium">إعلان عن الخصم الخاص</div>
                            <div className="text-sm text-gray-600">Instagram, TikTok • غداً 10:00 ص</div>
                            <div className="text-xs text-gray-500">تم الجدولة أمس</div>
                        </div>
                        <div className="flex !space-x-2 space-x-reverse">
                            <button className="btn-secondary text-sm py-1 px-3" onClick={() => editScheduledPost('post2')}>تعديل</button>
                            <button className="bg-red-100 text-red-800 text-sm py-1 px-3 rounded" onClick={() => deleteScheduledPost('post2')}>حذف</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-right-4 border-green-500">
                        <div>
                            <div className="font-medium">شكر العملاء على الدعم</div>
                            <div className="text-sm text-gray-600">جميع المنصات • تم النشر منذ 3 ساعات</div>
                            <div className="text-xs text-green-600">نشر بنجاح • 245 تفاعل</div>
                        </div>
                        <div className="flex !space-x-2 space-x-reverse">
                            <button className="btn-secondary text-sm py-1 px-3" onClick={() => viewPostStats('post3')}>الإحصائيات</button>
                            <button className="btn-secondary text-sm py-1 px-3" onClick={() => boostPost('post3')}>ترويج</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
