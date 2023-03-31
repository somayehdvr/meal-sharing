import React, { useState } from "react"

export default function AddMeal() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [max_reservations, setMax_reservations] = useState()
    const [price, setPrice] = useState()
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleLocation = (event) => {
        setLocation(event.target.value)
    }
    const handleMax_reservations = (event) => {
        setMax_reservations(event.target.value)
    }
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    return (
        <>
            <form className="AddComponents" action="/api/meals/" method="POST" target="_blank">
                <header><h3>Create Meal</h3></header><br />
                <label for="title">title: </label>
                <input name="title" id="title" value={title} onChange={handleTitle} placeholder="title" required></input><br />
                <label for="description">description: </label>
                <input name="description" id="description" value={description} onChange={handleDescription} placeholder="description"></input><br />
                <label for="location">location: </label>
                <input name="location" id="location" value={location} onChange={handleLocation} placeholder="location" required></input><br />
                <label for="max_reservations">max_reservations: </label>
                <input name="max_reservations" id="max_reservations" type="number" value={max_reservations} onChange={handleMax_reservations} placeholder="max_reservations" required></input><br />
                <label for="price">price: </label>
                <input name="price" id="price" value={price} onChange={handlePrice} placeholder="price" required></input><br /><br />
                <button type="submit">Add Meal</button>
            </form>
        </>
    )
}