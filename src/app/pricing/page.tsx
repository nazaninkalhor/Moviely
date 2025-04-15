import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-white text-xl mx-3 text-center md:text-3xl font-medium pt-20 md:pt-36 relative">
        Enjoy Streaming Latest Movies and Series with Moviely
        {/* <span className="font-bold text-2xl">120</span> Days of Your
        Subscreption has Remained! */}
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-4 xl:px-6 md:pt-12">
        <div className="mb-10 space-y-4 px-6 md:px-0"></div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 rounded-3xl bg-gradient-to-b to-transparent from-red-900  shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              1 month
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $19
              </span>{" "}
            </p>
            <ul className="list-none list-inside mb-6 text-center text-gray-300">
              <li className="font-bold text-orange-600">Full Access</li>
              <li>Stream Movies &amp; Series</li>
              <li>Subtitles in All Languages</li>
              <li>24/7 Support</li>
            </ul>
            <button className="btn btn-outline border-white border-2 text-white ms-3 ">
              <Link href="/">Subscribe</Link>
            </button>
          </div>
          <div className="flex flex-col md:-mt-9 md:mb-9 items-center aspect-auto p-4 sm:p-8 rounded-3xl bg-gradient-to-b to-transparent from-red-900  shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              6 months
            </h2>
            <p className="rounded-full bg-orange-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
              Most popular
            </p>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $49
              </span>{" "}
            </p>
            <ul className="list-none list-inside mb-6 text-center text-gray-300">
              <li className="font-bold text-orange-600">Full Access</li>
              <li>Stream Movies &amp; Series</li>
              <li>Subtitles in All Languages</li>
              <li>24/7 Support</li>
            </ul>
            <button className="btn btn-outline border-white border-2 text-white ms-3 ">
              <Link href="/">Subscribe</Link>
            </button>
          </div>
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 rounded-3xl bg-gradient-to-b to-transparent from-red-900 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
              1 year
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                $199
              </span>{" "}
            </p>
            <ul className="list-none list-inside mb-6 text-center text-gray-300">
              <li className="font-bold text-orange-600"> Full Access</li>
              <li>Stream Movies &amp; Series</li>
              <li>Subtitles in All Languages</li>
              <li>24/7 Support</li>
            </ul>
            <button className="btn btn-outline border-white border-2 text-white ms-3 ">
              <Link href="/">Subscribe</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
