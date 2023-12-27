import React from "react";

export default function ContactBanner() {
  return (
    <div>
      <section className="grid grid-cols-1 contact-bg-image md:pt-0 pt-40 bg-[#4e261a] object-cover bg-center h-[448px] bg-top-[5rem]')]">
        <div className=" container mx-auto flex flex-col md:justify-center justify-between text-white md:px-0 px-4 pt-10 md:pt-24">
          <div>
            <div>
              <h1 className="max-w-[1100px] flex flex-col text-white text-[144px] font-normal leading-[144px] tracking-[-2.88px]">
                Contact us
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
