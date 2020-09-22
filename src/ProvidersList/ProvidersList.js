import React from 'react';
import ProviderCard from '../ProviderCard/ProviderCard'

const ProvidersList = ({providers, onRouteChange}) =>{

    return (
      <div className = "flex flex-wrap">
        {
          providers.map((provider, i) => {
            return (
              <ProviderCard 
                key = {i}
                name = {provider.name}
                shortDescription = {provider.tags[0].name}
                image = {provider.public.images[0].url}
                tags = {provider.dietary}
                onRouteChange = {onRouteChange}
              />
            )
          })
        }
     </div>
  
    )  
  
}

export default ProvidersList