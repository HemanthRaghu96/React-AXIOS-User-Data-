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
    <section>
      <div className="grid grid-cols-3 mt-10 mx-20">
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          name="phone"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Website"
          id="website"
          name="website"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          id="street"
          name="street"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Suite"
          id="suite"
          name="suite"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setSuite(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          id="city"
          name="city"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zipcode"
          id="zipcode"
          name="zipcode"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setZipcode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lat"
          id="lat"
          name="lat"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lng"
          id="lng"
          name="lng"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setLng(e.target.value)}
        />
        <input
          type="text"
          placeholder="Companyname"
          id="companyname"
          name="companyname"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <input
          type="text"
          placeholder="CatchPhrase"
          id="catchPhrase"
          name="catchPhrase"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setCatchPhrase(e.target.value)}
        />
        <input
          type="text"
          placeholder="Business"
          id="bs"
          name="bs"
          className="border p-2 m-2 rounded-sm"
          onChange={(e) => setBs(e.target.value)}
        />
        <button className="border m-2 p-2 rounded-md" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
}
