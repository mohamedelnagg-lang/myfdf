import React from "react";

export default function CelebritiesCompanies() {
    const contactInfluencer = (id) => {
        alert(`Contact influencer: ${id}`);
    };

    const viewInfluencerProfile = (id) => {
        alert(`View profile: ${id}`);
    };

    const contactCompany = (id) => {
        alert(`Contact company: ${id}`);
    };

    const viewCompanyProfile = (id) => {
        alert(`View company profile: ${id}`);
    };

    const loadMoreInfluencers = () => {
        alert("Load more influencers");
    };

    return (
        <div id="celebrities" className="tab-content">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <h2 className="text-2xl font-bold text-evico-blue text-center md:text-left">المشاهير والشركات</h2>
                <div className="flex flex-col sm:flex-row !space-y-2 sm:!space-y-0 !space-x-0 sm:!space-x-3 space-x-reverse mt-4 md:mt-0">
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-base">
                        <option>جميع التخصصات</option>
                        <option>تقنية</option>
                        <option>أزياء</option>
                        <option>مطاعم</option>
                        <option>رياضة</option>
                        <option>ترفيه</option>
                        <option>تعليم</option>
                        <option>صحة</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-base">
                        <option>جميع المدن</option>
                        <option>الرياض</option>
                        <option>جدة</option>
                        <option>الدمام</option>
                        <option>مكة</option>
                        <option>المدينة</option>
                    </select>
                    <button className="btn-primary">بحث متقدم</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">س.أ</div>
                        <div>
                            <h3 className="font-bold text-lg">سارة الأحمد</h3>
                            <p className="text-gray-600">مؤثرة - أزياء وجمال</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.8)</span>
                            </div>
                        </div>
                    </div>

                    <div className="!space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان ستوري:</span>
                            <span className="font-medium">500 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان فيد:</span>
                            <span className="font-medium">1,200 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">فيديو ريلز:</span>
                            <span className="font-medium">800 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">المتابعين:</span>
                            <span className="font-medium text-blue-600">245K</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">معدل التفاعل:</span>
                            <span className="font-medium text-green-600">8.2%</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">آخر الشراكات:</h5>
                        <div className="flex -space-x-2 space-x-reverse">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">س</div>
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">ه</div>
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">ن</div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">+5</div>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactInfluencer('sara')}>تواصل للتعاون</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewInfluencerProfile('sara')}>عرض الملف</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">ت.س</div>
                        <div>
                            <h3 className="font-bold text-lg">شركة التقنية السعودية</h3>
                            <p className="text-gray-600">شركة - تقنية ومعلومات</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.9)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">رعاية حدث:</span>
                            <span className="font-medium">15,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">شراكة شهرية:</span>
                            <span className="font-medium">45,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان شاشات:</span>
                            <span className="font-medium">3,500 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">المشاريع المنجزة:</span>
                            <span className="font-medium text-blue-600">127</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">متوسط الميزانية:</span>
                            <span className="font-medium text-green-600">25K ر.س</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">التخصصات:</h5>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">تطبيقات</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">ذكاء اصطناعي</span>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">أمن سيبراني</span>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactCompany('tech-sa')}>تواصل للشراكة</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewCompanyProfile('tech-sa')}>عرض الملف</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">م.ع</div>
                        <div>
                            <h3 className="font-bold text-lg">محمد العتيبي</h3>
                            <p className="text-gray-600">مؤثر - رياضة وصحة</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.7)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان ستوري:</span>
                            <span className="font-medium">750 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان فيد:</span>
                            <span className="font-medium">1,800 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">فيديو تمارين:</span>
                            <span className="font-medium">1,200 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">المتابعين:</span>
                            <span className="font-medium text-blue-600">180K</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">معدل التفاعل:</span>
                            <span className="font-medium text-green-600">12.1%</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">التخصصات:</h5>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">كمال أجسام</span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">تغذية</span>
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">لياقة</span>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactInfluencer('mohammed')}>تواصل للتعاون</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewInfluencerProfile('mohammed')}>عرض الملف</button>
                    </div>
                </div>

                {/* More influencers/companies cards can be added here */}
                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">ل.م</div>
                        <div>
                            <h3 className="font-bold text-lg">ليلى محمد</h3>
                            <p className="text-gray-600">مؤثرة - طبخ وأكل</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.6)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان وصفة:</span>
                            <span className="font-medium">600 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">ريفيو منتج:</span>
                            <span className="font-medium">900 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">فيديو طبخ:</span>
                            <span className="font-medium">1,500 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">المتابعين:</span>
                            <span className="font-medium text-blue-600">320K</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">معدل التفاعل:</span>
                            <span className="font-medium text-green-600">15.3%</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">التخصصات:</h5>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">طبخ عربي</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">حلويات</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">أكل صحي</span>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactInfluencer('layla')}>تواصل للتعاون</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewInfluencerProfile('layla')}>عرض الملف</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">ش.ت</div>
                        <div>
                            <h3 className="font-bold text-lg">شركة التسويق الإبداعي</h3>
                            <p className="text-gray-600">وكالة - تسويق رقمي</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.8)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">حملة تسويقية:</span>
                            <span className="font-medium">20,000 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">إدارة حسابات:</span>
                            <span className="font-medium">8,000 ر.س/شهر</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">تصميم + محتوى:</span>
                            <span className="font-medium">5,500 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">العملاء النشطين:</span>
                            <span className="font-medium text-blue-600">45</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">نسبة النجاح:</span>
                            <span className="font-medium text-green-600">92%</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">الخدمات:</h5>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">إعلانات</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">محتوى</span>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">تصميم</span>
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">استراتيجية</span>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactCompany('creative-marketing')}>تواصل للشراكة</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewCompanyProfile('creative-marketing')}>عرض الملف</button>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl ml-4">ع.خ</div>
                        <div>
                            <h3 className="font-bold text-lg">عبدالله الخالدي</h3>
                            <p className="text-gray-600">مؤثر - سيارات وتقنية</p>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                                <span className="ml-2 text-gray-600">(4.9)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">ريفيو سيارة:</span>
                            <span className="font-medium">2,500 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">إعلان منتج تقني:</span>
                            <span className="font-medium">1,800 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">فيديو يوتيوب:</span>
                            <span className="font-medium">3,200 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">المتابعين:</span>
                            <span className="font-medium text-blue-600">420K</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">مشاهدات الفيديو:</span>
                            <span className="font-medium text-green-600">2.1M</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="font-medium text-sm mb-2">التخصصات:</h5>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">سيارات فاخرة</span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">جوالات</span>
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">تقنية</span>
                        </div>
                    </div>

                    <div className="flex !space-x-2 space-x-reverse">
                        <button className="flex-1 bg-evico-blue text-white py-2 px-4 rounded-lg text-sm" onClick={() => contactInfluencer('abdullah')}>تواصل للتعاون</button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm" onClick={() => viewInfluencerProfile('abdullah')}>عرض الملف</button>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <button className="btn-secondary" onClick={loadMoreInfluencers}>عرض المزيد من المؤثرين</button>
            </div>
        </div>
    );
}
