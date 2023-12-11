import Link from "next/link";
import React, { Fragment } from "react";

export default function BreadCrumb({
  breadCrumbData,
}: {
  breadCrumbData?: any;
}) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
        {breadCrumbData?.map((d: any, i: any) => {
          return (
            <Fragment key={i}>
              <li className="inline-flex items-center">
                <Link
                  href="#"
                  className="text-yellow-50 text-xs font-normal uppercase leading-3 tracking-tight"
                >
                  {d}
                </Link>
              </li>
              {breadCrumbData?.length > i + 1 && (
                <li className="text-xs font-normal">/</li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
