import React, { useEffect, useState } from "react"
import Items from "./components/items"
import axios from 'axios'
import "./index.css"



const App = () => {
  const [items, setItem] = useState([])
  const [loding, setLoding] = useState(true)
  const [button, setButton] = useState(0)
  const [count, setCount] = useState()

  const lodeMore = () => {
    setButton(button + 12)
  }


  useEffect(() => {
    const fetchItems = async () => {

      const arr = []

      const result = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${button}&limit=12`)

      setCount(result.data.count)

      for (let i = 0; i < result.data.results.length; i++) {

        let fetch = await axios(result.data.results[i].url)

        arr.push(fetch.data)


      }

      setItem([...items, ...arr])

      setLoding(false)
    }

    fetchItems()

  }, [button])

  return (
    <div>
      <Items items={items} loding={loding} button={lodeMore} lodItems={items} lodCount={count} />
    </div>
  );
}

export default App;
