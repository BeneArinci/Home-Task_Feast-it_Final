import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import ProvidersList from './ProvidersList/ProvidersList'
import Filter from './Filter/Filter'
import Scroll from './Scroll/Scroll'
import LogIn from './LogIn/LogIn'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      providers: [],
      route: "home"
    }
  }

  componentDidMount() {
    fetch("https://api-staging.feast-it.com/suppliers/browse/search")
    .then((response) => {
      return response.json()
    }) 
    .then((data) => {
      this.setState({providers: data.results})
    })
    .then(() => console.log(this.state.providers[0].dietary))
  }

  onFilterSelect = (filterby) => {
    fetch(`https://api-staging.feast-it.com/suppliers/browse/search?tier1=${filterby}`)
    .then((response) => {
      return response.json()
    }) 
    .then((data) => {
      this.setState({providers: data.results})
    })
  }

  onRouteChange = (route) => {
    this.setState({route: route})
    console.log(this.state.route)
  }

  render() {
    return (
    <div className="App">
      { this.state.route === "logIn" 
        ?  <LogIn />
        : <div>
          <NavBar onRouteChange = {this.onRouteChange}/>
            <Filter onRouteChange = {this.onRouteChange} onFilterSelect = {this.onFilterSelect}/>
            <Scroll>
              <ProvidersList onRouteChange = {this.onRouteChange} providers = {this.state.providers}/> 
            </Scroll>
        </div>
     } 
    </div>
    )
  }
}
export default App;
