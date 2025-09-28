import React, { useState } from "react";
import "./dashboard.css";

export default function ScreenManage() {
    const [showContentManagement, setShowContentManagement] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newScreenName, setNewScreenName] = useState('');
    const [newScreenLocation, setNewScreenLocation] = useState('');
    const [newScreenSize, setNewScreenSize] = useState('حجم الشاشة');
    const [newScreenResolution, setNewScreenResolution] = useState('دقة الشاشة');

    const addNewScreen = () => {
        setShowAddModal(true);
    };

    const saveNewScreen = () => {
        // For now, just alert
        alert(`Saving screen: ${newScreenName}, ${newScreenLocation}, ${newScreenSize}, ${newScreenResolution}`);
        // Reset form
        setNewScreenName('');
        setNewScreenLocation('');
        setNewScreenSize('حجم الشاشة');
        setNewScreenResolution('دقة الشاشة');
        setShowAddModal(false);
    };

    const manageScreen = (screenId) => {
        setShowContentManagement(!showContentManagement);
        console.log(`Manage screen: ${screenId}`);
    };

    const viewStats = (screenId) => {
        alert(`View stats for ${screenId}`);
    };

    const uploadFiles = () => {
        alert("Upload files functionality");
    };

    const previewContent = () => {
        alert("Preview content functionality");
    };

    const scheduleContent = () => {
        alert("Schedule content functionality");
    };

    const acceptAd = (adId) => {
        alert(`Accept ad: ${adId}`);
    };

    const rejectAd = (adId) => {
        alert(`Reject ad: ${adId}`);
    };

    return (
        <div id="screens" className="tab-content">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-evico-blue">إدارة الشاشات</h2>
                <button className="btn-primary" onClick={addNewScreen}>
                    <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    إضافة شاشة جديدة
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="feature-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-lg">شاشة الرياض مول</h3>
                            <p className="text-gray-600">الرياض - حي العليا</p>
                            <p className="text-sm text-gray-500">65 بوصة • 4K HDR</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">نشطة</span>
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">المشاهدات اليوم:</span>
                            <span className="font-medium">15,432</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">الأرباح اليوم:</span>
                            <span className="font-medium text-green-600">850 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">الإعلانات النشطة:</span>
                            <span className="font-medium">3</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '85%' }}></div>
                        </div>
                        <div className="text-xs text-gray-500">85% من السعة</div>
                    </div>
                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => manageScreen('riyadh-mall')}>إدارة المحتوى</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewStats('riyadh-mall')}>الإحصائيات</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-lg">شاشة الأندلس بلازا</h3>
                            <p className="text-gray-600">جدة - حي الأندلس</p>
                            <p className="text-sm text-gray-500">55 بوصة • Full HD</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">صيانة</span>
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">المشاهدات اليوم:</span>
                            <span className="font-medium">0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">الأرباح اليوم:</span>
                            <span className="font-medium text-gray-400">0 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">آخر تشغيل:</span>
                            <span className="font-medium">أمس 3:22 م</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '0%' }}></div>
                        </div>
                        <div className="text-xs text-red-500">متوقفة للصيانة</div>
                    </div>
                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg text-sm" disabled>إدارة المحتوى</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewStats('andalus-plaza')}>الإحصائيات</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-lg">شاشة الكورنيش</h3>
                            <p className="text-gray-600">الدمام - الكورنيش</p>
                            <p className="text-sm text-gray-500">75 بوصة • 4K HDR</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">نشطة</span>
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">المشاهدات اليوم:</span>
                            <span className="font-medium">8,921</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">الأرباح اليوم:</span>
                            <span className="font-medium text-green-600">425 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">الإعلانات النشطة:</span>
                            <span className="font-medium">2</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '60%' }}></div>
                        </div>
                        <div className="text-xs text-gray-500">60% من السعة</div>
                    </div>
                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => manageScreen('corniche')}>إدارة المحتوى</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewStats('corniche')}>الإحصائيات</button>
                    </div>
                </div>
            </div>

            {/* Screen Content Management Section */}
            <div id="screenContentManagement" className="feature-card" style={{ display: showContentManagement ? 'block' : 'none' }}>
                <h3 className="text-xl font-bold mb-6 text-evico-blue">إدارة محتوى الشاشة</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upload Content */}
                    <div>
                        <h4 className="font-bold mb-4">رفع المحتوى الجديد</h4>
                        <div className="drag-drop-area mb-4" id="dropArea">
                            <svg className="w-12 h-12 text-evico-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="text-evico-blue font-medium mb-2">اسحب الملفات هنا أو انقر للاختيار</p>
                            <p className="text-sm text-gray-600">الصور: JPG, PNG, GIF (حتى 10 ملفات)</p>
                            <p className="text-sm text-gray-600">الفيديوهات: MP4, MOV (حتى 10 ملفات)</p>
                            <input type="file" id="fileInput" multiple accept="image/*,video/*" style={{ display: 'none' }} />
                        </div>

                        <div id="previewContainer" className="mb-4"></div>

                        <div className="flex !space-x-2 space-x-reverse">
                            <button className="btn-primary flex-1" onClick={uploadFiles}>
                                <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                </svg>
                                رفع الملفات
                            </button>
                            <button className="btn-secondary flex-1" onClick={previewContent}>معاينة مباشرة</button>
                        </div>
                    </div>

                    {/* Scheduling */}
                    <div>
                        <h4 className="font-bold mb-4">جدولة العرض</h4>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">تاريخ البداية</label>
                                <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">تاريخ النهاية</label>
                                <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg text-base" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">أوقات العرض</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="time" className="p-2 border border-gray-300 rounded-lg text-base" placeholder="من" />
                                    <input type="time" className="p-2 border border-gray-300 rounded-lg text-base" placeholder="إلى" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">تكرار العرض</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                    <option>يومياً</option>
                                    <option>أسبوعياً</option>
                                    <option>نهايات الأسبوع فقط</option>
                                    <option>أيام العمل فقط</option>
                                    <option>مخصص</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">مدة عرض كل عنصر (ثواني)</label>
                                <input type="number" className="w-full p-3 border border-gray-300 rounded-lg text-base" value="10" min="5" max="60" />
                            </div>
                        </div>

                        <div className="calendar-grid mt-6">
                            <div className="font-bold text-center">السبت</div>
                            <div className="font-bold text-center">الأحد</div>
                            <div className="font-bold text-center">الاثنين</div>
                            <div className="font-bold text-center">الثلاثاء</div>
                            <div className="font-bold text-center">الأربعاء</div>
                            <div className="font-bold text-center">الخميس</div>
                            <div className="font-bold text-center">الجمعة</div>
                            {/* Calendar cells will be generated by JavaScript */}
                        </div>

                        <button className="btn-primary w-full mt-4" onClick={scheduleContent}>
                            <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                            </svg>
                            حفظ الجدولة
                        </button>
                    </div>
                </div>

                {/* Suggested Ads */}
                <div className="mt-8">
                    <h4 className="font-bold mb-4">إعلانات إضافية مقترحة</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h5 className="font-medium">إعلان شركة الاتصالات</h5>
                                    <p className="text-sm text-gray-600">مدة: 15 ثانية</p>
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">+250 ر.س</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">إعلان ترويجي لخدمة الإنترنت المنزلي</p>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-primary flex-1 text-sm py-2" onClick={() => acceptAd('telecom')}>قبول</button>
                                <button className="btn-secondary flex-1 text-sm py-2" onClick={() => rejectAd('telecom')}>رفض</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h5 className="font-medium">إعلان مطعم البيك</h5>
                                    <p className="text-sm text-gray-600">مدة: 20 ثانية</p>
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">+180 ر.س</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">إعلان لوجبة جديدة من البيك</p>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-primary flex-1 text-sm py-2" onClick={() => acceptAd('albaik')}>قبول</button>
                                <button className="btn-secondary flex-1 text-sm py-2" onClick={() => rejectAd('albaik')}>رفض</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h5 className="font-medium">إعلان جامعة الملك سعود</h5>
                                    <p className="text-sm text-gray-600">مدة: 30 ثانية</p>
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">+320 ر.س</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">إعلان للتسجيل في البرامج الصيفية</p>
                            <div className="flex !space-x-2 space-x-reverse">
                                <button className="btn-primary flex-1 text-sm py-2" onClick={() => acceptAd('ksu')}>قبول</button>
                                <button className="btn-secondary flex-1 text-sm py-2" onClick={() => rejectAd('ksu')}>رفض</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold mb-4">إضافة شاشة جديدة</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="اسم الشاشة"
                                value={newScreenName}
                                onChange={(e) => setNewScreenName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="الموقع (المدينة - الحي)"
                                value={newScreenLocation}
                                onChange={(e) => setNewScreenLocation(e.target.value)}
                            />
                            <select
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                value={newScreenSize}
                                onChange={(e) => setNewScreenSize(e.target.value)}
                            >
                                <option>حجم الشاشة</option>
                                <option>32 بوصة</option>
                                <option>43 بوصة</option>
                                <option>55 بوصة</option>
                                <option>65 بوصة</option>
                                <option>75 بوصة</option>
                            </select>
                            <select
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                value={newScreenResolution}
                                onChange={(e) => setNewScreenResolution(e.target.value)}
                            >
                                <option>دقة الشاشة</option>
                                <option>HD</option>
                                <option>Full HD</option>
                                <option>4K</option>
                                <option>8K</option>
                            </select>
                        </div>
                        <div className="flex !space-x-2 space-x-reverse mt-6">
                            <button className="btn-primary flex-1" onClick={saveNewScreen}>حفظ الشاشة</button>
                            <button className="btn-secondary flex-1" onClick={() => setShowAddModal(false)}>إلغاء</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
