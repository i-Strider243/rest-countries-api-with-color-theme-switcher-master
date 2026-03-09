import SummaryCard from "./SummaryCard";
import useGlobalContext from "../useGlobalContext";

const SummaryCardList = () => {
  const {countries:{filteredCountry},groupValues} = useGlobalContext();

  return (
    <div className="cards">
      {filteredCountry.map((country) => {
        groupValues.map(groupLeader => {
          groupLeader == country.name ? country.id = groupLeader[0]: country;
        })
        return <SummaryCard key={country.numericCode} country={country} />;
      })}
    </div>
  );
};

export default SummaryCardList;
