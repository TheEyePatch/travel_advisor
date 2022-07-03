import React from 'react';

function SearchItems({places, className, searchPlace}){
  return (
    <div className={className}>
      {
        places?.map(place => <button key={place.place_id} value={place.place_id} onClick={searchPlace}>{place.display_name}</button>)
      }
    </div>
  )
}

export default SearchItems;