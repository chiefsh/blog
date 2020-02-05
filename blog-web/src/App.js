import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { 
  GlobalStyle, 
  Header,
  BodyWrapper,
  BodyLeft,
  BodyRight
} from './style';
import { GlobalFontStyle } from './static/iconfont/iconfont';
import Menu from './common/menu';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
      <GlobalStyle />
      <GlobalFontStyle />
      <Header />
      <BodyWrapper>
        <BodyLeft>
          <Menu />
        </BodyLeft>
        <BodyRight>

        </BodyRight>
      </BodyWrapper>
    </div>
    </Provider>
  );
}

export default App;
