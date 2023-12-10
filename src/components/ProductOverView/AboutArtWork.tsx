import Image from "next/image";
import React from "react";
import group from "@/assets/images/group.png";

export default function AboutArtWork() {
  return (
    <div>
      <section className="py-40 bg-red-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-col-1  md:grid-cols-5 mx-auto">
            <div className="md:col-span-3 col-span-1 ">
              <p className=" text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-4">
                About
              </p>
              <h2 className=" capitalize text-7xl font-normal leading-[84px]">
                artwork
              </h2>
              <p className="text-stone-400 text-xs font-normal uppercase leading-3 tracking-tight pb-2 pt-12">
                Original Art
              </p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                Stop Breathing, White_2Stripes_black_blue
              </p>
              <p className="text-stone-400 text-xs font-normal leading-3">
                WP Nr.1 Screen print on paper 31x 41 cm 2022
              </p>
              <p className="flex items-center gap-3 pt-6 pb-8 text-center text-white text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                Artist Famous and Known
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </p>
              <p className="text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug pb-8">
                Reso’s deep connection with New York City has been a profound
                source of inspiration throughout his life. The vibrant
                subcultural graffiti movement in the 70s and 80s, which painted
                the cityscape with mesmerizing letterings on subway cars, left
                an indelible mark on his artistic journey. New York’s contrasts
                and diverse experiences shaped Reso’s creativity, leading him to
                explore typography and the power of letters to evoke emotions in
                viewers.
              </p>
              <p className="text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug pb-8">
                His art, born in secrecy and yet attracting extreme attention,
                later evolved into a multidimensional experience, where letters
                overlapped, and functionality gave way to artistic expression.
                Through his international presence, Reso’s name and influence
                became synonymous with the graffiti movement, but he sought
                artistic liberation beyond its confines, embracing a new chapter
                of his creative exploration.
              </p>
              <p className="text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug pb-8">
                Reso turned away from the legibility of characters and lettering
                and instead focused on the viewer’s emotional access to his
                work. His signs are encoded in a unique and personal way, making
                the individual layers no longer easy to separate, and the
                letters lose their classic distinguishing features when merged
                through the overlay of letter forms and colors.
              </p>
              <p className="text-stone-400 text-base font-normal font-['Albert Sans'] leading-snug pb-8">
                Reso consciously breaks with traditional reading habits and
                offers viewers a completely new image of typography. He no
                longer arranges the letters classically from left to right and
                one behind the other, but allows them to merge into constructs
                of form in order to provide viewers with new visual experiences.
              </p>
            </div>
            <div className="flex justify-end text-end col-span-2 ">
              <Image
                src={group}
                alt="Picture of the author"
                className="w-10/12"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
