import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './styles.css';

class App extends React.Component {
  render() {
    return <Routes />;
  }
}
export default App;
