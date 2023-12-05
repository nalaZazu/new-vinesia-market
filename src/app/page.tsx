import Banner from "../components/banner/pages";
import Critics from "../components/critics/page";
import ProductCards from "../components/productCard/pages";
import Subscription from "../components/subscription/page";
import VideoBanner from "../components/videoBanner/page";
import WineArt from "../components/wineArt/page";
import HeritageCarousel from "../components/heritageCarousel/page";
import ExploreRegion from "../components/exploreRegion/page";
import Header from "../components/header/page";
import Newsletter from "../components/newsletter/page";
import Footer from "../components/footer/page";
import CriticsMobile from "../components/critics/mobileView";
import ExploreRegionMobile from "../components/exploreRegion/mobileview";
import NewsletterMobile from "../components/newsletter/MobileView";

export default function Home() {
  return (
    <>
      <div className="bg-orange-50 absolute top-0 -z-10 left-0 right-0">
        <div className="relative">
          <Banner />
          <div className=" pt-40 container mx-auto ">
            <h2 className="text-center text-zinc-800 md:text-7xl text-4xl font-normal leading-[80px] pb-16 ">
              Invest in heritage and excellence
            </h2>
            <ProductCards />
            <div className="pt-14 md:pt-20 pb-20 md:pb-40">
              <VideoBanner />
            </div>
          </div>
          <Subscription />
          <div className="py-16 md:py-40  container mx-auto px-4 md:px-0">
            <h1 className="text-primary font-semibold text-3xl leading-10">
              Critics selection
            </h1>
            {/* Desktop View */}
            <div className=" hidden md:block">
              <Critics />
            </div>
            {/* Mobile vIew */}
            <div className=" block md:hidden">
              <CriticsMobile />
            </div>
          </div>
          {/* <div className=" py-20 md:py-40 bg-red-900 relative">
            <WineArt />
          </div> */}
          {/* <HeritageCarousel /> */}
          {/* desktop view */}
          {/* <ExploreRegion /> */}
          {/* mobileView */}
          {/* <ExploreRegionMobile />
          <Newsletter />
          <Footer /> */}
        </div>
        <div className=" py-20 md:py-40 bg-red-900 relative">
          <WineArt />
        </div>
        <HeritageCarousel />
        {/* desktop view */}
        <ExploreRegion />
        {/* mobileView */}
        <ExploreRegionMobile />
        {/* desktop Newsletter*/}
        <div className="hidden sm:block">
          <Newsletter />
        </div>
        {/* mobile Newsletter */}
        <div className="block sm:hidden">
          <NewsletterMobile />
        </div>
        <Footer />
      </div>
    </>
  );
}
