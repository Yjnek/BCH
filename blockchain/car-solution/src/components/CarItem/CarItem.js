import React from "react";
 
const CarItem = (id, owner) => {
    return (
        <div>
            immatriculation:
            {id}
            appartient à:
            {owner}
            A vendre.
            <button/>
        </div>
    );
};
 
export default CarItem;
