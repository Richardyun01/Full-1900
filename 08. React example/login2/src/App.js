import React from 'react';
import {Route, Routes} from 'react-router';
import './App.css';
import Login from './component/js/Login';
import About from './component/js/screen/About';
import Posts from './component/js/screen/Posts';
import Mypage from './component/js/screen/Mypage';
import Search from './component/js/screen/Search';
import LayoutScreen from './component/js/LayoutScreen';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" component={Login}/>
          <Route path="/main" component={LayoutScreen}/>
          <Route path="/about" component={About}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/mypage" component={Mypage}/>
          <Route path="/search" component={Search}/>
        </Routes>
      </div>
    );
  }
}

export default App;
