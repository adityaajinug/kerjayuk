import Menu from "@/components/Navigation/Menu";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
    return (
        <>
            <title>Home Page</title>
            <MainLayout>
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Home</h1>
                </div>
                <Menu />
            </MainLayout>
        </>
    )
}