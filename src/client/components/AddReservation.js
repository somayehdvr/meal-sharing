import React, { useState } from "react"

export default function AddReservation(props) {
    const [number_of_guests, setNumber_of_guests] = useState(1)
    const [contact_phonenumber, setContact_phonenumber] = useState("")
    const [contact_name, setContact_name] = useState("")
    const [contact_email, setContact_email] = useState("")
    const handleNumber_of_guests = (event) => {
        setNumber_of_guests(event.target.value)
    }
    const handleContact_phonenumber = (event) => {
        setContact_phonenumber(event.target.value)
    }
    const handleContact_name = (event) => {
        setContact_name(event.target.value)
    }
    const handleContact_email = (event) => {
        setContact_email(event.target.value)
    }
    return (
        <>
            <form action="http://localhost:5000/api/reservations/" method="POST" target="_blank">
                <header>Create Reservation</header><br />
                <label for="meal-id">meal_id: </label>
                <input name="meal_id" id="meal_id" value={props.mealId} placeholder="meal_id"></input><br />
                <label for="number_of_guests">number_of_guests: </label>
                <input name="number_of_guests" id="number_of_guests" value={number_of_guests} onChange={handleNumber_of_guests} placeholder="number_of_guests"></input><br />
                <label for="contact_phonenumber">contact_phonenumber: </label>
                <input name="contact_phonenumber" id="contact_phonenumber" value={contact_phonenumber} onChange={handleContact_phonenumber} placeholder="contact_phonenumber"></input><br />
                <label for="contact_name">contact_name: </label>
                <input name="contact_name" id="contact_name" value={contact_name} onChange={handleContact_name} placeholder="contact_name"></input><br />
                <label for="contact_email">contact_email: </label>
                <input name="contact_email" id="contact_email" type="email" value={contact_email} onChange={handleContact_email} placeholder="contact_email"></input><br /><br />
                <button type="submit">Book seat</button>
            </form>
        </>
    )
}