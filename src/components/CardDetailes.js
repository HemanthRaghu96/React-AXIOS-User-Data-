
import React, { useEffect } from "react";
import Cards from "./Cards";


export default function CardDetails({handleFetch,datas,handleDelete}) {
  
  useEffect(() => {
    handleFetch();
  },[]);

  return (
    <section>
      <div className="w-72 md:w-11/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-12 mx-auto ">
        {datas.map((data) => (
          <Cards key={data.id} data={data} handleDelete={handleDelete}  />
        ))}
      </div>
    </section>
  );
}
