"use client";

import { useState } from "react";
import Link from "next/link";

const CastList = ({ cast }: { cast: any[] }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedCast = showAll ? cast : cast.slice(0, 8);

  return (
    <>
      {displayedCast.map((p, id) => (
        <Link key={id} href={`/detail/people/${p.id}`}>
          <div className="w-full shadow-lg rounded-xl bg-white">
            {p.profile_path ? (
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${p.profile_path}`}
                alt={p.name}
                className="w-full h-96 md:h-72 rounded-t-xl object-cover"
              />
            ) : (
              <div className="h-96 md:h-72 flex items-center justify-center bg-gray-300 rounded-t-xl">
                <p className="text-gray-700 font-semibold text-lg">
                  {p.name[0]}
                </p>
              </div>
            )}
            <div className="p-4">
              <p className="font-semibold text-lg text-gray-900">{p.name}</p>
              <p className="text-sm text-gray-500">{p.character}</p>
            </div>
          </div>
        </Link>
      ))}

      {cast.length > 8 && (
        <div className="text-start ms-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-red-400 font-semibold text-lg underline "
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default CastList;
