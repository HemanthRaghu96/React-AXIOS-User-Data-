import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import DeleteIcon from "@mui/icons-material/Delete"; // Importing DeleteIcon component from Material-UI icons
import EditIcon from "@mui/icons-material/Edit"; // Importing EditIcon component from Material-UI icons

// Component responsible for rendering individual cards
export default function Cards({ data, handleDelete }) {
  const navigate = useNavigate(); // Initializing the useNavigate hook to enable navigation
  
  return (
    <section>
      {/* Card container */}
      <div className="max-w-sm max-h-full rounded border shadow-lg mx-auto m-4">
        <div className="p-2 flex flex-col justify-center items-center">
          {/* Displaying user information */}
          <div className="font-bold text-xl mb-2 font-poppins">{data.name}</div>
          <p className="text-gray-700 text-base text-center font-poppins m-2">
            <span className="font-bold font-poppins">Username:</span> {data.username}
            <br />
            <span className="font-bold font-poppins">Email:</span> {data.email}
            <br />
            <span className="font-bold font-poppins">Phone:</span> {data.phone}
            <br />
            <span className="font-bold font-poppins">Website:</span>{" "}
            <a href={data.website} className="text-blue-500 font-poppins">
              {data.website}
            </a>
          </p>
          
          {/* Displaying address information */}
          <p className="text-gray-700 text-base text-center font-poppins  m-2">
            <span className="font-bold font-poppins">Address:</span> <br />
            {data.address.street},
            {data.address.suite},<br />
            {data.address.city},
            {data.address.zipcode}
          </p>
          
          {/* Displaying company information */}
          <p className="text-gray-700 text-base text-center font-poppins  m-2">
            <span className="font-bold font-poppins">Company:</span>
            <br /> {data.company.name}
            <br />
            {data.company.catchPhrase}
            <br />
            {data.company.bs}
          </p>
          
          {/* Buttons for editing and deleting */}
          <div>
            {/* Button for editing */}
            <button
              aria-label="edit"
              className="border px-3 py-1 rounded-md mx-2 text-teal-500 font-poppins"
              onClick={() => navigate(`/editUserData/${data.id}`)} // Navigate to edit page on click
            >
              <EditIcon />Edit
            </button>

            {/* Button for deleting */}
            <button
              aria-label="delete"
              className="border px-3 py-1 rounded-md mx-2 text-red-500 font-poppins"
              onClick={() => handleDelete(data.id)} // Delete data on click
            >
              <DeleteIcon />Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
