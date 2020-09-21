import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import ProvidersList from './ProvidersList/ProvidersList'
import Filter from './Filter/Filter'


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <NavBar />
      <Filter />
      <ProvidersList />
    </div>
    )
  }
}
export default App;
