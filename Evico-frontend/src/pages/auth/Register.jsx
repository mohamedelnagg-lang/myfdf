

import React, { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import './auth-forms.css';
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
const accountTypes = [
    {
        key: 'company',
        icon: 'fas fa-building',
        title: 'شركة عامة',
        desc: 'لإدارة الأنشطة التجارية العامة والخدمات المتنوعة بكفاءة وفعالية عالية.'
    },
    {
        key: 'sports',
        icon: 'fas fa-futbol',
        title: 'تأجير ملعب',
        desc: 'مخصص للشركات أو الأفراد الذين يقدمون خدمات الملاعب الرياضية وإدارة الحجوزات.'
    },
    {
        key: 'academy',
        icon: 'fas fa-dumbbell',
        title: 'أكاديمية تدريب',
        desc: 'أكاديمية تدريب الألعاب الرياضية البدنية والإلكترونية مع برامج تدريبية متخصصة.'
    },
    {
        key: 'esports',
        icon: 'fas fa-gamepad',
        title: 'فريق إلكتروني',
        desc: 'للفرق الخاصة بالرياضات الإلكترونية وإدارة أنشطتهم ومسابقاتهم المختلفة.'
    },
    {
        key: 'club',
        icon: 'fas fa-users',
        title: 'نادي',
        desc: 'للأندية الرياضية أو الترفيهية الرسمية وإدارة أعضائها وأنشطتها المتنوعة.'
    }
];

const initialBusinessInfo = {
    businessName: '',
    ownerName: '',
    commercialRegister: '',
    establishmentDate: '',
    city: '',
    district: '',
    businessDescription: '',
    employeesCount: '',
    capital: '',
    economicActivity: '',
    experienceYears: '',
    monthlySales: '',
    legalEntity: '',
    documents: [],
    email: '',
    phone: '',
    fax: '',
    website: '',
    fullAddress: '',
};

export default function Register() {
    const [step, setStep] = useState(1);
    const [verificationMethod, setVerificationMethod] = useState('email');
    const [selectedType, setSelectedType] = useState(null);
    const [businessInfo, setBusinessInfo] = useState({
        firstName: '',
        lastName: '',
        registerEmail: '',
        registerPhone: '',
        registerPassword: '',
        confirmPassword: '',
        emailVerified: false,
        phoneVerified: false,
        ...initialBusinessInfo
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Manual validation for registration info
    const validatePersonalInfo = () => {
        const newErrors = {};
        if (!businessInfo.firstName) newErrors.firstName = 'الاسم الأول مطلوب';
        if (!businessInfo.lastName) newErrors.lastName = 'الاسم الأخير مطلوب';
        if (!businessInfo.registerEmail) newErrors.registerEmail = 'البريد الإلكتروني مطلوب';
        if (!businessInfo.registerPhone) newErrors.registerPhone = 'رقم الجوال مطلوب';
        if (!businessInfo.registerPassword) newErrors.registerPassword = 'كلمة المرور مطلوبة';
        if (!businessInfo.confirmPassword) newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
        if (businessInfo.registerPassword !== businessInfo.confirmPassword) newErrors.confirmPassword = 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين';
        return newErrors;
    };

    // Verification validation
    const validateVerification = () => {
        const newErrors = {};
        if (verificationMethod === 'email' && !businessInfo.emailVerified) {
            newErrors.emailVerified = 'يرجى التحقق من البريد الإلكتروني';
        }
        if (verificationMethod === 'phone' && !businessInfo.phoneVerified) {
            newErrors.phoneVerified = 'يرجى التحقق من رقم الجوال';
        }
        return newErrors;
    };
    // Step 3 validation (Business Info)
    const validateBusinessInfo = () => {
        const newErrors = {};

        // معلومات إضافية
        if (!businessInfo.nationality) newErrors.nationality = 'الجنسية مطلوبة';
        if (!businessInfo.birthDate) newErrors.birthDate = 'تاريخ الميلاد مطلوب';
        if (!businessInfo.idNumber) newErrors.idNumber = 'رقم الهوية مطلوب';
        if (!businessInfo.address) newErrors.address = 'العنوان مطلوب';

        // البيانات الأساسية
        if (!businessInfo.businessName) newErrors.businessName = 'الاسم التجاري مطلوب';
        if (!businessInfo.ownerName) newErrors.ownerName = 'اسم المالك مطلوب';
        if (!businessInfo.commercialRegister) newErrors.commercialRegister = 'رقم السجل التجاري مطلوب';
        if (!businessInfo.establishmentDate) newErrors.establishmentDate = 'تاريخ التأسيس مطلوب';
        if (!businessInfo.city) newErrors.city = 'المدينة مطلوبة';
        if (!businessInfo.district) newErrors.district = 'الحي/المنطقة مطلوبة';
        if (!businessInfo.businessDescription) newErrors.businessDescription = 'وصف النشاط التجاري مطلوب';

        // معلومات الشركة
        if (!businessInfo.employeesCount) newErrors.employeesCount = 'عدد الموظفين مطلوب';
        if (!businessInfo.capital) newErrors.capital = 'رأس المال مطلوب';
        if (!businessInfo.economicActivity) newErrors.economicActivity = 'نوع النشاط مطلوب';
        if (!businessInfo.experienceYears) newErrors.experienceYears = 'سنوات الخبرة مطلوبة';
        if (!businessInfo.legalEntity) newErrors.legalEntity = 'الكيان القانوني مطلوب';

        // وسائل التواصل
        if (!businessInfo.email) newErrors.email = 'البريد الإلكتروني مطلوب';
        if (!businessInfo.phone) newErrors.phone = 'رقم الهاتف مطلوب';
        if (!businessInfo.fullAddress) newErrors.fullAddress = 'العنوان الكامل مطلوب';

        return newErrors;
    };

    // Step navigation
    const handleNext = () => {
        if (step === 1) {
            const validation = validatePersonalInfo();
            setErrors(validation);
            if (Object.keys(validation).length > 0) return;
            setStep(2);
            return;
        }
        if (step === 2) {
            const validation = validateVerification();
            setErrors(validation);
            if (Object.keys(validation).length > 0) return;
            setStep(3);
            return;
        }
        if (step === 3) {
            const validation = validateBusinessInfo();
            setErrors(validation);
            if (Object.keys(validation).length > 0) return;
            setStep(4);
            return;
        }

    };
    const handlePrev = () => setStep(step - 1);

    // Handle business info change
    const handleInfoChange = (e) => {
        setBusinessInfo({ ...businessInfo, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    // Step indicator helper
    const getStepClass = (idx) => {
        if (step === idx + 1) return 'step active';
        if (step > idx + 1) return 'step completed';
        return 'step';
    };

    return (
        <>
            <Navbar />
            <div className="register-container" dir="rtl">
                <div className="register-header">
                    <h1 className="register-title">إنشاء حساب تجاري جديد</h1>
                    <p className="register-subtitle">اختر نوع الحساب المناسب لنشاطك التجاري في منصة Evico Business</p>
                </div>

                <div className="step-indicator">
                    <div className={getStepClass(0)}>
                        <div className="step-number">{step > 1 ? '✓' : '1'}</div>
                        <span>بيانات الحساب الشخصي</span>
                    </div>
                    <div className={getStepClass(1)}>
                        <div className="step-number">{step > 2 ? '✓' : '2'}</div>
                        <span>التحقق</span>
                    </div>
                    <div className={getStepClass(2)}>
                        <div className="step-number">{step > 3 ? '✓' : '3'}</div>
                        <span>نوع الحساب</span>
                    </div>
                    <div className={getStepClass(3)}>
                        <div className="step-number">{step == 4 ? '✓' : '4'}</div>
                        <span>المعلومات</span>
                    </div>
                </div>


                {/* Step 1: Personal Registration Info */}
                {step === 1 && (
                    <>
                        <form className="form-section" onSubmit={e => { e.preventDefault(); handleNext(); }}>
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                                <h3 className="section-title">إنشاء حساب فردي</h3>
                                <p className="section-subtitle">املأ البيانات التالية لإنشاء حسابك الشخصي</p>
                            </div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">الاسم الأول *</label>
                                    <input type="text" className="form-input" name="firstName" value={businessInfo.firstName} onChange={handleInfoChange} />
                                    {errors.firstName && <div className="alert alert-warning">{errors.firstName}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">الاسم الأخير *</label>
                                    <input type="text" className="form-input" name="lastName" value={businessInfo.lastName} onChange={handleInfoChange} />
                                    {errors.lastName && <div className="alert alert-warning">{errors.lastName}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">البريد الإلكتروني *</label>
                                    <input type="email" className="form-input" name="registerEmail" value={businessInfo.registerEmail} onChange={handleInfoChange} />
                                    {errors.registerEmail && <div className="alert alert-warning">{errors.registerEmail}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">رقم الجوال *</label>
                                    <input type="tel" className="form-input" name="registerPhone" value={businessInfo.registerPhone} onChange={handleInfoChange} />
                                    {errors.registerPhone && <div className="alert alert-warning">{errors.registerPhone}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">كلمة المرور *</label>
                                    <input type="password" className="form-input" name="registerPassword" value={businessInfo.registerPassword} onChange={handleInfoChange} />
                                    {errors.registerPassword && <div className="alert alert-warning">{errors.registerPassword}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">تأكيد كلمة المرور *</label>
                                    <input type="password" className="form-input" name="confirmPassword" value={businessInfo.confirmPassword} onChange={handleInfoChange} />
                                    {errors.confirmPassword && <div className="alert alert-warning">{errors.confirmPassword}</div>}
                                </div>
                            </div>

                        </form>
                        <form className="form-section" onSubmit={e => { e.preventDefault(); handleNext(); }}>
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="section-title">التحقق من الحساب</h3>
                                <p className="section-subtitle">اختر طريقة التحقق وأدخل رمز التحقق</p>
                            </div>
                            <div className="form-group mb-6">
                                <label className="form-label">طريقة التحقق:</label>
                                <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                                    <label>
                                        <input type="radio" name="verificationMethod" value="email" checked={verificationMethod === 'email'} onChange={() => setVerificationMethod('email')} />
                                        <span style={{ marginRight: 8 }}>البريد الإلكتروني</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="verificationMethod" value="phone" checked={verificationMethod === 'phone'} onChange={() => setVerificationMethod('phone')} />
                                        <span style={{ marginRight: 8 }}>رقم الجوال</span>
                                    </label>
                                </div>
                            </div>
                            {verificationMethod === 'email' && (
                                <div className="card p-4 rounded-lg bg-blue-50 mt-6">
                                    <div className="text-center">
                                        <i className="fas fa-envelope text-2xl text-blue-500 mb-2"></i>
                                        <p className="text-sm text-gray-700 mb-2">تم إرسال رمز التحقق إلى بريدك الإلكتروني</p>
                                        <input type="text" name="emailVerificationCode" className="w-32 px-3 py-2 border border-gray-300 rounded text-center" maxLength={6} placeholder="000000" />
                                        <button type="button" className="mr-2 px-4 py-2 btn-primary rounded text-sm" onClick={() => setBusinessInfo({ ...businessInfo, emailVerified: true })}>تحقق</button>
                                        {errors.emailVerified && <div className="alert alert-warning mt-2">{errors.emailVerified}</div>}
                                    </div>
                                </div>
                            )}
                            {verificationMethod === 'phone' && (
                                <div className="card p-4 rounded-lg bg-green-50 mt-4">
                                    <div className="text-center">
                                        <i className="fas fa-mobile-alt text-2xl text-green-500 mb-2"></i>
                                        <p className="text-sm text-gray-700 mb-2">تم إرسال رمز التحقق إلى رقم جوالك</p>
                                        <input type="text" name="phoneVerificationCode" className="w-32 px-3 py-2 border border-gray-300 rounded text-center" maxLength={6} placeholder="000000" />
                                        <button type="button" className="mr-2 px-4 py-2 btn-primary rounded text-sm" onClick={() => setBusinessInfo({ ...businessInfo, phoneVerified: true })}>تحقق</button>
                                        {errors.phoneVerified && <div className="alert alert-warning mt-2">{errors.phoneVerified}</div>}
                                    </div>
                                </div>
                            )}
                            <div className="mt-8 flex justify-between">
                                <button className="btn btn-secondary px-6 py-3 rounded-lg" type="button" onClick={handlePrev}>العودة</button>
                                <button className="btn btn-primary px-6 py-3 rounded-lg" type="submit">التالي</button>
                            </div>
                        </form>
                    </>
                )}

                {/* Step 2: Account Type Selection */}
                {step === 2 && (
                    <>
                        <div className="account-types-grid">
                            {accountTypes.map((type) => (
                                <div
                                    key={type.key}
                                    className={`account-type-card${selectedType === type.key ? ' selected' : ''}`}
                                    onClick={() => setSelectedType(type.key)}
                                >
                                    <div className="account-icon">
                                        <i className={type.icon}></i>
                                    </div>
                                    <h3 className="account-title">{type.title}</h3>
                                    <p className="account-description">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-large"
                                onClick={() => setStep(3)}
                                disabled={!selectedType}
                            >
                                <span>التالي</span>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                        </div>
                    </>
                )}

                {/* Step 3: Business Info Form */}
                {step === 3 && (
                    <>
                        <form className="form-section" onSubmit={e => { e.preventDefault(); handleNext(); }}>

                            {/* البيانات الأساسية */}
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="fas fa-info-circle"></i>
                                </div>
                                <h3 className="section-title">البيانات الأساسية</h3>
                            </div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label ">الاسم التجاري *</label>
                                    <input type="text" className="form-input" name="businessName" value={businessInfo.businessName} onChange={handleInfoChange} />
                                    {errors.businessName && <div className="alert alert-warning">{errors.businessName}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">اسم المالك *</label>
                                    <input type="text" className="form-input" name="ownerName" value={businessInfo.ownerName} onChange={handleInfoChange} />
                                    {errors.ownerName && <div className="alert alert-warning">{errors.ownerName}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">رقم السجل التجاري *</label>
                                    <input type="text" className="form-input" name="commercialRegister" value={businessInfo.commercialRegister} onChange={handleInfoChange} />
                                    {errors.commercialRegister && <div className="alert alert-warning">{errors.commercialRegister}</div>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">تاريخ تأسيس الشركة *</label>
                                    <input type="date" className="form-input" name="establishmentDate" value={businessInfo.establishmentDate} onChange={handleInfoChange} />
                                    {errors.establishmentDate && <div className="alert alert-warning">{errors.establishmentDate}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">المدينة *</label>
                                    <select className="form-select" name="city" value={businessInfo.city} onChange={handleInfoChange}>
                                        <option value="">اختر المدينة</option>
                                        <option value="riyadh">الرياض</option>
                                        <option value="jeddah">جدة</option>
                                        <option value="dammam">الدمام</option>
                                        <option value="mecca">مكة المكرمة</option>
                                        <option value="medina">المدينة المنورة</option>
                                        <option value="taif">الطائف</option>
                                        <option value="tabuk">تبوك</option>
                                        <option value="abha">أبها</option>
                                        <option value="khobar">الخبر</option>
                                        <option value="jubail">الجبيل</option>
                                    </select>
                                    {errors.city && <div className="alert alert-warning">{errors.city}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="form-label">الحي/المنطقة *</label>
                                    <input type="text" className="form-input" name="district" value={businessInfo.district} onChange={handleInfoChange} />
                                    {errors.district && <div className="alert alert-warning">{errors.district}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">وصف النشاط التجاري *</label>
                                <textarea className="form-textarea" name="businessDescription" value={businessInfo.businessDescription} onChange={handleInfoChange} placeholder="اكتب وصفاً مفصلاً عن نشاطك التجاري..." />
                                {errors.businessDescription && <div className="alert alert-warning">{errors.businessDescription}</div>}
                            </div>

                            {/* معلومات الشركة */}
                            <div className="form-section">
                                <div className="section-header">
                                    <div className="section-icon">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                    <h3 className="section-title">معلومات الشركة</h3>
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">عدد الموظفين *</label>
                                        <select className="form-select" name="employeesCount" value={businessInfo.employeesCount} onChange={handleInfoChange}>
                                            <option value="">اختر العدد</option>
                                            <option value="1-5">1-5 موظفين</option>
                                            <option value="6-15">6-15 موظف</option>
                                            <option value="16-50">16-50 موظف</option>
                                            <option value="51-100">51-100 موظف</option>
                                            <option value="101-500">101-500 موظف</option>
                                            <option value="500+">أكثر من 500 موظف</option>
                                        </select>
                                        {errors.employeesCount && <div className="alert alert-warning">{errors.employeesCount}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">رأس المال *</label>
                                        <select className="form-select" name="capital" value={businessInfo.capital} onChange={handleInfoChange}>
                                            <option value="">اختر الفئة</option>
                                            <option value="less-100k">أقل من 100,000 ريال</option>
                                            <option value="100k-500k">100,000 - 500,000 ريال</option>
                                            <option value="500k-1m">500,000 - 1,000,000 ريال</option>
                                            <option value="1m-5m">1,000,000 - 5,000,000 ريال</option>
                                            <option value="5m-10m">5,000,000 - 10,000,000 ريال</option>
                                            <option value="10m+">أكثر من 10,000,000 ريال</option>
                                        </select>
                                        {errors.capital && <div className="alert alert-warning">{errors.capital}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">نوع النشاط الاقتصادي *</label>
                                        <select className="form-select" name="economicActivity" value={businessInfo.economicActivity} onChange={handleInfoChange}>
                                            <option value="">اختر النوع</option>
                                            <option value="retail">تجارة تجزئة</option>
                                            <option value="wholesale">تجارة جملة</option>
                                            <option value="manufacturing">تصنيع</option>
                                            <option value="services">خدمات</option>
                                            <option value="technology">تقنية معلومات</option>
                                            <option value="construction">إنشاءات</option>
                                            <option value="food">مطاعم ومأكولات</option>
                                            <option value="education">تعليم وتدريب</option>
                                            <option value="healthcare">رعاية صحية</option>
                                            <option value="sports">رياضة وترفيه</option>
                                        </select>
                                        {errors.economicActivity && <div className="alert alert-warning">{errors.economicActivity}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">سنوات الخبرة *</label>
                                        <select className="form-select" name="experienceYears" value={businessInfo.experienceYears} onChange={handleInfoChange}>
                                            <option value="">اختر المدة</option>
                                            <option value="new">شركة جديدة</option>
                                            <option value="1-2">1-2 سنة</option>
                                            <option value="3-5">3-5 سنوات</option>
                                            <option value="6-10">6-10 سنوات</option>
                                            <option value="11-20">11-20 سنة</option>
                                            <option value="20+">أكثر من 20 سنة</option>
                                        </select>
                                        {errors.experienceYears && <div className="alert alert-warning">{errors.experienceYears}</div>}
                                    </div>
                                </div>
                            </div>

                            {/* وسائل التواصل */}
                            <div className="form-section">
                                <div className="section-header">
                                    <div className="section-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <h3 className="section-title">وسائل التواصل</h3>
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">البريد الإلكتروني *</label>
                                        <input type="email" className="form-input" name="email" value={businessInfo.email} onChange={handleInfoChange} />
                                        {errors.email && <div className="alert alert-warning">{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">رقم الهاتف *</label>
                                        <input type="tel" className="form-input" name="phone" value={businessInfo.phone} onChange={handleInfoChange} />
                                        {errors.phone && <div className="alert alert-warning">{errors.phone}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">رقم الفاكس</label>
                                        <input type="tel" className="form-input" name="fax" value={businessInfo.fax} onChange={handleInfoChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">الموقع الإلكتروني</label>
                                        <input type="url" className="form-input" name="website" value={businessInfo.website} onChange={handleInfoChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">العنوان الكامل *</label>
                                    <textarea className="form-textarea" name="fullAddress" value={businessInfo.fullAddress} onChange={handleInfoChange} placeholder="اكتب العنوان الكامل مع الرمز البريدي..." />
                                    {errors.fullAddress && <div className="alert alert-warning">{errors.fullAddress}</div>}
                                </div>
                            </div>

                            <div className="text-center" style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
                                <button className="btn btn-secondary btn-large" type="button" onClick={handlePrev}>
                                    <i className="fas fa-arrow-right"></i>
                                    السابق
                                </button>
                                <button
                                    className="btn btn-primary btn-large"
                                    onClick={() => setStep(4)}
                                    disabled={!selectedType}
                                >
                                    <span>التالي</span>
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {/* Step 4: Review Step */}
                {step === 4 && (
                    <div className="form-section">
                        <div className="section-header">
                            <div className="section-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="section-title">مراجعة البيانات</h3>
                        </div>
                        <div className="review-grid">
                            <div className="review-item"><strong>نوع الحساب:</strong> {accountTypes.find(t => t.key === selectedType)?.title}</div>
                            <div className="review-item"><strong>الاسم التجاري:</strong> {businessInfo.businessName}</div>
                            <div className="review-item"><strong>اسم المالك:</strong> {businessInfo.ownerName}</div>
                            <div className="review-item"><strong>رقم السجل التجاري:</strong> {businessInfo.commercialRegister}</div>
                            <div className="review-item"><strong>تاريخ التأسيس:</strong> {businessInfo.establishmentDate}</div>
                            <div className="review-item"><strong>المدينة:</strong> {businessInfo.city}</div>
                            <div className="review-item"><strong>الحي/المنطقة:</strong> {businessInfo.district}</div>
                            <div className="review-item"><strong>وصف النشاط التجاري:</strong> {businessInfo.businessDescription}</div>
                            <div className="review-item"><strong>عدد الموظفين:</strong> {businessInfo.employeesCount}</div>
                        </div>
                        <div className="text-center" style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
                            <button className="btn btn-secondary btn-large" type="button" onClick={handlePrev}>
                                <span>السابق</span>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                            <button className="btn btn-primary btn-large" type="button" style={{ marginRight: 16 }} onClick={() => navigate('/activation')}>
                                <span>تأكيد وإنشاء الحساب</span>
                                <i className="fas fa-check"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
