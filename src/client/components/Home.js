import React, { useState } from "react"
import MealItem from "./MealItem"
import FetchAPI from "./FetchAPI"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("")
  return (
    <div>
      <h1>Home</h1>
      <h2>Render all the meals</h2>
      {/* When the data is loading, show "loading..." */}
      {loading ?
        <>
          "loading..."
          <FetchAPI setData={setData} setLoading={setLoading} API={"/api/meals"} />
        </> :
        <>
          {/* When the data result is empty (no meals), show "No results..." */}
          {data.length === 0 ? "No results..." :
            <>
              <ul>
                {data.map(meal => {
                  return <>*meal {meal.id} <MealItem key={meal.id} meal={meal} /> <br /></>
                })}
              </ul>
            </>
          }
        </>
      }
    </div>
  )
}