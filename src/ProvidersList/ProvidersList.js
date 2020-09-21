import React from 'react';
import ProviderCard from '../ProviderCard/ProviderCard'

class ProvidersList extends React.Component {
  constructor() {
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


  render ()  {
    return (
      <div className = "flex flex-wrap">
        {

          this.state.providers.map((provider, i) => {
            return (
              <ProviderCard 
                key = {i}
                name = {provider.name}
                shortDescription = {provider.tags[0].name}
                image = {provider.public.images[0].url}
                tags = {provider.dietary}
              />
            )
          })
        }
     </div>
  
    )  
  }
}

export default ProvidersList