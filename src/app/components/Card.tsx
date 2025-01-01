import { MdStarRate } from "react-icons/md";

export interface CardButton {
  order_number: number;
  component: React.ReactNode;
}

export interface CardItem {
  BackgroundImage: string;
  title: string;
  description: string;
  popularity: number;
  button: CardButton[];
}

const Card = (cardItem: CardItem) => {
  function truncateToFirstDecimal(number) {
    return Math.trunc(number * 10) / 10;
  }
  cardItem = cardItem.cardItem;
  return (
    cardItem && (
      <div className="flex overflow-x-auto   ">
        <div className="card border-neutral border-2 bg-base-100 w-full max-w-[500px] shadow-xl group overflow-hidden relative">
          {/* Card Image */}
          <figure className="h-0 pb-[150%] relative bg-cover">
            <div
              className="absolute inset-0 bg-no-repeat bg-center"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url("${cardItem.BackgroundImage}")`,
              }}
            />
          </figure>
          {/* Overlay Content */}
          <div className="card-body absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
            <h2 className="card-title text-lg border-0 text-center">
              {cardItem.title}
            </h2>

            <p className="text-sm mb-4">
              {cardItem.description.split(" ").slice(0, 30).join(" ") +
                (cardItem.description.split(" ").length > 30 ? "..." : "")}
            </p>
            <div className="card-actions">
              {/* TODO: Sort AND LOAD Button */}
              <button className="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
