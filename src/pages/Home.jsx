import Navbar from '../components/Navbar'
import SummaryCardList from '../components/SummaryCardList'
import { Layout, FloatButton, Timeline} from 'antd'
import { ArrowUpOutlined } from "@ant-design/icons";
import useGlobalContext from '../useGlobalContext';

const CountryTimelineGrouped = () => {
  const {
    groups,
    isDarkMode,
    isDesktop
  } = useGlobalContext();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  {/* Timeline navigation */}
  return <Timeline
    mode="end"
    color="white"
    style={{ width: isDesktop ? "30px" : "14px", margin: "0px", position: "fixed", top: "100px", right: "0.25rem", zIndex: 100, height: "calc(100vh - 180px)"}}
    className='timeline'
    styles={{
      itemIcon: {
        color: isDarkMode ? "#fcfcfc" : "#000",
        marginRight: "0px",
        marginLeft: "0px"
      }
    }}
    items={Object.keys(groups).map((letter) => ({
      content: (
        <span
          style={{ cursor: "pointer", color: isDarkMode ? "#fcfcfc" : "#000" }}
          onClick={() => scrollToSection(letter)}
        >
          {letter}
        </span>
      ),
    }))}
  />
};

const Home = () => {
  return (
    <Layout className="home-page">
      <CountryTimelineGrouped />
      <Navbar />
      <SummaryCardList />
      <FloatButton.BackTop visibilityHeight={0} icon={<ArrowUpOutlined />} />
    </Layout>
  );
}

export default Home
