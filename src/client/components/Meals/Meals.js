import React, { useCallback, useEffect, useState } from "react"

export default function Meals() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState("")
    const fetchAPI = useCallback(() => {
        return fetch("http://localhost:5000/api/meals")
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
            <h1>Meals</h1>
            <h2>Render the meals to edit</h2>
      {/* When the search is loading, show "loading..." */}
      {loading ? "loading..." : 
        <>
          {/* When the search result is empty (no users), you should show "No results..." */}
          {data.length === 0 ? "No results..." :
            <>
              {data.map(item => {
                  return <><a href={"/meals/" + item.id}>meal {item.id}: {item.title}</a> <br /></>
              })} <br />
                <form>
                    <input />
                    <button>create the meal</button>   
                </form>
            </>
          }
        </>
      }
        </div>
    )
}