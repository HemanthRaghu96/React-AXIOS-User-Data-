
import React, { useEffect } from "react";
import Cards from "./Cards";


export default function CardDetails({handleFetch,datas,handleDelete}) {
  
  useEffect(() => {
    handleFetch();
  },[]);

  return (
    <section>
      <div className="grid grid-cols-3 mt-12 mx-10">
        {datas.map((data) => (
          <Cards key={data.id} data={data} handleDelete={handleDelete}  />
        ))}
      </div>
    </section>
  );
}
