import { useState, useEffect } from 'react';


const URL = import.meta.env.VITE_API_URL;

function Api() {
    const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShows();
  }, []);

  return (
    <>
    <div className='show-list'>
      {shows.map((show) => (
        <div key={show.id} className='show'>
          <h2>{show.name}</h2>
          <img src={show.image.medium} alt={show.name} />
        </div>
      ))}
    </div>
    </>
  );

}

export default Api;