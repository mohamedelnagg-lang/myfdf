import React, { useState } from "react";

export default function AI() {
    const [contentIdeasInput, setContentIdeasInput] = useState("");
    const [contentIdeasOutput, setContentIdeasOutput] = useState("");
    const [captionInput, setCaptionInput] = useState("");
    const [captionTone, setCaptionTone] = useState("النبرة المطلوبة");
    const [captionOutput, setCaptionOutput] = useState("");
    const [hashtagInput, setHashtagInput] = useState("");
    const [hashtagLanguage, setHashtagLanguage] = useState("اللغة");
    const [hashtagOutput, setHashtagOutput] = useState("");
    const [designInput, setDesignInput] = useState("");
    const [designStyle, setDesignStyle] = useState("النمط المطلوب");
    const [designOutput, setDesignOutput] = useState("");
    const [aiChatInput, setAiChatInput] = useState("");
    const [aiChatMessages, setAiChatMessages] = useState([
        { type: "received", text: "مرحباً! أنا Evico AI، مساعدك الذكي في التسويق والإعلانات. كيف يمكنني مساعدتك اليوم؟" }
    ]);

    const generateContentIdeas = () => {
        setContentIdeasOutput("أفكار محتوى مقترحة:\n1. فيديو عن كيفية اختيار المنتج المناسب\n2. إنفوجرافيك عن فوائد المنتج\n3. منشور عن قصة نجاح عميل");
    };

    const generateCaptions = () => {
        setCaptionOutput("عناوين مقترحة:\n1. \"اكتشف الفرق مع منتجنا الجديد!\"\n2. \"حلول مبتكرة لاحتياجاتك اليومية\"\n3. \"انضم إلى آلاف العملاء الراضين\"");
    };

    const generateHashtags = () => {
        setHashtagOutput("#تسويق #إبداع #نجاح #منتج #عملاء #ابتكار");
    };

    const generateDesignIdeas = () => {
        setDesignOutput("أفكار تصميم:\n1. تصميم عصري بألوان زرقاء وبيضاء\n2. استخدام خطوط واضحة وحديثة\n3. إضافة عناصر بصرية جذابة");
    };

    const sendAIMessage = () => {
        if (aiChatInput.trim()) {
            setAiChatMessages([...aiChatMessages, { type: "sent", text: aiChatInput }]);
            setAiChatInput("");
            // Simulate AI response
            setTimeout(() => {
                setAiChatMessages(prev => [...prev, { type: "received", text: "شكراً لرسالتك! سأساعدك في ذلك." }]);
            }, 1000);
        }
    };

    return (
        <div id="ai" className="media-section">
            <div className="feature-card mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <svg className="icon-svg" fill="#0026CF" viewBox="0 0 24 24">
                        <path d="M9.5,2A1.5,1.5 0 0,1 11,3.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 8,3.5A1.5,1.5 0 0,1 9.5,2M13.5,7A1.5,1.5 0 0,1 15,8.5A1.5,1.5 0 0,1 13.5,10A1.5,1.5 0 0,1 12,8.5A1.5,1.5 0 0,1 13.5,7M13.5,2A1.5,1.5 0 0,1 15,3.5A1.5,1.5 0 0,1 13.5,5A1.5,1.5 0 0,1 12,3.5A1.5,1.5 0 0,1 13.5,2M9.5,7A1.5,1.5 0 0,1 11,8.5A1.5,1.5 0 0,1 9.5,10A1.5,1.5 0 0,1 8,8.5A1.5,1.5 0 0,1 9.5,7M18,9.5V8.5H16V9.5H18M18,16.5V15.5H16V16.5H18M8,15.5V16.5H6V15.5H8M8,8.5V9.5H6V8.5H8M18,12.5V11.5H16V12.5H18M8,11.5V12.5H6V11.5H8M12,19A1.5,1.5 0 0,1 10.5,20.5A1.5,1.5 0 0,1 9,19A1.5,1.5 0 0,1 10.5,17.5A1.5,1.5 0 0,1 12,19M16,19A1.5,1.5 0 0,1 14.5,20.5A1.5,1.5 0 0,1 13,19A1.5,1.5 0 0,1 14.5,17.5A1.5,1.5 0 0,1 16,19Z"/>
                    </svg>
                    Evico AI - مساعدك الذكي للتسويق
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 ml-2 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6A4,4 0 0,1 16,10A4,4 0 0,1 12,14A4,4 0 0,1 8,10A4,4 0 0,1 12,6M12,16C14.67,16 20,17.33 20,19V20H4V19C4,17.33 9.33,16 12,16Z"/>
                            </svg>
                            اقتراح أفكار المحتوى
                        </h4>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            rows="3"
                            placeholder="أخبرني عن نوع المحتوى الذي تريد إنشاءه... (مثال: محتوى عن منتجات التقنية للشباب)"
                            value={contentIdeasInput}
                            onChange={(e) => setContentIdeasInput(e.target.value)}
                        />
                        <button className="btn-primary w-full" onClick={generateContentIdeas}>
                            <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"/>
                            </svg>
                            إنشاء أفكار
                        </button>
                        {contentIdeasOutput && (
                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <h5 className="font-medium mb-2">الأفكار المقترحة:</h5>
                                <div className="text-gray-700 whitespace-pre-line">{contentIdeasOutput}</div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 ml-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                            </svg>
                            كتابة العناوين والأوصاف
                        </h4>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            rows="3"
                            placeholder="اكتب موضوع المحتوى... (مثال: إعلان عن ساعة ذكية جديدة)"
                            value={captionInput}
                            onChange={(e) => setCaptionInput(e.target.value)}
                        />
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            value={captionTone}
                            onChange={(e) => setCaptionTone(e.target.value)}
                        >
                            <option>النبرة المطلوبة</option>
                            <option>رسمية</option>
                            <option>ودية</option>
                            <option>حماسية</option>
                            <option>مقنعة</option>
                            <option>مرحة</option>
                        </select>
                        <button className="btn-primary w-full" onClick={generateCaptions}>
                            <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                            </svg>
                            إنشاء العناوين
                        </button>
                        {captionOutput && (
                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <h5 className="font-medium mb-2">العناوين المقترحة:</h5>
                                <div className="text-gray-700 whitespace-pre-line">{captionOutput}</div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 ml-2 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.77,14.05 22,13.55 22,13C22,12.45 21.77,11.95 21.41,11.58Z"/>
                            </svg>
                            اقتراح الهاشتاقات
                        </h4>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            placeholder="موضوع المنشور... (مثال: قهوة صباحية)"
                            value={hashtagInput}
                            onChange={(e) => setHashtagInput(e.target.value)}
                        />
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            value={hashtagLanguage}
                            onChange={(e) => setHashtagLanguage(e.target.value)}
                        >
                            <option>اللغة</option>
                            <option>عربي</option>
                            <option>إنجليزي</option>
                            <option>مختلط</option>
                        </select>
                        <button className="btn-primary w-full" onClick={generateHashtags}>
                            <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.77,14.05 22,13.55 22,13C22,12.45 21.77,11.95 21.41,11.58Z"/>
                            </svg>
                            إنشاء هاشتاقات
                        </button>
                        {hashtagOutput && (
                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <h5 className="font-medium mb-2">الهاشتاقات المقترحة:</h5>
                                <div className="text-gray-700">{hashtagOutput}</div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 ml-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M19,19H5V3H13V9H19V19Z"/>
                            </svg>
                            أفكار التصاميم
                        </h4>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            placeholder="نوع التصميم المطلوب... (مثال: بوستر لمطعم بيتزا)"
                            value={designInput}
                            onChange={(e) => setDesignInput(e.target.value)}
                        />
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
                            value={designStyle}
                            onChange={(e) => setDesignStyle(e.target.value)}
                        >
                            <option>النمط المطلوب</option>
                            <option>عصري ومينيمال</option>
                            <option>كلاسيكي</option>
                            <option>ملون وحيوي</option>
                            <option>احترافي</option>
                            <option>شبابي ومرح</option>
                        </select>
                        <button className="btn-primary w-full" onClick={generateDesignIdeas}>
                            <svg className="icon-svg inline" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M19,19H5V3H13V9H19V19Z"/>
                            </svg>
                            إنشاء أفكار تصميم
                        </button>
                        {designOutput && (
                            <div className="mt-4 p-3 bg-white rounded-lg">
                                <h5 className="font-medium mb-2">أفكار التصميم:</h5>
                                <div className="text-gray-700 whitespace-pre-line">{designOutput}</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="ai-typing" id="aiTyping">
                    🤖 Evico AI يفكر ويكتب لك...
                </div>
            </div>

            {/* AI Chat Interface */}
            <div className="feature-card">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                    <svg className="icon-svg" fill="#0026CF" viewBox="0 0 24 24">
                        <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"/>
                    </svg>
                    محادثة مع Evico AI
                </h3>

                <div className="chat-container">
                    <div className="chat-messages">
                        {aiChatMessages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <div className="flex !space-x-2 space-x-reverse">
                            <input
                                type="text"
                                id="aiChatInput"
                                className="flex-1 p-3 border border-gray-300 rounded-lg text-base"
                                placeholder="اكتب رسالتك هنا..."
                                value={aiChatInput}
                                onChange={(e) => setAiChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendAIMessage()}
                            />
                            <button className="btn-primary" onClick={sendAIMessage}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
