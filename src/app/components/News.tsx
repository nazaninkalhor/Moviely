import Link from "next/link";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";

const News = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-row text-white mb-8 font-semibold ms-5 text-3xl items-center mt-20">
        <AiOutlineGlobal />
        <h2 className="ms-2 ">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-2 gap-y-10 md:gap-10 lg:mx-10">
        <div className="card bg-gray-800 shadow-sm">
          <figure>
            <img
              loading="lazy"
              src="https://i1.sndcdn.com/artworks-dV4nKpnTsSy13f8h-TmuLyQ-t1080x1080.jpg"
              alt="Movie"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-xl md:text-2xl">
              Everything about Culpa Tuya!
            </h2>
            <p className="text-sm md:text-base">
              The love between Noah and Nick seems unwavering despite their
              parents' attempts to separate them. But his job and her entry into
              college open up their lives to new relationships that will shake
              the foundations of both their relationship and the Leister family
              itself.
            </p>
            <div className="card-actions justify-end">
              <Link href="/news">
                <button className="btn bg-red-800 border-none text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 shadow-sm">
          <figure>
            <img
              loading="lazy"
              src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/10/chicago-pd-season-1.jpg"
              alt="Movie"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-xl md:text-2xl">
              Chicago P.D. is Back!
            </h2>
            <p className="text-sm md:text-base">
              Follows the lives of the personnel of the fictional 21st District,
              which houses both uniformed officers and the department's elite
              Intelligence Unit as they fight every day to keep the city of
              Chicago, Illinois safe.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800 border-none text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 shadow-sm">
          <figure>
            <img
              loading="lazy"
              src="https://www.forcesnews.com/sites/default/files/Image-ID-2H9B2RW-Daniel-Craig-as-James-Bond-in-Spectre%2C-2015-CREDIT-Columbia-Pictures-Entertainment-Picture-EXP-231124.jpg"
              alt="Movie"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-xl md:text-2xl">
              Candidates for James Bond
            </h2>
            <p className="text-sm md:text-base">
              Embark on an incredible journey filled with challenges, emotions,
              and unforgettable moments. A story that captures the essence of
              human resilience and love.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800 border-none text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 shadow-sm">
          <figure>
            <img
              loading="lazy"
              src="https://www.forcesnews.com/sites/default/files/Image-ID-2H9B2RW-Daniel-Craig-as-James-Bond-in-Spectre%2C-2015-CREDIT-Columbia-Pictures-Entertainment-Picture-EXP-231124.jpg"
              alt="Movie"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-xl md:text-2xl">
              Leonardo Dicaprio is returned to the Cinema
            </h2>
            <p className="text-sm md:text-base">
              Leonardo DiCaprio is an American actor and producer who emerged in
              the 1990s as one of Hollywood’s leading performers, noted for his
              portrayals of unconventional and complex characters.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-800 border-none text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
