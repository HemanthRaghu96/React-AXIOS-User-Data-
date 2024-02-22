import React, { useEffect } from "react";
import Cards from "./Cards";

// Component responsible for displaying card details
export default function CardDetails({ handleFetch, datas, handleDelete }) {
  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    handleFetch(); // Calling the handleFetch function passed as a prop
  }, []);

  return (
    <section>
      {/* Displaying a grid of cards */}
      <div className="w-72 md:w-11/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-12 mx-auto">
        {/* Mapping through the datas array to render individual card components */}
        {datas.map((data) => (
          <Cards key={data.id} data={data} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
