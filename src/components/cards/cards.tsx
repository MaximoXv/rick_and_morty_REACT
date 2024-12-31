import { clx } from "../../utils/clx";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: Record<string, string>;
}

interface CardsProps {
  results: Character[] | undefined;
}

const Cards = ({ results }: CardsProps) => {
  let display;
  if (results) {
    display = results.map((character) => {
      const { id, name, status, image, location } = character;
      return (
        <div key={id} className="col-span-4 relative border-2 border-blue-500 rounded-lg overflow-hidden">
          <div>
            <img src={image} alt="" className="w-full" />
            <div className="p-3">
              <div className="text-xl font-bold mb-4">{name}</div>
              <div>
                <div className="text-sm font-light">Last location</div>
                <div className="text-md">{location.name}</div>
              </div>
            </div>
          </div>
          <div
            className={clx(
              "absolute top-1 right-1 py-1 px-2 rounded-md text-sm font-bold",
              status == "Alive" ? "bg-green-500" : "",
              status == "unknown" ? "bg-gray-500" : "",
              status == "Dead" ? "bg-red-500" : ""
            )}
          >
            {status}
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found :/";
  }

  return <>{display}</>;
};

export default Cards;
