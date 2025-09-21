import SectionActivity from "@/components/Home/SectionActivity";
import SectionBanner from "@/components/Home/SectionBanner";
import SectionNews from "@/components/Home/SectionNews";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
    return (
        <>
            <title>Home Page</title>
            <MainLayout>
                <SectionBanner/>
                <SectionActivity />
                <SectionNews />
            </MainLayout>
        </>
    )
}