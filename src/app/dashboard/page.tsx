"use client";
import { useEffect, useState } from "react";

type FavoriteItem = {
  id: string;
  title: string;
  image: string;
  type: "movie" | "series";
};

const FavoritesTab = ({ userId }: { userId: string }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await fetch(`/api/users/like?userId=${userId}`);
        const data = await res.json();
        setFavorites(data.favorites); // فرض بر این که ساختار ریسپانس به این شکله
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchFavorites();
  }, [userId]);

  const favoriteMovies = favorites.filter((item) => item.type === "movie");
  const favoriteSeries = favorites.filter((item) => item.type === "series");

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">🎬 Favorite Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/10 rounded-xl overflow-hidden"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-center">
                    {movie.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No favorite movies yet.</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">📺 Favorite Series</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {favoriteSeries.length > 0 ? (
            favoriteSeries.map((series) => (
              <div
                key={series.id}
                className="bg-white/10 rounded-xl overflow-hidden"
              >
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-center">
                    {series.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No favorite series yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesTab;
