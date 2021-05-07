import React from "react"

const Item = ({ item, idItem }) => {

  const types = item.types.map((z , id) => { return <p className="item__type"  key={id}  >{z.type.name}</p> })

  return (
    <div onClick={() => idItem(item.id)} className="item">
      <div className="img">
        <img src={item.sprites.front_default} alt={item.id} className="img__profile"/>
      </div>
      <div> {item.name}</div>
      <div className="types">{types}</div>
    </div>
  );
}

export default Item;
