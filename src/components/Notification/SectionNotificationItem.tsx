import { Link } from "react-router";
import { notificationData } from "@/datas/notificationData";

export default function SectionNotificationItem() {
    return (
        <>
            <section id="list-notification">
                {notificationData.map((item, index) => {
                    const Icon = item.icon;
                    const StatusIcon = item.statusIcon;
                    return (

                        <Link  to={item.link} key={item.id} className="flex gap-3 py-5 px-6 hover:bg-webstyle-accent cursor-pointer">
                            <div className="relative rounded-lg bg-gradient-to-r from-webstyle-primary via-[#d91a43] to-[#cc1555] px-4 py-4 h-fit">
                                <Icon className="text-white text-2xl" />
                                <div
                                    className={`absolute -right-1 -bottom-2 ${item.statusColor} text-white rounded-full h-5 w-5 flex items-center justify-center px-1`}
                                >
                                    <StatusIcon className="font-medium" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between w-full ">
                                    <h1 className="font-bold text-base">{item.title}</h1>
                                    <h4 className="text-webstyle-grey text-sm">{item.date}</h4>
                                </div>
                                <p className="line-clamp-3">{item.description}</p>
                            </div>
                        </Link>
                    )
                })}
                
            </section>
        </>
    )
}