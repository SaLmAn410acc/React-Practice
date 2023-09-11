import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newTour);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
      // console.log(data);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <div className="underline"></div>
        </div>
        <button className="btn" onClick={() => fetchData()}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} remTour={removeTour} />
      </main>
    </>
  );
};
export default App;
