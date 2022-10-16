import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing}) {
  
return (
  <main>
      <ul className="cards">
        {listing.map((listings)=>(
          <ListingCard 
            key = {listings.id}
            listing ={listings}    
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
