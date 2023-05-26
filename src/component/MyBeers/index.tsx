import React, { FC, useState } from 'react';
import EmptyList from './EmptyList';
import Modal from './Modal';
import BeerCard from '../BeerCard';
import { StaticImageData } from 'next/image';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const index: FC<Props> = ({ showModal, setShowModal }) => {
  const [beerList, setBeerList] = useState(Array<[]>);
  return (
    <div>
      {beerList.length > 0 ? (
        beerList.map(
          (
            beer: { image: StaticImageData; name: string; genre: string; description: string; ingredients: Object },
            idx: number
          ) => (
            <BeerCard
              key={idx}
              name={beer.name}
              genre={beer.genre}
              description={beer.description}
              image={beer.image}
              ingredients={null}
            />
          )
        )
      ) : (
        <EmptyList beerList={beerList} setBeerList={setBeerList} />
      )}
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} beerList={beerList} setBeerList={setBeerList} />
      )}
    </div>
  );
};

export default index;
