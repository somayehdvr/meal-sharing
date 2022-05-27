import React from "react"

export default function MealItem({ meal }) {
    return (
        <li>
            <h3>
                id: {meal.id} <br />
                title: {meal.title} <br />
                description: {meal.description} <br />
                location: {meal.location} <br />
                when: {meal.when} <br />
                max_reservations: {meal.max_reservations} <br />
                price: {meal.price} <br />
                created_date: {meal.created_date} <br />
            </h3>
        </li>
    )
}