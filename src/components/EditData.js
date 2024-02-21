import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './api';
import axios from 'axios';
import { Box, TextField } from '@mui/material';

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
<section className="mt-5">
  <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">User Info :</p>
  <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
    <TextField
      id="name"
      label="Name"
      variant="outlined"
      style={{ margin: '10px' }}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <TextField
      id="username"
      label="Username"
      variant="outlined"
      style={{ margin: '10px' }}
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <TextField
      id="email"
      label="Email"
      variant="outlined"
      style={{ margin: '10px' }}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
      id="phone"
      label="Phone"
      variant="outlined"
      style={{ margin: '10px' }}
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <TextField
      id="website"
      label="Website"
      variant="outlined"
      style={{ margin: '10px' }}
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
    />
  </div>
  <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">Address :</p>
  <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
    <TextField
      id="street"
      label="Street"
      variant="outlined"
      style={{ margin: '10px' }}
      value={street}
      onChange={(e) => setStreet(e.target.value)}
    />
    <TextField
      id="suite"
      label="Suite"
      variant="outlined"
      style={{ margin: '10px' }}
      value={suite}
      onChange={(e) => setSuite(e.target.value)}
    />
    <TextField
      id="city"
      label="City"
      variant="outlined"
      style={{ margin: '10px' }}
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <TextField
      id="zipcode"
      label="Zipcode"
      variant="outlined"
      style={{ margin: '10px' }}
      value={zipcode}
      onChange={(e) => setZipcode(e.target.value)}
    />
    <TextField
      id="lat"
      label="Lat"
      variant="outlined"
      style={{ margin: '10px' }}
      value={lat}
      onChange={(e) => setLat(e.target.value)}
    />
    <TextField
      id="lng"
      label="Lng"
      variant="outlined"
      style={{ margin: '10px' }}
      value={lng}
      onChange={(e) => setLng(e.target.value)}
    />
  </div>
  <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">Company Detailes :</p>
  <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
    <TextField
      id="companyname"
      label="Companyname"
      variant="outlined"
      style={{ margin: '10px' }}
      value={companyname}
      onChange={(e) => setCompanyname(e.target.value)}
    />
    <TextField
      id="catchPhrase"
      label="CatchPhrase"
      variant="outlined"
      style={{ margin: '10px' }}
      value={catchPhrase}
      onChange={(e) => setCatchPhrase(e.target.value)}
    />
    <TextField
      id="bs"
      label="Business"
      variant="outlined"
      style={{ margin: '10px' }}
      value={bs}
      onChange={(e) => setBs(e.target.value)}
    />
  </div>
  <div className="flex justify-center">
    <button className="border p-2 rounded-md m-5" onClick={handleSave}>
      Save
    </button>
  </div>
</section>

      )
    }