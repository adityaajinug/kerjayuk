import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function TopBar() {
    return (
        <>
            <section id="bar-page" className="sticky top-0 bg-white z-20">
                <div className="flex gap-3 items-center shadow-md py-5 px-6">
                    <Link to="/">
                            <FaArrowLeft className="text-black text-base hover:text-webstyle-primary" />
                    </Link>
                    <h1 className="text-webstyle-primary text-lg font-bold">Notification</h1>
                </div>
            </section>
        </>
    )
}