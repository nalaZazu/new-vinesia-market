import React from "react";
export default function page() {
  return (
    <div>
      <div className="w-full md:h-[600px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')]">
        <div className="flex justify-center items-center h-[600px]">
          <h1 className="text-center text-zinc-800 md:text-[144px] text-6xl font-normal font-['Canela']">
            Wineries
          </h1>
        </div>
      </div>
      <div className="container mx-auto pt-16 md:px-0 px-4">
        {/* text */}
        <div className="flex flex-wrap ">
          <div className="pb-7">
            <p className="max-w-[499px] text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              Bordeaux, a renowned wine region, is acclaimed for its bold red
              blends, predominantly featuring Merlot, Cabernet Sauvignon, and
              Cabernet Franc. The wines exhibit rich flavors and a superb
              balance, making Bordeaux a global wine capital. Burgundy, in
              eastern France, is famous for its exquisite Pinot Noir and
              Chardonnay wines.
            </p>
          </div>
          <div>
            <p className="max-w-[499px] text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              The terroir of Burgundy imparts a unique character, resulting in
              elegant, nuanced, and often complex flavors, highly sought after
              by wine connoisseurs. Champagne, located in northeastern France,
              is synonymous with sparkling wine. Using the traditional méthode
              champenoise, this region crafts the world's most celebrated
              bubbly.
            </p>
          </div>
        </div>
        {/* France start */}
        <div>
          <h1 className="text-zinc-800 text-[144px] font-normal font-['Canela']">
            France
          </h1>
        </div>
      </div>
    </div>
  );
}
