import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle, Header, BodyWrapper, BodyLeft, BodyRight, Footer } from "./style";
import { GlobalFontStyle } from "./static/iconfont/iconfont";
import store from "./store";
import Home from './pages/home';
import Detail from './pages/detail';
import Menu from "./common/menu";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFontStyle />
      <BrowserRouter>
        <Header />
        <BodyWrapper>
          <BodyLeft>
            <Menu />
          </BodyLeft>
          <BodyRight>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </BodyRight>
        </BodyWrapper>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
