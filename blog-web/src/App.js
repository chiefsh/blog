import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle, Header, BodyWrapper, BodyLeft, BodyRight, Footer } from "./style";
import { GlobalFontStyle } from "./static/iconfont/iconfont";
import store from "./store";
import Home from './pages/home';
import Detail from './pages/detail';
import Group from './pages/group';
import Tags from './pages/tags';
import GroupDetail from './pages/groupDetail';
import TagsDetail from './pages/tagsDetail';
import Search from './pages/search';
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
            <Route path='/group' exact component={Group}></Route>
            <Route path='/tags' exact component={Tags}></Route>
            <Route path='/groupDetail/:id' exact component={GroupDetail}></Route>
            <Route path='/tagsDetail/:id' exact component={TagsDetail}></Route>
            <Route path='/search' exact component={Search}></Route>
          </BodyRight>
        </BodyWrapper>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
