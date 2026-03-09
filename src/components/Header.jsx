import { Flex, Button, Layout} from "antd";
import useGlobalContext from '../useGlobalContext';
import { Link } from "react-router";
import { MoonOutlined, MoonFilled } from "@ant-design/icons";
const { Header } = Layout;

const headerLayout = {
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}

const headerStyle = {
  textAlign: "center",
};

const btnStyle = {
  fontWeight: 600,
  border: "none",
  boxShadow: "none"
}

const PageHeader = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Layout style={headerLayout}>
    <Header style={headerStyle} className="header">
      <Flex justify="space-between" align="center">
        <Link to={"/"} style={{color: "inherit"}}><h1>Where in the world</h1></Link>
        <Button color="default" variant="text" style={btnStyle} icon={isDarkMode ?<MoonFilled /> : <MoonOutlined />} onClick={toggleTheme}>Dark Mode</Button>
      </Flex>
    </Header>
    </Layout>
  )
}

export default PageHeader
