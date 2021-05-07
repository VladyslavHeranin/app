import React, { useState } from "react"
import Item from './item'
import Profile from './profile'
import "../index.css"
import Button from './button.jsx'

const Items = ({ loding, items, button, lodItems , lodCount }) => {
  const [profile, setProfile] = useState()

  const idItem = (id) => {
    setProfile(id)
  }


  return loding ? <p>loding...</p> : <div className="items__block">

    <div className="items__button">
      {items.map(x => { return <Item idItem={idItem} key={x.id} item={x} /> })}

      <Button button={button} lodItems={lodItems} lodCount={lodCount} />
    </div>

    <div className="profile">
      {items.map(x => { if (profile === x.id) { return <Profile profile={x} key={x.id} /> } })}
    </div>

  </div>

}

export default Items;
