import React, { useCallback, useEffect, useState } from "react"
import MealItem from "./home/MealItem"

export default function Meal({id}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState("")
    const fetchAPI = useCallback(() => {
        return fetch("http://localhost:5000/api/meals/"+id)
            .then(results => results.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            //  When the search is failed, you should show "error fetching (reason why it failed)..." 
            .catch(error => console.error("error fetching " + error))
    }, [])
    useEffect(() => {
        fetchAPI()
    }, [fetchAPI])
    return (
        <div>
            <h1>Meal</h1>
            <h2>Render the meal</h2>
      {/* When the search is loading, show "loading..." */}
      {loading ? "loading..." : 
        <>
          {/* When the search result is empty (no users), you should show "No results..." */}
          {data.length === 0 ? "No results..." :
              <>
                <ul>
              {data.map(meal => {
                return <>*meal {meal.id} <MealItem key={meal.id} meal={meal}/> <br /></>
              })}
                  </ul>
            </>
          }
        </>
      }
        </div>
    )
}