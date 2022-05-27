import React, { useCallback, useEffect, useState } from "react"

export default function FetchAPI(API) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState("")
    const fetchAPI = useCallback(() => {
        return fetch(API)
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
        <>
            nothing
        </>
    )
}