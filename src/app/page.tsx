import Banner from "../components/banner/pages";
import Critics from "../components/critics/page";
import ProductCards from "../components/productCard/page";
import Subscription from "../components/subscription/page";
import VideoBanner from "../components/videoBanner/page";
import WineArtSection from "../components/wineArtSection/page";
import HeritageCarousel from "../components/heritageCarousel/page";
import ExploreRegion from "../components/exploreRegion/page";
import Newsletter from "../components/newsletter/page";
import Footer from "../components/footer/page";
import CriticsMobile from "../components/critics/mobileView";
import ExploreRegionMobile from "../components/exploreRegion/mobileview";
import NewsletterMobile from "../components/newsletter/MobileView";
import Product from "@/components/products/page";
import { ProductList } from "@/constants/products";

export default function Home() {
  const breadCrumbData = ["italy", "spttimano", "barbaresco", "2020"];
  return (
    <>
      <div className="absolute top-0 -z-10 left-0 right-0">
        <div className="relative">
          <Banner breadCrumbData={breadCrumbData} />
          <div className=" pt-40 container mx-auto ">
            <h2 className="text-center text-zinc-800 text-4xl font-normal md:leading-[80px] leading-[42px] md:pb-20 pb-16 ">
              Invest in heritage and excellence
            </h2>
            <div className="hidden md:block">
              <HeritageCarousel />
            </div>
            <div className="block md:hidden">
              <Product items={ProductList} />
              {/* <ProductCards /> */}
            </div>
            <div className="pt-14 md:pt-20 pb-20 md:pb-40">
              <VideoBanner />
            </div>
          </div>
          <Subscription />
          <div className="py-16 md:py-40  container mx-auto px-4 md:px-2">
            <h1 className="text-primary font-normal md:text-7xl md:leading-[80px] text-4xl leading-10">
              Critics selection
            </h1>
            {/* Desktop View */}
            <div className="hidden lg:block">
              <Critics />
            </div>
            {/* Mobile vIew */}
            <div className="block lg:hidden">
              <CriticsMobile />
            </div>
          </div>
        </div>
        <div className=" py-20 md:py-40 bg-red-900 relative">
          <WineArtSection />
        </div>

        <div className="md:py-40 py-20 relative">
          <div className="pb-14">
            <h1 className="text-zinc-800 text-4xl font-normal  text-center">
              Invest in heritage
            </h1>
          </div>
          <HeritageCarousel />
        </div>
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
