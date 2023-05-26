import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard';

const AllBeers = () => {
  const [limit, setLimit] = useState(10);
  const [beers, setBeers] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=${limit}`);
    const beers = await data.json();
    setBeers(beers);
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const getIngredients = (ingredients: Object) => {
    const keys = Object.keys(ingredients);
    return 'Ingredients: ' + keys.toString();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2">
        {beers.length > 0 &&
          beers.map(
            (
              beer: { image_url: string; name: string; tagline: string; description: string; ingredients: Object },
              idx: number
            ) => (
              <BeerCard
                key={idx}
                name={beer.name}
                genre={beer.tagline}
                description={beer.description}
                image={beer.image_url}
                ingredients={getIngredients(beer.ingredients)}
              />
            )
          )}
      </div>
      <button onClick={() => setLimit(limit + 10)} className=" text-blue-600">
        Load more
      </button>
    </div>
  );
};

export default AllBeers;
