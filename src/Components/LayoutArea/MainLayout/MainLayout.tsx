import "./MainLayout.css";
import {
  UserAddOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import { useEffect, useState } from "react";
import Routing from "../Routing/Routing";
import { useNavigate } from "react-router-dom";

function MainLayout(): JSX.Element {

  const [selected, setSelected] = useState("1");
  // useEffect(()=>{
  //   const location = window.location.pathname;
  //   console.log(location);
  //   if(location === "/home")
  //   {
  //     setSelected("1")
  //   }                                              check tmrw
  //   if(location === "/register")
  //   {
  //     setSelected("2")
  //   }
  //   if(location === "/login")
  //   {
  //     setSelected("3")
  //   }
  // })
  const navigate = useNavigate();
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  type MenuItem = Required<MenuProps>["items"][number];

  function onMenuSelect(e: any) {
    setSelected(e.key);
    if (e.key === "1") {
        navigate("/home");
    }
    if (e.key === "2") {
        navigate("/register");
    }
    if (e.key === "3") {
        navigate("/login");
    }
  }

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Home", "1", <HomeOutlined />),
    getItem("Register", "2", <UserAddOutlined />),
    getItem("Login", "3", <LoginOutlined />),
  ];

  return (
    <div className="MainLayout">
      <Layout style={{ height: "100%", width: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[selected]}
            items={items}
            onClick={onMenuSelect}
          ></Menu>
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 1000,
                background: colorBgContainer,
              }}
            >
              <Routing />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>All Rights Reserved ©</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
