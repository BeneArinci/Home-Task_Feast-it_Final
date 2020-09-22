import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SuppliersList from './SuppliersList/SuppliersList';
import Filter from './Filter/Filter';
import Scroll from './Scroll/Scroll';
import LogIn from './LogIn/LogIn';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      suppliers: [],
      route: "home"
    };
  }

  componentDidMount() {
    fetch("https://api-staging.feast-it.com/suppliers/browse/search")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({suppliers: data.results})
    });
  }

  onFilterSelect = (filterby) => {
    fetch(`https://api-staging.feast-it.com/suppliers/browse/search?tier1=${filterby}`)
    .then((response) => {
      return response.json()
    }) 
    .then((data) => {
      this.setState({suppliers: data.results})
    });
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const { suppliers } = this.state;
    return (
    <div className="App">
      { this.state.route === "logIn" 
        ?  <LogIn />
        : <div>
          <NavBar onRouteChange = {this.onRouteChange}/>
            <Filter onRouteChange = {this.onRouteChange} onFilterSelect = {this.onFilterSelect}/>
            <Scroll>
              <SuppliersList onRouteChange = {this.onRouteChange} suppliers = {suppliers}/> 
            </Scroll>
        </div>
     } 
    </div>
    );
  }
}
export default App;
