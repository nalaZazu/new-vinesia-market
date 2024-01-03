import { AccordionAboutTwo } from "@/constants/accrodion";
import { Arrows } from "@/assets/icons/Icons";
import Link from "next/link";
import { AccordionWineAbout } from "../accordion/page";

export default function QASummary({ title = "Have some questions on how it works?" }: { title?: string }) {
    return (
        <>{/* The faster way to get to know us */}
            <div className="md:py-40 md:px-0 px-4 h-[110vh] flex items-center justify-center">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-5 grid-cols-1 ">
                        <div className="max-w-[698px] col-span-3">
                            <h2 className="text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px]  text-4xl  leading-[42px] md:tracking[-0.36px]">
                                {title}
                            </h2>
                            <div className="flex items-center pt-9 md:pb-0 pb-12 gap-3">
                                <Link href={'/faq'}>
                                    <button className="text-center  text-orange-700 text-xs font-normal justify-start items-center gap-3 inline-flex uppercase leading-3 tracking-tight">
                                        SEE ALL QUESTIONS & ANSWERS
                                        <span>
                                            <Arrows storke="#BF4D20" />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* here is new sextion */}
                        <div className="max-w-[501px] col-span-2">
                            <AccordionWineAbout data={AccordionAboutTwo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

