import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import ProvidersList from './ProvidersList/ProvidersList'


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <NavBar />
      <ProvidersList />
    </div>
    )
  }
}
export default App;
