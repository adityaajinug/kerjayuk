import TitleSection from "@/components/Title/TitleSection";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import { newsData } from "@/datas/newsDatas";
import { useState } from "react";

export default function SectionNews() {
    const [activeIndex, setActiveIndex] = useState<Number>(0);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    return (
        <>
            <section id="news">
                <div className="px-6">
                    <TitleSection title="PCS News" />
                </div>
                <Swiper className="news-slide"
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    autoplay={
                        {
                            delay: 2000,
                            disableOnInteraction: false
                        }
                    }
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    centeredSlides={true}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex % 3)
                    }}
                >
                    {newsData.map((data, index) => {
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col gap-4 shadow-md p-4 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className="flex gap-2 items-center">
                                                <div className="max-w-12 overflow-hidden rounded-full">
                                                    <img src={data.avatar} alt="" className="w-full h-full" />
                                                </div>
                                                <h3 className="text-webstyle-primary font-semibold">{data.author}</h3>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <h6 className="font-normal text-xs text-black">{data.day}</h6>
                                                <h6 className="font-normal text-xs text-black">{data.date}</h6>
                                            </div>
                                        </div>
                                        <div>
                                            {data.content.map((content, index) => (
                                                <p key={index}>
                                                    {content}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                
                </Swiper>

                 <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (swiperInstance) {
                                swiperInstance.slideToLoop(i);
                            }
                        }}
                        className={`w-2 h-2 rounded-full ${activeIndex === i ? "bg-webstyle-primary" : "bg-gray-300"}`}
                    />
                    ))}
                </div>
            </section>
        </>
    )
}