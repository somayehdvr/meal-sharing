import React, { useState } from "react"
import AddMeal from "./AddMeal"
import FetchAPI from "./FetchAPI"
import BorderComponent from "./BorderComponent"

export default function Meals() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("")
  return (
    <div>
      <h1>Meals</h1>
      <h2>Render the meals to edit</h2>
      {/* When the data is loading, show "loading..." */}
      {loading ?
        <>
          "loading..."
          <FetchAPI setData={setData} setLoading={setLoading} API={"/api/meals"} />
        </> :
        <>
          {/* When the fetch result is empty (no meals), show "No results..." */}
          {data.length === 0 ? "No results..." :
            <>
              <div id="content">
              {data.map(item => {
                return <><BorderComponent color="rgb(254, 166, 92)"><a href={"/meals/" + item.id}>meal: {item.title}</a></BorderComponent></>
              })}
              </div>
              <AddMeal /><br/>
            </>
          }
        </>
      }
    </div>
  )
}
