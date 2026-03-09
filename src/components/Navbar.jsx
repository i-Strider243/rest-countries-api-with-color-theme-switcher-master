import { Space, Input, Select, Flex, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useGlobalContext from '../useGlobalContext';
import { useState } from 'react';
import { Link } from "react-router-dom";

const DropMenu = () => {
  const {filterCountry} = useGlobalContext();
  const handleChange = value => {
    filterCountry(value)
  };

  const options = [
    { value: "All", label: "All", display: <span className='select-placeholder'>Filter by Region</span>},
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <Select
      defaultValue="All"
      options={options}
      optionLabelProp='display'
      size='large'
      style={{ width: 200, minWidth: 200, border: "none" }}
      onChange={handleChange}
    />
  );
};

const Navbar = () => {
  const {countries:{countryList: initialData},isDarkMode, isDesktop} = useGlobalContext();
  const [searchInput, setSearchInput] = useState("");
  const onSearch = (value) => {
    setSearchInput(value.currentTarget.value);
  }

  const filteredData = initialData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <nav>
      <Flex
        justify="space-between"
        className="nav-container"
        style={{
          position: "relative",
        }}
      >
        <Space.Compact
          size="large"
          style={{
            width: "100%",
          }}
        >
          <Button
            style={{ border: "none" }}
            icon={<SearchOutlined />}
            onClick={() => onSearch(searchInput)}
          />
          <Input
            allowClear
            onChange={onSearch}
            style={{ border: "none" }}
            styles={{
              root: {
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 800,
                minWidth: 200,
                width: isDesktop ? "100%" : "80%",
                maxWidth: 450
              },
            }}
            placeholder="Search for a country..."
          />
        </Space.Compact>
        {searchInput && (
          <ul className={isDarkMode ? "filtered-list dark" : "filtered-list"}>
            {filteredData.map((item) => {
              return (
                <li key={item.numericCode}>
                  <Link
                    to={`/countries/${item.name}`}
                    style={{
                      color: "inherit",
                      padding: "0.5rem 1rem",
                      display: "block",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <DropMenu />
      </Flex>
    </nav>
  );
}

export default Navbar