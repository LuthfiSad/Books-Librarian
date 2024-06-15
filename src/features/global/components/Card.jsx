import React from "react";

const Card = ({
  children,
  booksCount,
  borrowCount,
  src,
  penulis,
  as: Component = "div",
  ...rest
}) => {
  const isOutOfStock = borrowCount === booksCount;

  return (
    <Component {...rest} className="w-full h-full">
      <div className="p-5 h-full max-xs:p-2 border bg-[#D9D9D9] border-black flex flex-col gap-4 items-center text-center rounded-md">
        <div className="relative">
          <img
            src={src}
            className="max-w-[200px] max-h-[200px] object-cover"
            draggable="false"
          />
          {booksCount === borrowCount && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-red-500 text-xs font-semibold bg-black p-2 rounded-lg">
                (Habis)
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 h-full justify-end">
          <h2 className="text-lg break-all line-clamp-2 font-semibold">
            {children}
          </h2>
          <p className="text-sm line-clamp-1 break-all">Penulis: {penulis}</p>
        </div>
      </div>
    </Component>
  );
};

export default Card;
