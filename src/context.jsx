import { createContext, useEffect, useState } from "react";
import data from "../data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 556px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 556px)");

    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };

    // Attach listener
    mq.addEventListener("change", handleResize);

    // Cleanup on unmount
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [countries, setCountries] = useState({
    countryList: data,
    filteredCountry: data,
  });

  // Function to filter countries by region
  const filterCountry = (region) => {
    const countriesList = countries.countryList;
    const newFilteredCountries = countriesList.filter(
      (country) => country.region == region,
    );

    setCountries({
      ...countries,
      filteredCountry: region === "All" ? countriesList : newFilteredCountries,
    });
  };

  // Function to get border countries' names from their alpha3Code
  const getBorderCountries = (borderCountry) => {
    return countries.filteredCountry
      .find((country) => country.alpha3Code == borderCountry)
  };

  // Compute groups directly from filteredCountry
  const groups = (() => {
    const sorted = countries.filteredCountry
      .map((c) => c.name)
      .sort((a, b) => a.localeCompare(b));

    return sorted.reduce((acc, name) => {
      const letter = name[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(name);
      return acc;
    }, {});
  })();

  const groupValues = [...Object.values(groups).map((group) => group[0])];

  return (
    <AppContext.Provider
      value={{
        isDesktop,
        isDarkMode,
        setIsDarkMode,
        countries,
        filterCountry,
        getBorderCountries,
        groups,
        groupValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
