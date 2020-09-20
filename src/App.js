import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import ProviderCard from './ProviderCard/ProviderCard'

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <NavBar />
      <ProviderCard />
    </div>
    )
  }
}
export default App;
