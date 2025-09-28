import React, { useState } from 'react';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('personal');
    const [showJobModal, setShowJobModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProductImage, setSelectedProductImage] = useState(null);

    const showProfileSection = (section) => {
        setActiveTab(section);
    };

    const supportCreator = (amount) => {
        alert(`Supporting creator with ${amount} ر.س`);
    };

    const subscribePremium = (type) => {
        alert(`Subscribing to premium ${type}`);
    };

    const addFunds = () => {
        alert('Adding funds to wallet');
    };

    const withdrawFunds = () => {
        alert('Withdrawing funds from wallet');
    };

    const viewTransactions = () => {
        alert('Viewing transactions');
    };

    const viewProject = (id) => {
        alert(`Viewing project: ${id}`);
    };

    const viewJobApplications = (id) => {
        alert(`Viewing job applications for: ${id}`);
    };

    const postNewJob = () => {
        setShowJobModal(true);
    };

    const handlePostJob = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        alert('Job posted successfully!');
        setShowJobModal(false);
    };

    const addNewProduct = () => {
        setShowProductModal(true);
    };

    const viewAllOrders = () => {
        alert('Viewing all orders');
    };

    const manageNetwork = () => {
        alert('Managing network');
    };

    const viewAllReviews = () => {
        alert('Viewing all reviews');
    };

    return (
        <div id="profile" className="tab-content">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-evico-blue mb-4">موقعي</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className={`profile-tab ${activeTab === 'personal' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'} p-3 rounded-lg font-medium`} onClick={() => showProfileSection('personal')}>الملف الشخصي</button>
                    <button className={`profile-tab ${activeTab === 'professional' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'} p-3 rounded-lg font-medium`} onClick={() => showProfileSection('professional')}>الملف المهني</button>
                    <button className={`profile-tab ${activeTab === 'ecommerce' ? 'bg-evico-blue text-white' : 'bg-gray-200 text-gray-700'} p-3 rounded-lg font-medium`} onClick={() => showProfileSection('ecommerce')}>التجارة الإلكترونية</button>
                </div>
            </div>

            {/* Personal Profile Section */}
            <div id="personal" className={`profile-section ${activeTab === 'personal' ? 'active' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="feature-card">
                            <div className="flex items-center mb-6">
                                <div className="w-24 h-24 bg-gradient-to-r from-evico-blue to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold ml-6">أ.س</div>
                                <div>
                                    <h3 className="text-2xl font-bold">أحمد السالم</h3>
                                    <p className="text-gray-600">مطور ومصمم واجهات المستخدم</p>
                                    <p className="text-sm text-gray-500">الرياض، المملكة العربية السعودية</p>
                                    <div className="flex items-center mt-2">
                                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                        <span className="text-sm text-gray-600 mr-2">(4.9 من 156 تقييم)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold mb-3">الروابط المهمة</h4>
                                    <div className="space-y-2">
                                        <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold ml-3">LI</div>
                                            <div className="flex-1">
                                                <span className="font-medium">LinkedIn</span>
                                                <div className="text-xs text-gray-500">linkedin.com/ahmed-salem</div>
                                            </div>
                                            <span className="text-xs text-blue-600">267 زيارة</span>
                                        </a>
                                        <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs font-bold ml-3">GH</div>
                                            <div className="flex-1">
                                                <span className="font-medium">GitHub</span>
                                                <div className="text-xs text-gray-500">github.com/ahmed-salem</div>
                                            </div>
                                            <span className="text-xs text-blue-600">142 زيارة</span>
                                        </a>
                                        <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-xs font-bold ml-3">WA</div>
                                            <div className="flex-1">
                                                <span className="font-medium">WhatsApp</span>
                                                <div className="text-xs text-gray-500">للتواصل المباشر</div>
                                            </div>
                                            <span className="text-xs text-blue-600">89 رسالة</span>
                                        </a>
                                        <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold ml-3">CV</div>
                                            <div className="flex-1">
                                                <span className="font-medium">السيرة الذاتية</span>
                                                <div className="text-xs text-gray-500">تحميل PDF</div>
                                            </div>
                                            <span className="text-xs text-blue-600">45 تحميل</span>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-3">الدعم المالي</h4>
                                    <div className="space-y-3">
                                        <div className="financial-support-coffee p-4 rounded-lg">
                                            <h5 className="font-medium mb-2">☕ ادعمني بقهوة</h5>
                                            <p className="text-sm text-gray-600 mb-3">ساهم في دعمي لإنتاج محتوى أفضل</p>
                                            <div className="flex space-x-2 space-x-reverse">
                                                <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm" onClick={() => supportCreator(15)}>15 ر.س</button>
                                                <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm" onClick={() => supportCreator(30)}>30 ر.س</button>
                                                <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm" onClick={() => supportCreator(50)}>50 ر.س</button>
                                            </div>
                                        </div>

                                        <div className="financial-support-premium p-4 rounded-lg">
                                            <h5 className="font-medium mb-2">🌟 عضوية مميزة</h5>
                                            <p className="text-sm text-gray-600 mb-3">احصل على محتوى حصري وخدمات مميزة</p>
                                            <div className="space-y-2">
                                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded text-sm" onClick={() => subscribePremium('monthly')}>عضوية شهرية - 99 ر.س</button>
                                                <button className="w-full bg-purple-500 text-white py-2 px-4 rounded text-sm" onClick={() => subscribePremium('yearly')}>عضوية سنوية - 999 ر.س</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">المحفظة المالية</h4>
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg mb-4">
                                <div className="text-sm opacity-90">الرصيد المتاح</div>
                                <div className="text-3xl font-bold">3,245.50 ر.س</div>
                                <div className="text-sm opacity-90 mt-1">آخر تحديث: اليوم 2:30 م</div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">المبيعات هذا الشهر:</span>
                                    <span className="font-medium text-green-600">+1,890 ر.س</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">الدعم المالي:</span>
                                    <span className="font-medium text-blue-600">+125 ر.س</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">رسوم Evico:</span>
                                    <span className="font-medium text-red-600">-95 ر.س</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button className="w-full bg-evico-blue text-white py-2 px-4 rounded-lg" onClick={addFunds}>إضافة رصيد</button>
                                <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg" onClick={withdrawFunds}>سحب رصيد</button>
                                <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg" onClick={viewTransactions}>سجل المعاملات</button>
                            </div>
                        </div>

                        <div className="feature-card">
                            <h4 className="font-bold mb-4">إحصائيات الملف</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">زيارات الملف:</span>
                                    <span className="font-bold">1,247</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">النقرات على الروابط:</span>
                                    <span className="font-bold">543</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">رسائل التواصل:</span>
                                    <span className="font-bold">67</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">معدل التحويل:</span>
                                    <span className="font-bold text-green-600">12.3%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional center Profile Section */}
            <div id="professional" className={`profile-section ${activeTab === 'professional' ? 'active' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">الخبرات المهنية</h4>
                            <div className="space-y-6">
                                <div className="border-r-4 border-evico-blue pr-4">
                                    <h5 className="font-bold">مطور واجهات أمامية أول</h5>
                                    <p className="text-gray-600">شركة التقنية المتقدمة</p>
                                    <p className="text-sm text-gray-500">2020 - الآن • الرياض</p>
                                    <p className="text-sm text-gray-700 mt-2">قيادة فريق من 5 مطورين في تطوير تطبيقات ويب حديثة باستخدام React و Vue.js. نجحت في تحسين أداء التطبيقات بنسبة 40%.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">React.js</span>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Vue.js</span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
                                    </div>
                                </div>

                                <div className="border-r-4 border-gray-300 pr-4">
                                    <h5 className="font-bold">مطور ويب</h5>
                                    <p className="text-gray-600">استوديو الإبداع الرقمي</p>
                                    <p className="text-sm text-gray-500">2018 - 2020 • جدة</p>
                                    <p className="text-sm text-gray-700 mt-2">تطوير مواقع إلكترونية ومتاجر إلكترونية لأكثر من 50 عميل. التخصص في تطوير حلول مخصصة باستخدام PHP و Laravel.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">PHP</span>
                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Laravel</span>
                                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">MySQL</span>
                                    </div>
                                </div>

                                <div className="border-r-4 border-gray-300 pr-4">
                                    <h5 className="font-bold">مطور مواقع مبتدئ</h5>
                                    <p className="text-gray-600">شركة التطوير الذكي</p>
                                    <p className="text-sm text-gray-500">2016 - 2018 • الدمام</p>
                                    <p className="text-sm text-gray-700 mt-2">بداية المسيرة المهنية في تطوير الويب. العمل على مشاريع متنوعة وتعلم أحدث التقنيات.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">HTML</span>
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">CSS</span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">المشاريع المميزة</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="w-full h-32 project-image-ecommerce rounded-lg mb-3"></div>
                                    <h5 className="font-bold">منصة التجارة الإلكترونية</h5>
                                    <p className="text-sm text-gray-600 mb-2">منصة شاملة للمتاجر الإلكترونية مع نظام إدارة متقدم</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2023</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewProject('ecommerce')}>عرض التفاصيل</button>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="w-full h-32 project-image-project-mgmt rounded-lg mb-3"></div>
                                    <h5 className="font-bold">تطبيق إدارة المشاريع</h5>
                                    <p className="text-sm text-gray-600 mb-2">تطبيق ويب لإدارة المشاريع والفرق بطريقة ذكية</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2022</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewProject('project-management')}>عرض التفاصيل</button>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="w-full h-32 project-image-tech-website rounded-lg mb-3"></div>
                                    <h5 className="font-bold">موقع شركة تقنية</h5>
                                    <p className="text-sm text-gray-600 mb-2">موقع تعريفي احترافي مع نظام إدارة المحتوى</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2021</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewProject('tech-website')}>عرض التفاصيل</button>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="w-full h-32 project-image-booking rounded-lg mb-3"></div>
                                    <h5 className="font-bold">تطبيق الحجوزات</h5>
                                    <p className="text-sm text-gray-600 mb-2">نظام حجوزات ذكي للمطاعم والفنادق</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">2020</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewProject('booking-app')}>عرض التفاصيل</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Posts */}
                        <div className="feature-card">
                            <h4 className="font-bold mb-4">نشر الوظائف</h4>
                            <div className="space-y-4">
                                <div className="job-listing">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h5 className="font-bold">مطور React.js</h5>
                                            <p className="text-gray-600">شركة التقنية المتقدمة</p>
                                            <p className="text-sm text-gray-500">الرياض • دوام كامل • راتب تنافسي</p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">مفتوحة</span>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-3">نبحث عن مطور React.js خبير للانضمام إلى فريقنا المتنامي. الخبرة المطلوبة 3+ سنوات.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">نشر منذ 3 أيام • 47 متقدم</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewJobApplications('react-developer')}>عرض المتقدمين</button>
                                    </div>
                                </div>

                                <div className="job-listing">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h5 className="font-bold">مصمم UI/UX</h5>
                                            <p className="text-gray-600">استوديو الإبداع الرقمي</p>
                                            <p className="text-sm text-gray-500">جدة • دوام جزئي • بالمشروع</p>
                                        </div>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">قيد المراجعة</span>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-3">مطلوب مصمم UI/UX مبدع لتصميم تطبيق جوال مبتكر. الخبرة في Figma مطلوبة.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500">نشر منذ أسبوع • 23 متقدم</span>
                                        <button className="text-xs text-evico-blue hover:underline" onClick={() => viewJobApplications('ui-ux-designer')}>عرض المتقدمين</button>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-primary w-full mt-4 justify-center" onClick={postNewJob}>نشر وظيفة جديدة</button>
                        </div>
                    </div>

                    <div>
                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">الإحصائيات المهنية</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">المشاريع المكتملة:</span>
                                    <span className="font-bold">47</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">تقييم العملاء:</span>
                                    <span className="font-bold text-yellow-600">4.9/5</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">سنوات الخبرة:</span>
                                    <span className="font-bold">6+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">معدل الإنجاز:</span>
                                    <span className="font-bold text-green-600">98%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">متوسط الرد:</span>
                                    <span className="font-bold">2 ساعات</span>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">الشهادات والمؤهلات</h4>
                            <div className="space-y-3">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="font-medium text-sm">AWS Certified Solutions Architect</div>
                                    <div className="text-xs text-gray-600">Amazon Web Services • 2023</div>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="font-medium text-sm">React Professional Developer</div>
                                    <div className="text-xs text-gray-600">Meta • 2022</div>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="font-medium text-sm">بكالوريوس علوم الحاسب</div>
                                    <div className="text-xs text-gray-600">جامعة الملك سعود • 2016</div>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="font-medium text-sm">Google Analytics Certified</div>
                                    <div className="text-xs text-gray-600">Google • 2021</div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card">
                            <h4 className="font-bold mb-4">الشبكة المهنية</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">جهات الاتصال:</span>
                                    <span className="font-bold">234</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">المتابعين:</span>
                                    <span className="font-bold">1,247</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">أقوم بمتابعتهم:</span>
                                    <span className="font-bold">456</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h5 className="font-medium mb-2">أحدث الاتصالات</h5>
                                <div className="flex -space-x-2 space-x-reverse">
                                    <div className="w-8 h-8 network-avatar-blue rounded-full flex items-center justify-center text-white text-xs font-bold">س</div>
                                    <div className="w-8 h-8 network-avatar-green rounded-full flex items-center justify-center text-white text-xs font-bold">م</div>
                                    <div className="w-8 h-8 network-avatar-purple rounded-full flex items-center justify-center text-white text-xs font-bold">ل</div>
                                    <div className="w-8 h-8 network-avatar-orange rounded-full flex items-center justify-center text-white text-xs font-bold">ع</div>
                                    <div className="w-8 h-8 network-avatar-gray rounded-full flex items-center justify-center text-white text-xs font-bold">+12</div>
                                </div>
                            </div>

                            <button className="btn-secondary w-full mt-4" onClick={manageNetwork}>إدارة الشبكة</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* E-commerce Section */}
            <div id="ecommerce" className={`profile-section ${activeTab === 'ecommerce' ? 'active' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="feature-card mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold">متجري الإلكتروني</h4>
                                <button className="btn-primary" onClick={addNewProduct}>إضافة منتج جديد</button>
                            </div>

                            <div className="product-grid">
                                <div className="product-card">
                                    <div className="product-image">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 text-sm">إضافة منتج جديد</p>
                                </div>

                                <div className="product-card">
                                    <div className="product-image product-image-web-course"></div>
                                    <h5 className="font-medium">كورس تطوير الويب</h5>
                                    <p className="text-sm text-gray-600">كورس شامل لتعلم تطوير المواقع</p>
                                    <div className="text-evico-blue font-bold">299 ر.س</div>
                                    <div className="text-xs text-green-600">24 مبيعة</div>
                                </div>

                                <div className="product-card">
                                    <div className="product-image product-image-logo-design"></div>
                                    <h5 className="font-medium">تصميم لوجو مخصص</h5>
                                    <p className="text-sm text-gray-600">خدمة تصميم لوجو احترافي</p>
                                    <div className="text-evico-blue font-bold">150 ر.س</div>
                                    <div className="text-xs text-green-600">67 مبيعة</div>
                                </div>

                                <div className="product-card">
                                    <div className="product-image product-image-website-template"></div>
                                    <h5 className="font-medium">قالب موقع احترافي</h5>
                                    <p className="text-sm text-gray-600">قالب HTML/CSS جاهز للاستخدام</p>
                                    <div className="text-evico-blue font-bold">89 ر.س</div>
                                    <div className="text-xs text-green-600">156 مبيعة</div>
                                </div>

                                <div className="product-card">
                                    <div className="product-image product-image-tech-consultation"></div>
                                    <h5 className="font-medium">استشارة تقنية</h5>
                                    <p className="text-sm text-gray-600">ساعة استشارة تقنية مخصصة</p>
                                    <div className="text-evico-blue font-bold">200 ر.س</div>
                                    <div className="text-xs text-green-600">43 مبيعة</div>
                                </div>

                                <div className="product-card">
                                    <div className="product-image product-image-programming-book"></div>
                                    <h5 className="font-medium">كتاب البرمجة للمبتدئين</h5>
                                    <p className="text-sm text-gray-600">كتاب إلكتروني شامل</p>
                                    <div className="text-evico-blue font-bold">45 ر.س</div>
                                    <div className="text-xs text-green-600">234 مبيعة</div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card">
                            <h4 className="font-bold mb-4">الطلبات الحديثة</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div className="font-medium">كورس تطوير الويب</div>
                                        <div className="text-sm text-gray-600">العميل: سارة أحمد • منذ ساعتين</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-green-600">299 ر.س</div>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">مكتمل</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div className="font-medium">تصميم لوجو مخصص</div>
                                        <div className="text-sm text-gray-600">العميل: محمد الخالد • منذ 5 ساعات</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-blue-600">150 ر.س</div>
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">قيد التنفيذ</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <div className="font-medium">استشارة تقنية</div>
                                        <div className="text-sm text-gray-600">العميل: فاطمة السالم • أمس</div>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-green-600">200 ر.س</div>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">مكتمل</span>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-secondary w-full mt-4" onClick={viewAllOrders}>عرض جميع الطلبات</button>
                        </div>
                    </div>

                    <div>
                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">إحصائيات المبيعات</h4>
                            <div className="space-y-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">2,847 ر.س</div>
                                    <div className="text-gray-600">إجمالي المبيعات</div>
                                    <div className="text-sm text-green-600">+23% هذا الشهر</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-blue-600">524</div>
                                        <div className="text-sm text-gray-600">عدد المبيعات</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-purple-600">1,234</div>
                                        <div className="text-sm text-gray-600">زوار المتجر</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">معدل التحويل:</span>
                                        <span className="font-medium">42.5%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">متوسط قيمة الطلب:</span>
                                        <span className="font-medium">165 ر.س</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">العملاء المتكررين:</span>
                                        <span className="font-medium">67%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card mb-6">
                            <h4 className="font-bold mb-4">أفضل المنتجات</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-medium text-sm">قالب موقع احترافي</div>
                                        <div className="text-xs text-gray-600">156 مبيعة</div>
                                    </div>
                                    <div className="text-green-600 font-bold">89 ر.س</div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-medium text-sm">كتاب البرمجة للمبتدئين</div>
                                        <div className="text-xs text-gray-600">234 مبيعة</div>
                                    </div>
                                    <div className="text-green-600 font-bold">45 ر.س</div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-medium text-sm">تصميم لوجو مخصص</div>
                                        <div className="text-xs text-gray-600">67 مبيعة</div>
                                    </div>
                                    <div className="text-green-600 font-bold">150 ر.س</div>
                                </div>
                            </div>
                        </div>

                        <div className="feature-card">
                            <h4 className="font-bold mb-4">تقييمات العملاء</h4>
                            <div className="text-center mb-4">
                                <div className="text-3xl font-bold text-yellow-600">4.9</div>
                                <div className="rating-stars text-lg">⭐⭐⭐⭐⭐</div>
                                <div className="text-sm text-gray-600">من 127 تقييم</div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <span className="text-sm w-8">5⭐</span>
                                    <div className="progress-bar flex-1 ml-2">
                                        <div className="progress-fill" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="text-sm text-gray-600 mr-2">85%</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-sm w-8">4⭐</span>
                                    <div className="progress-bar flex-1 ml-2">
                                        <div className="progress-fill" style={{ width: '12%' }}></div>
                                    </div>
                                    <span className="text-sm text-gray-600 mr-2">12%</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-sm w-8">3⭐</span>
                                    <div className="progress-bar flex-1 ml-2">
                                        <div className="progress-fill" style={{ width: '3%' }}></div>
                                    </div>
                                    <span className="text-sm text-gray-600 mr-2">3%</span>
                                </div>
                            </div>

                            <button className="btn-secondary w-full mt-4" onClick={viewAllReviews}>عرض جميع التقييمات</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Posting Modal */}
            {showJobModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="text-xl font-bold mb-4">نشر وظيفة جديدة</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="عنوان الوظيفة"
                            />
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="اسم الشركة"
                            />
                            <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                <option>نوع العمل</option>
                                <option>دوام كامل</option>
                                <option>دوام جزئي</option>
                                <option>عمل حر</option>
                                <option>تدريب</option>
                            </select>
                            <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                <option>المدينة</option>
                                <option>الرياض</option>
                                <option>جدة</option>
                                <option>الدمام</option>
                                <option>مكة</option>
                                <option>المدينة</option>
                            </select>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                rows="4"
                                placeholder="وصف الوظيفة والمتطلبات..."
                            ></textarea>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="الراتب المتوقع (اختياري)"
                            />
                        </div>
                        <div className="flex !space-x-2 space-x-reverse mt-6">
                            <button
                                className="btn-primary flex-1"
                                onClick={() => {
                                    alert('Job posted successfully!');
                                    setShowJobModal(false);
                                }}
                            >
                                نشر الوظيفة
                            </button>
                            <button
                                className="btn-secondary flex-1"
                                onClick={() => setShowJobModal(false)}
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Addition Modal */}
            {showProductModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="text-xl font-bold mb-4">إضافة منتج جديد</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="اسم المنتج"
                            />
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                rows="3"
                                placeholder="وصف المنتج..."
                            ></textarea>
                            <input
                                type="number"
                                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="السعر (ر.س)"
                            />
                            <select className="w-full p-3 border border-gray-300 rounded-lg text-base">
                                <option>نوع المنتج</option>
                                <option>منتج رقمي</option>
                                <option>خدمة</option>
                                <option>كورس تدريبي</option>
                                <option>استشارة</option>
                                <option>قالب أو أداة</option>
                            </select>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-evico-blue transition-colors">
                                <input
                                    type="file"
                                    accept="image/png,image/jpeg,image/jpg"
                                    className="hidden"
                                    id="product-image"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file && file.size > 5 * 1024 * 1024) {
                                            alert('حجم الملف يجب أن يكون أقل من 5 MB');
                                            e.target.value = '';
                                            return;
                                        }
                                        setSelectedProductImage(file);
                                    }}
                                />
                                <label htmlFor="product-image" className="cursor-pointer">
                                    <p className="text-gray-600">رفع صورة المنتج</p>
                                    <p className="text-sm text-gray-500 mt-1">PNG, JPG (حد أقصى 5 MB)</p>
                                </label>
                            </div>
                            {selectedProductImage && (
                                <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm text-green-700">
                                        تم اختيار الملف: <span className="font-medium">{selectedProductImage.name}</span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedProductImage(null);
                                            document.getElementById('product-image').value = '';
                                        }}
                                        className="text-xs text-green-600 hover:underline mt-1"
                                    >
                                        إزالة الملف
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="flex !space-x-2 space-x-reverse mt-6">
                            <button
                                className="btn-primary flex-1"
                                onClick={() => {
                                    alert('Product saved successfully!');
                                    setShowProductModal(false);
                                }}
                            >
                                حفظ المنتج
                            </button>
                            <button
                                className="btn-secondary flex-1"
                                onClick={() => setShowProductModal(false)}
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
