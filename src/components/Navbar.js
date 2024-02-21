import axios from "axios";
import React, {  useState } from "react";
import { API } from "./api";
import { Route, Routes, useNavigate } from "react-router-dom";
import CardDetails from "./CardDetailes";
import AddCard from "./AddCard";
import EditData from "./EditData";

export default function Navbar() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
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
  
  const handleFetch = async () => {
    try {
      const response = await axios.get(`${API}`);
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    await axios.post(`${API}`, newData);
    await setDatas([...datas, newData]);
    await navigate("/");
  };

  const handleDelete=async(id)=>{
    console.log(id)
    await axios.delete(`${API}/${id}`);
    const postDeleteData=datas.filter(data=>(data.id !==id))
    setDatas(postDeleteData)
    
  }

 

  return (
    <section>
      <nav>
        <ul className="flex justify-center">
          <li>
            <button onClick={() => navigate("/")} className="border m-2 p-2">
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/adduserdata")}
              className="border m-2 p-2"
            >
              Add User Data
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<CardDetails datas={datas} handleFetch={handleFetch} handleDelete={handleDelete}/>}
        />
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
        <Route
          path="/editUserData/:userId"
          element={<EditData />} />
      </Routes>
    </section>
  );
}
