import React, { useCallback, useEffect } from "react"

export default function FetchAPI(props) {
    const fetchAPI = useCallback(() => {
        return fetch(props.API)
            .then(results => results.json())
            .then(data => {
                props.setData(data)
                props.setLoading(false)
            })
            //  When the fetch is failed, show "error fetching (reason why it failed)..." 
            .catch(error => console.error("error fetching " + error))
    }, [])
    useEffect(() => {
        fetchAPI()
    }, [props])
    return (
        <>
        </>
    )
}