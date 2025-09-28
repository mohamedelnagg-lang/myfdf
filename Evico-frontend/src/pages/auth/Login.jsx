import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import './auth-forms.css';
import Navbar from "@/components/layouts/Navbar";
export default function Login() {
    return (
        <>
            <Navbar />
            <AuthLayout
                title="Welcome Back"
                subtitle="Enter your credentials to access your account"
            >
                <LoginForm />
            </AuthLayout>
        </>
            
    );
}
