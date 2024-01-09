import React from "react";
import banner from "@/assets/images/blogbanner.png";
import blogimages from "@/assets/images/blogimages.png";
import Image from "next/image";
import { Facebook, LinkdeIn, SharePin, Twitter } from "@/assets/icons/Icons";
import { BlogDetailsList, BlogLists } from "@/constants/accrodion";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
const BlogDetails = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Image
          src={banner}
          alt="banner"
          className="object-cover bg-center w-full"
        />
        <div className="container px-4 mx-auto pt-8">
          <div className="grid grid-cols-12 pb-20 lg:gap-32 md:gap-12 border-b border-orange-700 border-opacity-20 ">
            <div className="md:col-span-7 col-span-12">
              <div>
                <span className="text-[#906447] pb-3 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  WINE INVESTMENT
                </span>
                <h3 className=" text-zinc-800 text-4xl font-light leading-[44px] tracking-[ -0.36px]">
                  Wine scoring system – how does it work? A pros/cons analysis
                </h3>
                <div className="flex items-center gap-4 pt-6 pb-12 border-b border-orange-700 border-opacity-20">
                  <span className="text-[#827A80] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                    12/11/2023
                  </span>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20 md:block hidden" />
                  <p className="text-base font-normal text-[#827A80]  leading-snug">
                    Share this article
                  </p>
                  <div className="flex items-center  gap-4">
                    <Facebook fill="#4285F4" />
                    <LinkdeIn fill="#0A66C2 " />
                    <Twitter fill="#000000" />
                    <SharePin fill="#BF4D20" />
                  </div>
                </div>
                {/* here is paraghrap section */}
                <div>
                  {/* here is section  */}
                  <div className=" md:px-0 px-4 py-12">
                    <p className="text-zinc-800 text-lg font-semibold   leading-relaxed">
                      Have you ever come across a bottle of wine with a score of
                      90 or higher on a store shelf and wondered what that
                      really means? In this article, we will delve into the
                      intriguing world of wine scoring systems, unraveling how
                      they work, who the key critics behind them are, and
                      discussing the pros and cons of this approach. Let’s start
                      by exploring the history behind the wine scoring system
                      and how it evolved into a standard.
                    </p>
                  </div>
                  {/* here is   section */}
                  <div className="md:px-0 px-4">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      How did the Wine Scoring System come about?
                    </h4>
                    <p className=" text-neutral-600 text-base font-normal  pt-2 leading-snug">
                      Assigning tasting scores and evaluating wines has been
                      common practices for centuries. However, the use of a
                      numerical system to rate wines is a relatively recent
                      innovation. During the 20th century, as interest in wines
                      grew in the United States, consumers were faced with a
                      multitude of wine options from around the world. It was in
                      this context that “wine critics” emerged, dedicating
                      themselves to evaluating and recommending labels to make
                      it easier for less experienced consumers to choose. One of
                      the most significant milestones in popularizing the
                      numerical wine rating system was the American critic
                      Robert Parker, who patented his method in the 1970s. In
                      Parker’s system, wines were evaluated on a scale of 50 to
                      100, which could be associated with the American A-to-F
                      grading system. Wines that scored at least 80 points were
                      considered “above average” or “good.” This allowed readers
                      of specialized magazines, such as “The Wine Advocate,” to
                      quickly identify the quality of wines based on numerical
                      ratings.
                    </p>
                  </div>
                  {/* here is image  */}
                  <div className="py-12">
                    <Image src={blogimages} alt="image" className="w-full" />
                  </div>
                  {/* here is   section */}
                  <div className="md:px-0 px-4">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      How Does the Wine Scoring System Work?
                    </h4>
                    <p className=" text-neutral-600 text-base font-normal  pt-2 leading-snug">
                      The wine rating system is based on assigning a score,
                      usually by a wine critic, summarizing the assessment of
                      that label. Scores are subjective and may vary from critic
                      to critic. Each critic has their own rating system and
                      judgment criteria. However, some general guidelines are
                      common to most scoring systems. The scores reflect not
                      only the taste of the wine but also the quality of
                      production and its fidelity to the style of the region of
                      origin. This means that a wine will be evaluated based on
                      its typicity, that is, how well it represents the style of
                      the region where it was produced.
                    </p>
                  </div>
                  {/* here is   section */}
                  <div className="md:px-0 px-4 py-12">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      The 100-Point Scoring Scale
                    </h4>
                    <p className=" text-neutral-600 text-base font-normal  pt-2 leading-snug">
                      The 100-point scoring scale is widely adopted in wine
                      scoring systems. The overall scores are generally
                      interpreted as follows:
                    </p>
                    <ul className="text-neutral-600 text-base font-normal py-5 pl-14 leading-snug  list-disc">
                      <li>
                        50 to 59: Wine considered unacceptable and unsuitable
                        for consumption.
                      </li>
                      <li>
                        60 to 69: Wine considered below average and not
                        recommended but drinkable
                      </li>
                      <li>70 to 79: Wine considered average.</li>
                      <li>
                        80 to 84: Wine considered above average to “good.”
                      </li>
                      <li>85 to 89: Wine considered “good” to “very good.”</li>
                      <li>
                        90 to 94: Wine considered “superior” to “exceptional.”
                      </li>
                      <li>95 to 100: Wine considered an icon or “classic.”</li>
                    </ul>
                    <div className="text-neutral-600 text-base font-normal   leading-snug">
                      <p className="pb-5">
                        Wines that receive scores below 80 points usually have
                        their reviews withheld, meaning the critiques are not
                        published.
                      </p>
                      <p className="pb-5">
                        Wine scores can be assigned in different ways. In most
                        cases, the score is given by a single critic who tastes
                        the wine. In some cases, the score is an average of the
                        opinions of several critics tasting the same wine
                        simultaneously.
                      </p>
                      <p>
                        In addition to the score, many critics provide detailed
                        descriptions of the wine, highlighting its aroma,
                        flavor, body, and aging potential. These descriptions
                        are valuable for consumers who want a deeper
                        understanding of the wine beyond the scores.
                      </p>
                    </div>
                  </div>
                  {/* here is section  image*/}
                  <div className=" w-[715px] h-[281px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/S3nDYyp/blogimage.png')]">
                    {/**/}
                    <div className="py-12 px-12">
                      <h4 className="text-[#FFFFFF] text-[21px] font-light font-['Canela'] leading-[29px] tracking-wide">
                        Like to discuss the wine investing?
                      </h4>
                      <p className="w-[327px] text-gray-400 text-base font-normal pt-2 pb-8  leading-snug">
                        Join the Investors Community. Talk about wines, asets
                        and investing and learn about the interesting world of
                        wine.
                      </p>
                      <button className=" px-8 py-4 bg-white rounded-full justify-center items-center gap-3 inline-flex text-center text-orange-700 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                        JOIN THE COMMUNITY
                      </button>
                    </div>
                  </div>
                  {/* here is section  */}
                  <div className="md:px-0 px-4 pt-12">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      3 Tips for Using Wine Scores Wisely
                    </h4>
                    <p className="  text-neutral-600 text-base font-normal pt-2 tracking-tight">
                      While wine scoring systems have their limitations, they
                      can be a valuable tool for consumers. Here are some tips
                      for using scores wisely:
                    </p>
                  </div>
                  {/* here is section  */}
                  <div className="md:px-0 px-4 py-12">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      Know the Source
                    </h4>
                    <p className="  text-neutral-600 text-base font-normal pt-2 tracking-tight">
                      When choosing wines based on scores, it’s important to
                      consider the source of the reviews. Some critics tend to
                      give higher or lower scores than others, so knowing the
                      critic’s preferences can help with decision-making.
                    </p>
                  </div>
                  {/* here is section  */}
                  <div className="md:px-0 px-4 pb-12">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      Consider the Region
                    </h4>
                    <p className="  text-neutral-600 text-base font-normal pt-2 tracking-tight">
                      Remember that the wine’s region of origin plays a crucial
                      role in its style and flavor. If you enjoy a specific
                      style of wine, take into account the region where it’s
                      produced.
                    </p>
                  </div>
                  {/* here is section  */}
                  <div className="md:px-0 px-4">
                    <h4 className=" text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      Develop Your Own Palate
                    </h4>
                    <p className="  text-neutral-600 text-base font-normal pt-2 tracking-tight">
                      The best way to choose wines you’ll enjoy is to develop
                      your own palate. Experiment with different styles,
                      regions, and grape varieties to discover what suits your
                      taste. Our team is committed to bringing the best wines
                      from various regions of the world to cater to the diverse
                      tastes of our customers and provide excellent investment
                      options. We value the unique experience that each wine can
                      offer and are dedicated to helping you find the perfect
                      wine for every occasion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* here is second col */}
            <div className="md:col-span-5 col-span-12">
              <div className="pb-4 md:pt-0 pt-8">
                {" "}
                <span className="text-zinc-800 text-lg font-semibold   leading-relaxed ">
                  Read related stories
                </span>
              </div>
              <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1">
                {BlogDetailsList?.map((item, index) => {
                  const { title, image, date } = item;
                  return (
                    <div
                      className="px-4 py-6 md:border-t md:border-b border-orange-700 border-opacity-20 justify-start items-start gap-6 inline-flex"
                      key={index}
                    >
                      <div className="grid md:grid-cols-3 grid-cols-1">
                        <Image src={image} alt="image" className="w-full" />
                        <div className=" col-span-2 md:ps-6">
                          <p className="text-zinc-800 text-lg font-semibold   leading-snug">
                            {" "}
                            {title}
                          </p>
                          <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tigh">
                            {date}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className=" py-20 border-b border-orange-700 border-opacity-20  " /> */}
          </div>
          {/* here is next section */}

          <div className="py-20">
            <h3 className="text-zinc-800 text-4xl font-light font-['Canela'] leading-[44px]">
              Other stories you may like
            </h3>

            <div className="grid md:grid-cols-3 gap-8 pt-12 grid-cols-1 md:px-0 px-4 ">
              {BlogLists?.slice(0, 3)?.map((item: any, index: any) => {
                const { title, image } = item;
                return (
                  <div key={index}>
                    <Image src={image} alt="image" className="w-full" />
                    <div className="py-8">
                      <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                        WINE INVESTMENT
                      </span>
                      <h3 className="text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide pb-4 ">
                        {title}
                      </h3>
                      <span className="text-zinc-500 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                        12/11/2023
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* here is newlettels */}
        {/* desktop Newsletter*/}
      </div>
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden">
        <NewsletterMobile />
      </div>
    </React.Fragment>
  );
};

export default BlogDetails;
