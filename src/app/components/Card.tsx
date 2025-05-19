import Link from "next/link";

export interface CardButton {
  order_number: number;
  component: React.ReactNode;
}

export interface CardItem {
  id: number;
  BackgroundImage: string;
  title: string;
  popularity: number;
  overview: string;
  link: string;
}

const Card = (cardItem: CardItem) => {
  cardItem = cardItem.cardItem;

  const newOverview = (cardItem.overview || "No overview available")
    .split(" ")
    .slice(0, 30)
    .join(" ");
  return (
    cardItem && (
      <Link href={cardItem.link}>
        <div className="flex overflow-x-auto">
          <div className="card border-neutral border-2 bg-base-100 w-full max-w-[500px] shadow-xl group overflow-hidden relative">
            <figure className="h-0 pb-[150%] relative bg-cover">
              <div
                className="absolute inset-0 bg-no-repeat bg-center"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url("${cardItem.BackgroundImage}")`,
                }}
              />
            </figure>
            <div className="card-body absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
              <h2 className="card-title text-lg border-0 text-center">
                {cardItem.title}
              </h2>

              <p className="text-sm mb-4">{newOverview}...</p>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default Card;
