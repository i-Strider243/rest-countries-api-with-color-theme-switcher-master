import Home from './pages/Home';
import DetailsCard from './components/DetailsCard';
import { Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd'
import useGlobalContext from './useGlobalContext.jsx'
import PageHeader from './components/Header.jsx';


function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const {isDarkMode,isDesktop} = useGlobalContext();

	return (
    <>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            fontFamily: "Nunito Sans, sans-serif",
            borderRadius: 4,
            colorText: isDarkMode ? "#fcfcfc" : "#202c37",
            colorTextBase: isDarkMode ? "#fcfcfc" : "#202c37",
            colorTextSecondary: isDarkMode ? "#fcfcfc" : "#202c37",
            colorTextDescription: isDarkMode ? "#fcfcfc" : "#202c37",
            colorBgContainer: isDarkMode ? "#2B3945" : "#fff",
            selectBorderColor: isDarkMode ? "#2B3945" : "#fff",
            buttonDefaultBorderColor: "transparent",
            lineWidth: 0,
          },
          components: {
            Layout: {
              headerBg: isDarkMode ? "#2B3945" : "#fff",
              bodyBg: isDarkMode ? "#202C37" : "#fcfcfc",
              headerColor : isDarkMode ? "#fff" : "#202C37",
              headerPadding: isDesktop ? "22px 4rem" : "22px 1rem",
              headerHeight: undefined,
            },
            Select: {
              optionSelectedBg: isDarkMode ? "#202c37" : "#808080",
              optionFontSize: 14,
              colorBgElevated: isDarkMode ? "#2B3945" : "#FFFFFF"
            },
            Button: {
              defaultHoverColor: isDarkMode ? "#fcfcfc" : "#202c37",
              defaultActiveColor: isDarkMode ? "#fcfcfc" : "#202c37",
            }
          }
        }}
      >
        <PageHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/countries/:name" element={<DetailsCard />}></Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App
