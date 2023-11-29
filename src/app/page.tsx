import Banner from "../components/banner/pages";
import Critics from "../components/critics/page";
import ProductCards from "../components/productCard/pages";
import Subscription from "../components/subscription/page";
import VideoBanner from "../components/videoBanner/page";
import WineArt from "../components/wineArt/page";
import HeritageCarousel from "../components/heritageCarousel/page";
import ExploreRegion from "../components/exploreRegion/page";

export default function Home() {
  return (
    <>
      <div className="bg-orange-50">
        <Banner />
        <div className=" pt-40 container mx-auto ">
          <h2 className="text-center text-zinc-800 text-7xl font-normal leading-[80px] pb-16 font-['Canela']">
            Invest in heritage and excellence
          </h2>
          <ProductCards />
          <div className="pt-20 pb-40">
            <VideoBanner />
          </div>
        </div>
        <Subscription />
        <div className=" pt-40 pb-44 container mx-auto">
          <h1 className="text-primary font-semibold text-3xl leading-10">
            Critics selection
          </h1>
          <Critics />
        </div>
        <div className=" pt-40 pb-44 bg-red-900 relative">
          <WineArt />
        </div>
        <HeritageCarousel />
        <ExploreRegion />
      </div>
    </>
  );
}
