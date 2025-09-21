
import { FaHome, FaReceipt, FaRegCalendarCheck } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router";

export default function Menu() {
    const location = useLocation()

    const isActive = (path: string) => location.pathname == path
    return (
        <>
            <div className="bg-white fixed bottom-0 max-w-md w-full shadow-top">
                <nav className="flex justify-center gap-5 items-center px-5 py-3 overflow-visible relative">
                    <ul className="flex gap-6 items-center w-full justify-start">
                        <li>
                            <Link to="/" className={`flex flex-col gap-1 justify-center items-center ${isActive("/") ? "text-webstyle-primary" : "text-webstyle-grey"}`}>
                                <FaHome className="text-xl" />
                                <span className="text-sm font-medium">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/attendance" className={`flex flex-col gap-1 justify-center items-center hover:text-webstyle-primary ${isActive("/attendance") ? "text-webstyle-primary" : "text-webstyle-grey"}`}>
                                <FaRegCalendarCheck className="text-xl" />
                                <span className="text-sm font-medium">Attendance</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-5 z-50 flex flex-col items-center">
                        <Link to="#" className="flex flex-col items-center group">
                            <div className="bg-webstyle-primary rounded-full shadow-top flex items-center justify-center w-16 h-16 group-hover:scale-90 transition-all delay-75">
                                <IoLogOut className="text-white text-3xl" />
                            </div>
                            <span className="text-sm font-medium text-webstyle-primary">Check Out</span>
                        </Link>
                    </div>

                    <ul className="flex gap-8 items-center w-full justify-end">
                        <li>
                            <Link to="/form" className={`flex flex-col gap-1 justify-center items-center hover:text-webstyle-primary ${isActive("/form") ? "text-webstyle-primary" : "text-webstyle-grey"}`}>
                                <FaReceipt className="text-xl" />
                                <span className="text-sm font-medium">Form</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/setting" className={`flex flex-col gap-1 justify-center items-center hover:text-webstyle-primary ${isActive("/setting") ? "text-webstyle-primary" : "text-webstyle-grey"}`}>
                                <IoSettingsSharp className="text-xl" />
                                <span className="text-sm font-medium">Setting</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}