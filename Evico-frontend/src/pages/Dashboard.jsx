import React, { useState } from 'react';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ScreenManage from '../components/dashboard/ScreenManage';
import CelebritiesCompanies from '../components/dashboard/CelebritiesCompanies';
import MediaHub from '../components/dashboard/MediaHub';
import Profile from '../components/dashboard/Profile';
import PublicLayout from '../layouts/PublicLayout';
import '../components/dashboard/dashboard.css';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showChatModal, setShowChatModal] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { type: 'received', text: 'مرحباً! نحن مهتمون بشراكة طويلة المدى معك للترويج لمنتجاتنا التقنية' },
        { type: 'sent', text: 'أهلاً وسهلاً! سعيد بتواصلكم. يمكنني مشاركة عرض أسعاري وأمثلة من أعمالي السابقة' },
        { type: 'received', text: 'ممتاز! هل يمكنك إرسال portfolio وقائمة الأسعار؟' },
        { type: 'sent', text: 'بالطبع، سأرسل لك ملف PDF يحتوي على جميع التفاصيل خلال دقائق' }
    ]);
    const [chatInput, setChatInput] = useState('');
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

    const openChat = () => {
        setShowChatModal(true);
    };

    const closeChatModal = () => {
        setShowChatModal(false);
    };

    const sendMessage = () => {
        if (chatInput.trim()) {
            setChatMessages(prev => [...prev, { type: 'sent', text: chatInput.trim() }]);
            setChatInput('');
            // Simulate received message after a delay
            setTimeout(() => {
                setChatMessages(prev => [...prev, { type: 'received', text: 'شكراً لرسالتك! سأرد عليك قريباً.' }]);
            }, 1000);
        }
    };

    const attachFile = () => {
        alert('إرفاق ملف - هذه الميزة قيد التطوير');
    };

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

    const tabs = [
        { id: 'dashboard', label: 'لوحة التحكم', icon: '📊' },
        { id: 'screens', label: 'إدارة الشاشات', icon: '📺' },
        { id: 'celebrities', label: 'المشاهير والشركات', icon: '⭐' },
        { id: 'media', label: 'مركز الإعلام', icon: '📱' },
        { id: 'profile', label: 'موقعي', icon: '👤' }
    ];

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'dashboard':
                return <DashboardOverview
                    showChatModal={showChatModal}
                    setShowChatModal={setShowChatModal}
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                    chatInput={chatInput}
                    setChatInput={setChatInput}
                    openChat={openChat}
                    closeChatModal={closeChatModal}
                    sendMessage={sendMessage}
                    attachFile={attachFile}
                />;
            case 'screens':
                return <ScreenManage />;
            case 'celebrities':
                return <CelebritiesCompanies />;
            case 'media':
                return <MediaHub />;
            case 'profile':
                return <Profile />;
            default:
                return <DashboardOverview
                    showChatModal={showChatModal}
                    setShowChatModal={setShowChatModal}
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                    chatInput={chatInput}
                    setChatInput={setChatInput}
                    openChat={openChat}
                    closeChatModal={closeChatModal}
                    sendMessage={sendMessage}
                    attachFile={attachFile}
                />;
        }
    };

    return (
        <>
            {/*  <PublicLayout onOpenChat={openChat}> */}
            {/* Main Navigation */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-evico-blue text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                            }`}
                        >
                            <span className="text-lg">{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Tab Content */}
            <div className="bg-white rounded-xl shadow-sm  p-3">
                {renderActiveTab()}
            </div>

            {/* Chat Modal */}
            {showChatModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-evico-blue">المحادثات</h3>
                            <button onClick={closeChatModal} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="chat-container">
                            <div className="chat-messages" id="chatMessages">
                                {chatMessages.map((message, index) => (
                                    <div key={index} className={`message ${message.type}`}>
                                        {message.text}
                                    </div>
                                ))}
                            </div>
                            <div className="chat-input-container">
                                <div className="flex !space-x-2 space-x-reverse">
                                    <input
                                        type="text"
                                        id="chatInput"
                                        className="flex-1 p-3 border border-gray-300 rounded-lg text-base"
                                        placeholder="اكتب رسالتك هنا..."
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                    />
                                    <button className="bg-gray-200 text-gray-700 p-3 rounded-lg" onClick={attachFile}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                        </svg>
                                    </button>
                                    <button className="btn-primary" onClick={sendMessage}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
         {/* </PublicLayout> */}
        </>
    );
}
