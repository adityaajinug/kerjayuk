
import { FaHome, FaReceipt, FaRegCalendarCheck } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";

export default function Menu() {
    return (
        <>
            <div className="bg-white fixed bottom-0 max-w-md w-full shadow-top">
                <nav className="flex justify-center gap-5 items-center px-5 py-3 overflow-visible relative">
                    <ul className="flex gap-6 items-center w-full justify-start">
                        <li>
                            <a href="#" className="flex flex-col gap-1 justify-center items-center group">
                                <FaHome className="text-xl text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary" />
                                <span className="text-sm font-medium text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col gap-1 justify-center items-center group">
                                <FaRegCalendarCheck className="text-xl text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary" />
                                <span className="text-sm font-medium text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary">Attendance</span>
                            </a>
                        </li>
                    </ul>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-5 z-50 flex flex-col items-center">
                        <a href="#" className="flex flex-col items-center group">
                            <div className="bg-webstyle-primary rounded-full shadow-top flex items-center justify-center w-16 h-16 group-hover:scale-90 transition-all delay-75">
                                <IoLogOut className="text-white text-2xl" />
                            </div>
                            <span className="text-sm font-medium text-webstyle-primary mt-1">Check Out</span>
                        </a>
                    </div>

                    <ul className="flex gap-8 items-center w-full justify-end">
                        <li>
                            <a href="#" className="flex flex-col gap-1 justify-center items-center group">
                                <FaReceipt className="text-xl text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary" />
                                <span className="text-sm font-medium text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary">Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col gap-1 justify-center items-center group">
                                <IoSettingsSharp className="text-xl text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary" />
                                <span className="text-sm font-medium text-webstyle-grey active:text-webstyle-primary group-hover:text-webstyle-primary">Setting</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}