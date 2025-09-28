import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function DashboardOverview({ showChatModal, setShowChatModal, chatMessages, setChatMessages, chatInput, setChatInput, openChat, closeChatModal, sendMessage, attachFile }) {
    const showAllCampaigns = () => {
        alert('عرض جميع الحملات');
    };

    const performanceChartOptions = {
        chart: { type: 'line' },
        title: { text: '' },
        xAxis: { categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'] },
        yAxis: { title: { text: 'المشاهدات (بالآلاف)' } },
        series: [{
            name: 'مشاهدات الإعلانات',
            data: [43, 52, 67, 59, 78, 95],
            color: '#0026CF'
        }, {
            name: 'التفاعلات',
            data: [12, 18, 24, 21, 29, 35],
            color: '#10B981'
        }],
        legend: { enabled: false },
        credits: { enabled: false }
    };

    const revenueChartOptions = {
        chart: { type: 'pie' },
        title: { text: '' },
        series: [{
            name: 'الإيرادات',
            data: [
                { name: 'إعلانات الشاشات', y: 45, color: '#0026CF' },
                { name: 'التعاون مع المؤثرين', y: 35, color: '#10B981' },
                { name: 'الشراكات', y: 20, color: '#F59E0B' }
            ]
        }],
        credits: { enabled: false }
    };

    return (
        <div id="dashboard" className="tab-content active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-evico-blue mb-2">256</div>
                    <div className="text-gray-600">حملات نشطة</div>
                    <div className="text-sm text-green-600 mt-1">+12% هذا الشهر</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">١٢,٤٥٠ ر.س</div>
                    <div className="text-gray-600">الأرباح الشهرية</div>
                    <div className="text-sm text-green-600 mt-1">+8.3% من الشهر الماضي</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
                    <div className="text-gray-600">شاشات متصلة</div>
                    <div className="text-sm text-blue-600 mt-1">3 شاشات جديدة</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">89%</div>
                    <div className="text-gray-600">معدل النجاح</div>
                    <div className="text-sm text-green-600 mt-1">+2.1% تحسن</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4 text-evico-blue">تحليلات الأداء</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={performanceChartOptions}
                        containerProps={{ style: { height: '300px' } }}
                    />
                </div>
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4 text-evico-blue">توزيع الإيرادات</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={revenueChartOptions}
                        containerProps={{ style: { height: '300px' } }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4 text-evico-blue flex items-center">
                        <svg className="icon-svg mr-2" fill="#0026CF" viewBox="0 0 24 24">
                            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                        </svg>
                        الحملات الحديثة
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">حملة هواوي الجديدة</div>
                                <div className="text-sm text-gray-600">بدأت منذ ساعتين • 5 شاشات</div>
                                <div className="progress-bar mt-2">
                                    <div className="progress-fill" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">نشطة</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">إعلان مطعم الأصالة</div>
                                <div className="text-sm text-gray-600">تنتهي خلال ٣ أيام • مع سارة الأحمد</div>
                                <div className="progress-bar mt-2">
                                    <div className="progress-fill" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">قيد المراجعة</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <div className="font-medium">شراكة مع محمد العتيبي</div>
                                <div className="text-sm text-gray-600">مجدولة للأسبوع المقبل • رياضة</div>
                                <div className="progress-bar mt-2">
                                    <div className="progress-fill" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">مجدولة</span>
                        </div>
                    </div>
                    <button className="btn-primary w-full mt-4" onClick={showAllCampaigns}>عرض جميع الحملات</button>
                </div>

                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4 text-evico-blue flex items-center">
                        <svg className="icon-svg mr-2" fill="#0026CF" viewBox="0 0 24 24">
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
                        </svg>
                        آخر الأنشطة
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-evico-blue rounded-full flex items-center justify-center text-white font-bold mr-3">ش</div>
                            <div className="flex-1">
                                <div className="font-medium">شركة التميز للتسويق</div>
                                <div className="text-sm text-gray-600">مهتمون بشراكة طويلة المدى مع 3 شاشات في الرياض</div>
                                <div className="text-xs text-gray-500 mt-1">منذ 15 دقيقة</div>
                            </div>
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">أ</div>
                            <div className="flex-1">
                                <div className="font-medium">أحمد السعيد</div>
                                <div className="text-sm text-gray-600">شكراً لك على الحملة الناجحة. التقييم: ⭐⭐⭐⭐⭐</div>
                                <div className="text-xs text-gray-500 mt-1">منذ ساعة</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">ن</div>
                            <div className="flex-1">
                                <div className="font-medium">نظام Evico</div>
                                <div className="text-sm text-gray-600">تم إيداع 2,450 ر.س من حملة سامسونج</div>
                                <div className="text-xs text-gray-500 mt-1">منذ 3 ساعات</div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-secondary w-full mt-4" onClick={openChat}>فتح المحادثات</button>
                </div>
            </div>


        </div>
    );
}
