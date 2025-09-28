import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Analytics() {
    const viewPlatformDetails = (platform) => {
        alert(`View details for ${platform}`);
    };

    const viewDetailedCompetitorAnalysis = () => {
        alert("View detailed competitor analysis");
    };

    const exportReport = (format) => {
        alert(`Export report as ${format}`);
    };

    const monthlyPerformanceOptions = {
        chart: { type: 'line' },
        title: { text: '' },
        xAxis: { categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'] },
        yAxis: { title: { text: 'المشاهدات (بالآلاف)' } },
        series: [{
            name: 'المشاهدات',
            data: [120, 150, 180, 200, 240, 280],
            color: '#0026CF'
        }, {
            name: 'التفاعلات',
            data: [30, 45, 60, 55, 75, 90],
            color: '#10B981'
        }],
        legend: { enabled: false },
        credits: { enabled: false }
    };

    const platformEngagementOptions = {
        chart: { type: 'bar' },
        title: { text: '' },
        xAxis: { categories: ['Instagram', 'Facebook', 'YouTube', 'Twitter', 'TikTok'] },
        yAxis: { title: { text: 'معدل التفاعل (%)' } },
        series: [{
            name: 'التفاعل',
            data: [15.3, 8.7, 12.1, 6.2, 22.8],
            color: '#10B981'
        }],
        credits: { enabled: false }
    };

    return (
        <div id="analytics" className="media-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2.4M</div>
                    <div className="text-gray-600">إجمالي المشاهدات</div>
                    <div className="text-sm text-green-600 mt-1">+15.3% هذا الشهر</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">15.2K</div>
                    <div className="text-gray-600">التفاعلات</div>
                    <div className="text-sm text-green-600 mt-1">+22.1% هذا الأسبوع</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">156K</div>
                    <div className="text-gray-600">الوصول</div>
                    <div className="text-sm text-blue-600 mt-1">+8.7% اليوم</div>
                </div>
                <div className="feature-card text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">+12%</div>
                    <div className="text-gray-600">نمو المتابعين</div>
                    <div className="text-sm text-green-600 mt-1">مقارنة بالشهر الماضي</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4">تحليلات الأداء الشهرية</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={monthlyPerformanceOptions}
                        containerProps={{ style: { height: '300px' } }}
                    />
                </div>
                <div className="feature-card">
                    <h3 className="text-lg font-bold mb-4">التفاعل حسب المنصة</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={platformEngagementOptions}
                        containerProps={{ style: { height: '300px' } }}
                    />
                </div>
            </div>

            <div className="feature-card mb-6">
                <h3 className="text-lg font-bold mb-4">أداء المنصات التفصيلي</h3>
                <div className="space-y-4">
                    <div className="social-platform platform-instagram" onClick={() => viewPlatformDetails('instagram')}>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4">IG</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold">Instagram</div>
                                    <div className="text-sm text-gray-600">245K متابع • 1.2M مشاهدة</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-green-600">+8.2%</div>
                                    <div className="text-sm text-gray-600">معدل التفاعل: 15.3%</div>
                                </div>
                            </div>
                            <div className="progress-bar mt-2">
                                <div className="progress-fill" style={{ width: "82%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="social-platform platform-facebook" onClick={() => viewPlatformDetails('facebook')}>
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4">FB</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold">Facebook</div>
                                    <div className="text-sm text-gray-600">180K متابع • 890K مشاهدة</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-green-600">+5.1%</div>
                                    <div className="text-sm text-gray-600">معدل التفاعل: 8.7%</div>
                                </div>
                            </div>
                            <div className="progress-bar mt-2">
                                <div className="progress-fill" style={{ width: "68%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="social-platform platform-youtube" onClick={() => viewPlatformDetails('youtube')}>
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4">YT</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold">YouTube</div>
                                    <div className="text-sm text-gray-600">95K مشترك • 310K مشاهدة</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-red-600">-2.3%</div>
                                    <div className="text-sm text-gray-600">معدل التفاعل: 12.1%</div>
                                </div>
                            </div>
                            <div className="progress-bar mt-2">
                                <div className="progress-fill" style={{ width: "45%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="social-platform platform-twitter" onClick={() => viewPlatformDetails('twitter')}>
                        <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4">X</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold">X (Twitter)</div>
                                    <div className="text-sm text-gray-600">67K متابع • 450K مشاهدة</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-green-600">+12.7%</div>
                                    <div className="text-sm text-gray-600">معدل التفاعل: 6.2%</div>
                                </div>
                            </div>
                            <div className="progress-bar mt-2">
                                <div className="progress-fill" style={{ width: "55%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="social-platform platform-tiktok" onClick={() => viewPlatformDetails('tiktok')}>
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-lg font-bold ml-4">TT</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold">TikTok</div>
                                    <div className="text-sm text-gray-600">320K متابع • 2.1M مشاهدة</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-green-600">+28.5%</div>
                                    <div className="text-sm text-gray-600">معدل التفاعل: 22.8%</div>
                                </div>
                            </div>
                            <div className="progress-bar mt-2">
                                <div className="progress-fill" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Listening */}
            <div className="feature-card">
                <h3 className="text-lg font-bold mb-4">مراقبة المنافسين</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold ml-3">أ</div>
                            <div>
                                <div className="font-medium">أحمد التسويق</div>
                                <div className="text-sm text-gray-600">منافس مباشر</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">المتابعين:</span>
                                <span className="font-medium">234K</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">التفاعل:</span>
                                <span className="font-medium text-yellow-600">11.2%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">النمو:</span>
                                <span className="font-medium text-red-600">-1.3%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold ml-3">ش</div>
                            <div>
                                <div className="font-medium">شركة الإبداع</div>
                                <div className="text-sm text-gray-600">منافس قوي</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">المتابعين:</span>
                                <span className="font-medium">189K</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">التفاعل:</span>
                                <span className="font-medium text-green-600">18.7%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">النمو:</span>
                                <span className="font-medium text-green-600">+5.2%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold ml-3">م</div>
                            <div>
                                <div className="font-medium">مؤثرة الموضة</div>
                                <div className="text-sm text-gray-600">نفس المجال</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">المتابعين:</span>
                                <span className="font-medium">567K</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">التفاعل:</span>
                                <span className="font-medium text-green-600">14.5%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">النمو:</span>
                                <span className="font-medium text-green-600">+8.9%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn-secondary w-full mt-4" onClick={viewDetailedCompetitorAnalysis}>تحليل مفصل للمنافسين</button>
            </div>

            {/* Export Reports */}
            <div className="flex !space-x-4 space-x-reverse">
                <button className="btn-primary" onClick={() => exportReport('pdf')}>
                    <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    تصدير تقرير PDF
                </button>
                <button className="btn-secondary" onClick={() => exportReport('excel')}>
                    <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    تصدير Excel
                </button>
            </div>
        </div>
    );
}
