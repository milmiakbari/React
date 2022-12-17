export const PokemonName = ({ name }) => {
  return <p className="font-bold text-xl mb-2 text-center">{name}</p>;
};

export const PokemonImg = ({ size, url }) => {
  return (
    <img
      className={`my-4 mx-auto ${size === "big" ? "h-62" : "h-24"}`}
      src={url}
    />
  );
};

export const ChoseButton = () => {
  return (
    <button className="rounded bg-indigo-500 text-white p-4 w-full">
      Pilih pokemon
    </button>
  );
};

export const Container = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

export const Card = ({ children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      {children}
    </div>
  );
};
