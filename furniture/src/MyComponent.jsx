import { useEffect, useState } from "react";
import DataComponent from "./DataComponent";

function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array means this effect runs once after the initial render

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render an error message if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const passingData = (id) => {
    const newData = data.filter((data) => {
      return data.id === id;
    });

    <DataComponent data={newData} />;
    // console.log(newData);
  };

  // Render the fetched data
  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <>
            <h4 key={item.id}>{item.id}</h4>
            <li>{item.title}</li>
            <button onClick={() => passingData(item.id)}>CLick</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
