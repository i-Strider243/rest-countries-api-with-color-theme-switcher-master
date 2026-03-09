import { Button, Card, Flex, Image, Layout } from "antd";
import { Link, useParams, useNavigate } from "react-router";
import useGlobalContext from "../useGlobalContext";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Meta } = Card;

const DetailsCard = () => {
  const { name } = useParams();
  const navigate = useNavigate()
  const {
    countries: { filteredCountry },
    getBorderCountries,
    isDarkMode,
    isDesktop,
  } = useGlobalContext();
  const curCountry = filteredCountry.find((country) => country.name === name) || null;

  const {
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = curCountry || {};

  let borderCountries = borders && borders.map((country) => getBorderCountries(country));

  return (
    <Layout className="details-page">
      <div className="link__row">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          styles={{
            content: {
              color: isDarkMode ? "#fcfcfc" : "#202c37",
            },
            icon: {
              color: isDarkMode ? "#fcfcfc" : "#202c37",
              hover: {
                color: isDarkMode ? "#fcfcfc" : "#202c37",
              },
            },
          }}
        >
          Back
        </Button>
      </div>
      <Card
        variant="borderless"
        className="details-card"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          display: isDesktop ? "flex" : "block",
          gap: isDesktop ? "6rem" : "1rem",
          alignItems: "center",
        }}
        styles={{
          body: {
            padding: "0px",
            margin: isDesktop ? "3rem 0" : "1rem 0",
          },
        }}
        cover={
          <Image src={flag} alt={`${name} flag`} className="details-card-img" />
        }
      >
        <Meta
          title={<h2 style={{ fontWeight: 600 }}>{name}</h2>}
          description={
            <div className="card-description">
              <div className="card-description__row">
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Native Name:{" "}
                    <span style={{ fontWeight: "300" }}>{nativeName}</span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Population:{" "}
                    <span style={{ fontWeight: "300" }}>{population}</span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Region: <span style={{ fontWeight: "300" }}>{region}</span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Sub Region:{" "}
                    <span style={{ fontWeight: "300" }}>{subregion}</span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Capital:{" "}
                    <span style={{ fontWeight: "300" }}>{capital}</span>
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Top Level Domain:{" "}
                    <span style={{ fontWeight: "300" }}>
                      {topLevelDomain &&
                        topLevelDomain.map((domain) => domain).join(",")}
                    </span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Currencies:{" "}
                    <span style={{ fontWeight: "300" }}>
                      {currencies && currencies.at(0).name}
                    </span>
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Languages:{" "}
                    <span style={{ fontWeight: "300" }}>
                      {languages &&
                        languages.map((language) => language.name).join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <Flex
                  className="border-countries"
                  gap={14}
                  wrap
                  justify="start"
                  align="center"
                >
                  <p style={{ fontWeight: "bold" }}>Border Countries:</p>
                  {borders &&
                    borderCountries.map((country) => (
                      <Link
                        to={`/countries/${country.name}`}
                        key={country.name}
                      >
                        <Button>{country.name}</Button>
                      </Link>
                    ))}
                </Flex>
              </div>
            </div>
          }
        />
      </Card>
    </Layout>
  );
};

export default DetailsCard;
