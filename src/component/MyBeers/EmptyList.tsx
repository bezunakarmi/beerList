import React, { FC, useState } from 'react';
import Modal from './Modal';
type Props = { beerList: Array<[]>; setBeerList: React.Dispatch<React.SetStateAction<Array<[]>>> };
const EmptyList: FC<Props> = ({ beerList, setBeerList }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-[800px] bg-gray-100 rounded flex flex-col justify-center items-center text-gray-400">
      <label>Nothing to see yet.</label>
      <label>
        <a onClick={() => setShowModal(true)} className="text-blue-600 cursor-pointer">
          Click here
        </a>{' '}
        to add your first beer.
      </label>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} beerList={beerList} setBeerList={setBeerList} />
      )}
    </div>
  );
};

export default EmptyList;
