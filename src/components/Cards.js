import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Cards({ data, handleDelete }) {
  const navigate = useNavigate();
  return (
    <section>
      <div className="max-w-sm max-h-full rounded border shadow-lg mx-auto m-4">
        <div className="p-2 flex flex-col justify-center items-center">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className="text-gray-700 text-base text-center ">
            <span className="font-bold"> Username:</span> {data.username}
            <br />
            <span className="font-bold">Email</span>: {data.email}
            <br />
            <span className="font-bold">Phone</span>: {data.phone}
            <br />
            <span className="font-bold">Website</span> :{" "}
            <a href={data.website} className="text-blue-500">
              {data.website}
            </a>
            <br />
            <hr />
            <span className="font-bold">Address</span> <br />
            {data.address.street},
            {data.address.suite},<br />
            {data.address.city},
            {data.address.zipcode}
            <br />
            <hr />
            <span className="font-bold">Company</span>
            <br /> {data.company.name}
            <br />
            {data.company.catchPhrase}
            <br />
            {data.company.bs}
          </p>
          <div>
            <IconButton
              aria-label="edit"
              onClick={() => navigate(`/editUserData/${data.id}`)}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => handleDelete(data.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
