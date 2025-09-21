import Menu from "@/components/Navigation/Menu";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export default function MainLayout({children}: Props) {
    return (
        <>
            <main className="w-full min-h-screen bg-gray-50 flex justify-center">
                <div className="w-full max-w-md p-6 bg-white shadow-md overflow-x-hidden overflow-y-auto">
                    {children}
                </div>
                <Menu />
            </main>
        </>
    )
}