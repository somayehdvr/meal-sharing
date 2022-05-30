import React, { useState } from "react"
import MealItem from "./MealItem"
import FetchAPI from "./FetchAPI"
import AddReservation from "./AddReservation"

export default function Meal({ id }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("")
  return (
    <div>
      <h1>Meal</h1>
      <h2>Render the meal</h2>
      {/* When the data is loading, show "loading..." */}
      {loading ?
        <>
          "loading..."
          <FetchAPI setData={setData} setLoading={setLoading} API={"/api/meals/" + id} />
        </>
        :
        <>
          {/* When the fetch result is empty (no meals), show "No results..." */}
          {data.length === 0 ? "No results..." :
            <>
              <ul>
                {data.map(meal => {
                  return <>*meal {meal.id} <MealItem key={meal.id} meal={meal} /> <br /></>
                })}
              </ul>
              { data[0].max_reservations > 0 ? 
                <AddReservation mealId={id} max_reservations={data[0].max_reservations} />
                :
                <> No More Available Reservations!</>
              }
            </>
          }
        </>
      }
    </div>
  )
}