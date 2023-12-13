import React from "react";

const LimitedCollection = () => {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 custom-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[818px] bg-top-[5rem]')]">
        <div className=" container mx-auto flex flex-col md:justify-end justify-between text-white md:px-0 px-4 pt-10 md:pt-0">
          <div>
            <div>
              <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-7 max-w-[200px] md:max-w-full">
                appreciating your wine, guarding its emotions
              </p>
              <p className="text-white md:text-9xl sm:text-6xl text-5xl font-normal  ">
                Marketplace
              </p>
              <p className="text-stone-400 text-base font-normal leading-snug pt-4 pb-10 max-w-[470px]">
                Something about technology, advantage of wine investments,
                unique buying and reselling experience
              </p>
              <button className="h-14 px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase tracking-tight">
                START EXPLORING
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" pt-28 md:pb-14 pb-5">
            <p className=" text-orange-100 text-lg font-semibold leading-relaxed">
              Peace of Mind pledge
            </p>
          
            {/* <div className=" pt-28 pb-14"></div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LimitedCollection;
