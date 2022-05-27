import React, { useCallback, useEffect, useState } from "react"

export default function Home() {
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
            <h1>Home</h1>
            <h2>Render all the meals</h2>
      {/* When the search is loading, show "loading..." */}
      {loading ? "loading..." : 
        <>
          {/* When the search result is empty (no users), you should show "No results..." */}
          {data.length === 0 ? "No results..." :
            <>
              {data.map(item => {
                  return <>{item.id} <br /></>
              })}
            </>
          }
        </>
      }
        </div>
    )
}