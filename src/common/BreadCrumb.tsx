import React from "react";

export default function BreadCrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="text-yellow-50 text-xs font-normal uppercase leading-3 tracking-tight"
          >
            France
          </a>
        </li>
        <li className="hidden md:block lg:block  text-xs font-normal">/</li>
        <li>
          <div className="flex items-center">
            <a
              href="#"
              className=" text-yellow-50 text-xs font-normal uppercase leading-3 tracking-tight"
            >
              Vintage
            </a>
          </div>
        </li>
        <li className="hidden md:block lg:block text-xs font-normal">/</li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className=" text-yellow-50 text-xs font-normal uppercase leading-3 tracking-tight">
              Pessac-Leognan
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
