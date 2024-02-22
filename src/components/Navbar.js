import axios from "axios";
import React, { useState } from "react";
import { API } from "./api";
import { Route, Routes, useNavigate } from "react-router-dom";
import CardDetails from "./CardDetailes";
import AddCard from "./AddCard";
import EditData from "./EditData";

// Component for the navigation bar and routing
export default function Navbar() {
  const navigate = useNavigate(); // Hook for navigation
  const [datas, setDatas] = useState([]); // State to store user data
  // State variables to store form data
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // Function to fetch user data
  const handleFetch = async () => {
    try {
      const response = await axios.get(`${API}`);
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to add new user data
  const handlePost = async () => {
    const newData = {
      name,
      username,
      email,
      phone,
      website,
      address: { street, suite, city, zipcode,geo: { lat, lng } },
      company: { name: companyname, catchPhrase, bs },
    };
    await axios.post(`${API}`, newData); // Sending POST request to add data
    await setDatas([...datas, newData]); // Updating state with new data
    await navigate("/"); // Navigating back to home page
  };

  // Function to delete user data
  const handleDelete=async(id)=>{
    await axios.delete(`${API}/${id}`); // Sending DELETE request to delete data
    const postDeleteData=datas.filter(data=>(data.id !==id)); // Filtering out deleted data from state
    setDatas(postDeleteData); // Updating state with filtered data
  }

  // JSX for the navigation bar and routes
  return (
    <section>
      {/* Navigation bar */}
      <nav className="bg-black flex justify-center">
        <h1 className="text-white m-2 p-2 font-black text-lg font-poppins">R-AXIOS</h1>
        <ul className="flex justify-center">
          {/* Home button */}
          <li>
            <button onClick={() => navigate("/")} className="text-white m-2 p-2 font-poppins">
              Home
            </button>
          </li>
          {/* Add User button */}
          <li>
            <button
              onClick={() => navigate("/adduserdata")}
              className="text-white m-2 p-2 font-poppins"
            >
              Add User
            </button>
          </li>
        </ul>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        {/* Route for home page displaying user details */}
        <Route
          path="/"
          element={<CardDetails datas={datas} handleFetch={handleFetch} handleDelete={handleDelete}/>}
        />
        {/* Route for adding new user data */}
        <Route
          path="/adduserdata"
          element={
            <AddCard
              handlePost={handlePost}
              data={{
                setName,
                setUsername,
                setEmail,
                setPhone,
                setWebsite,
                setStreet,
                setSuite,
                setCity,
                setZipcode,
                setCompanyname,
                setCatchPhrase,
                setBs,
                setLat,
                setLng,
              }}
            />
          }
        />
        {/* Route for editing user data */}
        <Route
          path="/editUserData/:userId"
          element={<EditData />} />
      </Routes>
    </section>
  );
}
