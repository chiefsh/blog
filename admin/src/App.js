import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import { GlobalStyle } from "./style";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Menu from './pages/menu';
import Group from './pages/group';
import Tags from './pages/tags';
import Home from './pages/home';


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Sider style={{ width: 200, minHeight: "100vh", color: "white" }}>
            <Menu></Menu>
          </Sider>
          <Layout>
            <Header
              style={{ background: "#fff", textAlign: "center", padding: 0 }}
            >
              头部
            </Header>
            <Content style={{ background: "#fff", margin: "10px" }}>
              <Route path='/' exact component={Home}></Route>
              <Route path='/group' exact component={Group}></Route>
              <Route path='/tags' exact component={Tags}></Route>
            </Content>
            <Footer
              style={{
                background: "#fff",
                textAlign: "center"
              }}
            >
              个人博客后台管理系统
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
