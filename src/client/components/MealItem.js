import React from "react"
import BorderComponent from "./BorderComponent"

export default function MealItem({ meal }) {
    return (
        
            <BorderComponent color="rgb(254, 166, 92)">
            <h3>
                id: {meal.id} <br />
                title: {meal.title} <br />
                description: {meal.description} <br />
                location: {meal.location} <br />
                when: {meal.when} <br />
                max_reservations: {meal.max_reservations} <br />
                price: {meal.price} <br />
                created_date: {meal.created_date} <br />
            </h3></BorderComponent>
        
    )
}