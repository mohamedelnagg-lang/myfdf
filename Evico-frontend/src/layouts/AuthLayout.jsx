"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthLayout({ title, subtitle, children }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6 dark:bg-gray-900">
            <Card className="w-full shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
                    {subtitle && (
                        <p className="text-sm text-muted-foreground text-center mt-2">
                            {subtitle}
                        </p>
                    )}
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}
