import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './api';
import axios from 'axios';


export default function EditData() {
    const { userId } = useParams();
    const [datas, setDatas] = useState(null);
   
    useEffect(()=>{
        const handleFetch = async () => {
            try {
              const response = await axios.get(`${API}/${userId}`);
               setDatas(response.data);
              
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          handleFetch()
    },[])

   
  return datas ? <EditUserForm datas={datas} /> : "Loading..."
  
}

function EditUserForm({ datas }) {
    const [name, setName] = useState(datas.name);
    const [username, setUsername] = useState(datas.username);
    const [email, setEmail] = useState(datas.email);
    const [phone, setPhone] = useState(datas.phone);
    const [website, setWebsite] = useState(datas.website);
    const [street, setStreet] = useState(datas.address.street);
    const [suite, setSuite] = useState(datas.address.suite);
    const [city, setCity] = useState(datas.address.city);
    const [zipcode, setZipcode] = useState(datas.address.zipcode);
    const [companyname, setCompanyname] = useState(datas.company.name);
    const [catchPhrase, setCatchPhrase] = useState(datas.company.catchPhrase);
    const [bs, setBs] = useState(datas.company.bs);
    const [lat, setLat] = useState(datas.address.geo.lat);
    const [lng, setLng] = useState(datas.address.geo.lng);
    const navigate = useNavigate();
    const handleSave=async()=>{
        const updatedData = {
            name,
            username,
            email,
            phone,
            website,
            address: { street, suite, city, zipcode,geo: { lat, lng } },
            company: { name: companyname, catchPhrase, bs },
        };
        await axios.put(`${API}/${datas.id}`,updatedData)
        await navigate("/");
        
    }

    return (
<section>

<div className="grid grid-cols-3 mt-10 mx-20">
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          className="border p-2 m-2 rounded-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          className="border p-2 m-2 rounded-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          className="border p-2 m-2 rounded-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          name="phone"
          className="border p-2 m-2 rounded-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Website"
          id="website"
          name="website"
          className="border p-2 m-2 rounded-sm"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          id="street"
          name="street"
          className="border p-2 m-2 rounded-sm"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Suite"
          id="suite"
          name="suite"
          className="border p-2 m-2 rounded-sm"
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          name="city"
          className="border p-2 m-2 rounded-sm"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zipcode"
          id="zipcode"
          name="zipcode"
          className="border p-2 m-2 rounded-sm"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lat"
          id="lat"
          name="lat"
          className="border p-2 m-2 rounded-sm"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lng"
          id="lng"
          name="lng"
          className="border p-2 m-2 rounded-sm"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <input
          type="text"
          placeholder="Companyname"
          id="companyname"
          name="companyname"
          className="border p-2 m-2 rounded-sm"
          value={companyname}
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <input
          type="text"
          placeholder="CatchPhrase"
          id="catchPhrase"
          name="catchPhrase"
          className="border p-2 m-2 rounded-sm"
          value={catchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
        />
        <input
          type="text"
          placeholder="Business"
          id="bs"
          name="bs"
          className="border p-2 m-2 rounded-sm"
          value={bs}
          onChange={(e) => setBs(e.target.value)}
        />
        <button className="border m-2 p-2 rounded-md" onClick={handleSave}>
          Save
        </button>
      </div>

    </section>
      )
    }