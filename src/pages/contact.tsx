import { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
  };
  capital: string;
};

const Contact = () => {
  const [country, setCountry] = useState<CountryType | undefined>(undefined);
  const [value, setValue] = useState("");

  const getData = async () => {
    await fetch(
      `https://restcountries.com/v3.1/name/${value ? value : "croatia"}`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: CountryType[]) => {
        setCountry(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => getData()}>Get the flag</button>
      </div>
      <img src={country?.flags.png} alt="" />
      <h2>Capital: {country?.capital}</h2>
    </>
  );
};
export default Contact;
