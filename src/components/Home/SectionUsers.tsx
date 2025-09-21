import TitleSection from "@/components/Title/TitleSection";
import { userData } from "@/datas/userDatas";
import { Link } from "react-router";

export default function SectionUsers() {
    return (
        <>
            <section id="online-user">
                <TitleSection title="Online" />
                <div className="bg-white shadow-lg rounded-lg py-3 px-4 flex justify-center">
                    {userData.map((data, index) => (
                        <div className={`flex flex-col gap-1 items-center ${index != 0 ? '-ml-[10px]' : ''}`}>
                            <div className="max-w-12 rounded-full bg-white border-2 border-white overflow-hidden">
                                <img src={data.avatar} alt="users" className="w-full h-full" />
                            </div>
                            <h6 className="text-xs font-bold line-clamp-1">{data.name}</h6>
                            <p className="text-[10px] font-normal line-clamp-1">{data.status}</p>
                        </div>

                    ))}
                    <Link to="#" className="bg-gradient-to-r from-webstyle-primary via-[#d91a43] to-[#cc1555] w-12 h-12 max-h-12 -ml-[10px] max-w-12 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center">
                        <h6 className="text-xs font-normal text-white text-center">10 more</h6>
                    </Link>
                </div>
            </section>
        </>
    )
}