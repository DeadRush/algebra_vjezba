import { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
  };
};

const Contact = () => {
  const [country, setCountry] = useState<CountryType | undefined>(undefined);

  const getData = async () => {
    await fetch(`https://restcountries.com/v3.1/name/holland`)
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
        <input type="text" />
        <button>Get the flag</button>
      </div>
      <img src={country?.flags.png} alt="" />
    </>
  );
};
export default Contact;
