import TopBar from "@/components/Head/TopBar";
import SectionNotificationItem from "@/components/Notification/SectionNotificationItem";
import MainLayout from "@/layouts/MainLayout";

export default function NotificationPage() {
    return (
        <>
            <title>Notification Page</title>
            <MainLayout>
               <TopBar />
               <SectionNotificationItem />
            </MainLayout>
        </>
    )
}