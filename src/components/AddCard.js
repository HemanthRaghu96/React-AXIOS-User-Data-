import TextField from "@mui/material/TextField";


export default function AddCard({ data, handlePost }) {
  const {
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
  } = data;
  const handleSubmit = () => {
    handlePost();
  };

  return (
    <section className="mt-5">
    <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">User Info :</p>
      <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
       
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            id="website"
            label="Website"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setWebsite(e.target.value)}
          />
          </div>
          <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">Address :</p>
          <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
          <TextField
            id="street"
            label="Street"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setStreet(e.target.value)}
          />
          <TextField
            id="suite"
            label="Suite"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setSuite(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="zipcode"
            label="Zipcode"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <TextField
            id="lat"
            label="Lat"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setLat(e.target.value)}
          />
          <TextField
            id="lng"
            label="Lng"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setLng(e.target.value)}
          />
          </div>
          <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2">Company Detailes : </p>
          <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
          <TextField
            id="companyname"
            label="Companyname"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setCompanyname(e.target.value)}
          />
          <TextField
            id="catchPhrase"
            label="CatchPhrase"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setCatchPhrase(e.target.value)}
          />
          <TextField
            id="bs"
            label="Business"
            variant="outlined"
            style={{margin:'10px'}}
            onChange={(e) => setBs(e.target.value)}
          />
      </div>
      <div className="flex justify-center">
        <button className="border p-2 rounded-md m-5" onClick={handleSubmit}>
            Submit
          </button>
          </div>
    </section>
  );
}
