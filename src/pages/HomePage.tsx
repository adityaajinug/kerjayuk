import SectionActivity from "@/components/Home/SectionActivity";
import SectionBanner from "@/components/Home/SectionBanner";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
    return (
        <>
            <title>Home Page</title>
            <MainLayout>
                <SectionBanner/>
                <SectionActivity />
            </MainLayout>
        </>
    )
}