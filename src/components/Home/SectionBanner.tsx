import DummyUser from '@/assets/images/avatar-1.jpg'
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router";

export default function SectionBanner() {
    return (
        <>
            <section id="topbar" className="sticky top-0 bg-white">
                <Link to="/notification" className="flex justify-between items-center hover:text-webstyle-primary">
                    <h1 className="text-webstyle-primary text-xl font-logo">KerjaYuk!</h1>
                    <div className="relative">
                        <IoMdNotificationsOutline className="text-3xl" />
                        <div className="absolute top-1.5 right-1 w-2 h-2 bg-webstyle-primary rounded-full"></div>
                    </div>
                </Link>
            </section>

            <section id="banner">
                <h3 className="text-sm font-normal mb-3">Hi, Good Morning!</h3>
                <div className="bg-gradient-to-r from-webstyle-primary via-[#d91a43] to-[#cc1555] rounded-xl py-3 px-4 flex flex-col gap-3">
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <div className="max-w-14 overflow-hidden rounded-full">
                                <img src={DummyUser} alt="dummy user" className="w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-white text-base font-semibold">Tabay</h4>
                                <h5 className="font-normal text-white text-xs italic">UI/UX Designer</h5>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <h5 className="font-normal text-white text-xs italic">Member since</h5>
                            <h4 className="text-white text-base font-semibold">01 Juni 2021</h4>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h5 className="text-white font-normal text-xs italic">Location</h5>
                            <h4 className="text-white text-base font-semibold">Kantor Sahid</h4>
                        </div>
                        <h5 className="flex items-end text-white font-normal text-xs italic">ICO</h5>
                    </div>
                </div>
            </section>
            
        </>
    )
}