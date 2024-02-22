import TextField from "@mui/material/TextField";

// This component receives data and a function to handle form submission
export default function AddCard({ data, handlePost }) {
  // Destructuring the data object to get individual setter functions
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

  // Function to handle form submission
  const handleSubmit = () => {
    handlePost();
  };

  return (
    <section className="mt-5">
      {/* Section for user information */}
      <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2 font-poppins">
        User Info :
      </p>
      <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text fields for user information */}
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="website"
          label="Website"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      
      {/* Section for address information */}
      <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2 font-poppins">
        Address :
      </p>
      <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text fields for address information */}
        <TextField
          id="street"
          label="Street"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextField
          id="suite"
          label="Suite"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setSuite(e.target.value)}
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="zipcode"
          label="Zipcode"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <TextField
          id="lat"
          label="Lat"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setLat(e.target.value)}
        />
        <TextField
          id="lng"
          label="Lng"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setLng(e.target.value)}
        />
      </div>
      
      {/* Section for company details */}
      <p className="w-8/12 mx-auto px-4 font-bold text-lg py-2 font-poppins">
        Company Details :
      </p>
      <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text fields for company details */}
        <TextField
          id="companyname"
          label="Companyname"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <TextField
          id="catchPhrase"
          label="CatchPhrase"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setCatchPhrase(e.target.value)}
        />
        <TextField
          id="bs"
          label="Business"
          variant="outlined"
          style={{ margin: "10px" }}
          onChange={(e) => setBs(e.target.value)}
        />
      </div>
      
      {/* Submit button */}
      <div className="flex justify-center">
        <button
          className="border p-2 rounded-md m-5 font-poppins"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
