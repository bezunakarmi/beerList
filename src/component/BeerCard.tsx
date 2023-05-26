import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  name: string;
  genre: string;
  description: string;
  image: string | StaticImageData;
  ingredients: string | null;
};
const BeerCard: FC<Props> = ({ name, genre, description, image, ingredients }) => {
  return (
    <div className="flex justify-between h-[200px] w-full px-6 py-6 rounded-md shadow-lg shadow-gray-400 cursor-pointer hover:bg-blue-100">
      <div className="flex items-center justify-center  w-1/4 ">
        <Image src={image} alt={name} width={39.26} height={57.06} title={ingredients as unknown as string} />
      </div>
      <div className="flex flex-col w-3/4 gap-2">
        <h1 className="text-black text-xl">{name}</h1>
        <label className=" text-yellow-600">{genre}</label>
        <p className="text-black text-sm line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default BeerCard;
