import Menu from "@/components/Navigation/Menu";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export default function MainLayout({children}: Props) {
    return (
        <>
            <main className="w-full min-h-screen bg-gray-50 flex justify-center">
                <div className="w-full max-w-md bg-white shadow-md">
                    {children}
                </div>
                <Menu />
            </main>
        </>
    )
}