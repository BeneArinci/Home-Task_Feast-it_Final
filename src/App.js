import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import ProvidersList from './ProvidersList/ProvidersList'
import Filter from './Filter/Filter'
import Scroll from './Scroll/Scroll'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      providers: []
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

  render() {
    return (
    <div className="App">
      <NavBar />
      <Filter onFilterSelect = {this.onFilterSelect}/>
      <Scroll>
        <ProvidersList providers = {this.state.providers}/> 
      </Scroll>
      
      
    </div>
    )
  }
}
export default App;
