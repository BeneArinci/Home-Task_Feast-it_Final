import React from 'react';
import SupplierCard from '../SupplierCard/SupplierCard';

const SuppliersList = ({suppliers, onRouteChange}) =>{

    return (
      <div className = "flex flex-wrap">
        {
          suppliers.map((supplier, i) => {
            return (
              <SupplierCard 
                key = {i}
                name = {supplier.name}
                shortDescription = {supplier.tags[0].name}
                image = {supplier.public.images[0].url}
                tags = {supplier.dietary}
                onRouteChange = {onRouteChange}
              />
            )
          })
        }
     </div>
    );
}

export default SuppliersList;