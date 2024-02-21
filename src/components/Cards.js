import { useNavigate } from "react-router-dom";

export default function Cards({ data,handleDelete }) {
  const navigate=useNavigate()
  
  return (
    <section>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className="text-gray-700 text-base">
            Username: {data.username}
            <br />
            Email: {data.email}
            <br />
            Phone: {data.phone}
            <br />
            Website:{" "}
            <a href={data.website} className="text-blue-500">
              {data.website}
            </a>
            <br />
            Address: {data.address.street}, {data.address.suite},{" "}
            {data.address.city}, {data.address.zipcode}
            <br />
            Company: {data.company.name}
            <br />
            Catch Phrase: {data.company.catchPhrase}
            <br />
            Business: {data.company.bs}
          </p>
          <button className="border p-2 m-2 rounded-md" onClick={()=>navigate(`/editUserData/${data.id}`)}>Edit</button>
          <button className="border p-2 m-2 rounded-md bg-red-500 text-white" onClick={()=>handleDelete(data.id)}>Delete</button>
        </div>
      </div>
    </section>
  );
}
