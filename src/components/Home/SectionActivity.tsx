import { GiClockwiseRotation } from "react-icons/gi";
import { LuClock3, LuClock6 } from "react-icons/lu";

export default function SectionActivity() {
    return (
        <>
            <section id="activity">
                <h3 className="text-sm font-bold mb-3">Today's activity</h3>
                <div className="flex justify-evenly gap-8 items-center">
                    <div className="flex items-center flex-col gap-1">
                        <LuClock3 className="rotate-[270deg] text-3xl text-webstyle-primary font-semibold" />
                        <h6 className="font-bold text-sm text-black">08:30</h6>
                        <p className="text-xs font-normal text-black">Check In</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <GiClockwiseRotation className="-rotate-3 text-3xl text-webstyle-primary font-semibold" />
                        <h6 className="font-extrabold text-sm text-webstyle-primary">03:00:00</h6>
                        <p className="text-xs font-normal text-black">Check In</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <LuClock6 className="-rotate-3 text-3xl text-webstyle-primary font-semibold" />
                        <h6 className="font-bold text-sm text-black">--:--</h6>
                        <p className="text-xs font-normal text-black">Clock Out</p>
                    </div>
                </div>
            </section>
        </>
    )
}