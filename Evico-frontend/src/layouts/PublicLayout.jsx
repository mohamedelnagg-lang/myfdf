import React from 'react';
import PublicNavbar from '../components/layouts/PublicNavbar';
import { Outlet } from 'react-router-dom';

export default function PublicLayout({ children, onOpenChat }) {
    return (
        <div className="min-h-screen bg-white">
            <PublicNavbar onOpenChat={onOpenChat} />
            <div className="mx-auto px-4 py-6 max-w-7xl">
                <Outlet/>
            </div>
        </div>
    );
}
