const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns meals // GET api/meals/?
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things
    let meals = await knex("meals").select("*");
    const maxPrice = request.query.maxPrice
    const availableReservations = request.params.availableReservations
    const title = request.query.title
    const createdAfter = request.query.createdAfter
    const limit = request.query.limit
    if (maxPrice) {
      if (!Number.isInteger(parseInt(maxPrice))) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        meals = meals.filter(meal => parseInt(meal.price) < maxPrice)
      }
    }
    if (availableReservations) {
      meals = meals.filter(meal => meal.max_reservations < 0)
    }
    if (title) {
      meals = meals.filter(meal => meal.title.includes(title))
    }
    if (createdAfter) {
      if (!Date.parse(createdAfter)) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        meals = meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(createdAfter))
      }
    }
    if (limit) {
      if (!Number.isInteger(parseInt(limit))) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        meals = meals.slice(0, limit)
      }
    }
    response.json(meals)
    // Only specific number of meals with a specific max price // api/meals?limit=4&maxPrice=90
    // } else if (limit && maxPrice) {
    //   if (!Number.isInteger(parseInt(limit)) || !Number.isInteger(parseInt(maxPrice))) {
    //     response.statusCode = 400;
    //     response.json({ "message": "bad input" });
    //     return;
    //   } else {
    //     const meal = await knex("meals").select("*").where('price', '<', maxPrice).limit(limit);
    //     response.send(meal)
    //   }
    // // Get meals that has a price smaller than maxPrice // api/meals?maxPrice=90
    // } else if (maxPrice) {
    //   if (!Number.isInteger(parseInt(maxPrice))) {
    //     response.statusCode = 400;
    //     response.json({ "message": "bad input" });
    //     return;
    //   } else {
    //     const meal = await knex("meals").select("*").where('price', '<', maxPrice);
    //     response.json(meal)
    //   }
    //   // Get meals that still has available reservations // api/meals?availableReservations=true
    // } else if (availableReservations) {
    //   const meal = await knex("meals").select("*").where('max_reservations', '>' , '0');
    //   response.json(meal)
    //   // Get meals that partially match a title // api/meals?title=Indian%20platter
    // } else if (title) {
    //   const meal = await knex("meals").select("*").where({ title: title });
    //   response.json(meal)
    // // Get meals that has been created after the date // api/meals?createdAfter=2019-04-05
    // } else if (createdAfter) {
    //   if (!Date.parse(createdAfter)) {
    //     response.statusCode = 400;
    //     response.json({ "message": "bad input" });
    //     return;
    //   } else {
    //     const meal = await knex("meals").select("*").where('created_date', '>', createdAfter);
    //     response.json(meal)
    //   }
    // // Only specific number of meals // api/meals?limit=4
    // } else if (limit) {
    //   if (!Number.isInteger(parseInt(limit))) {
    //     response.statusCode = 400;
    //     response.json({ "message": "bad input" });
    //     return;
    //   } else {
    //     const meal = await knex("meals").select("*").limit(limit);
    //     response.send(meal)
    //   }
    // // Returns all meals // GET api/meals/
    // } else {
    //   response.send(meals);
    // }
  } catch (error) {
    throw error;
  }
});

//Adds a new meal // POST api/meals/
router.post("/", async (request, response) => {
  try {
    const body = request.body;
    if (Object.keys(body).length === 0 || body === {}) {
      response.statusCode = 422;
      response.json({ "message": "bad input" });
      return;
    }
    console.log(body)
    const meal = await knex("meals").insert({
      title: body.title,
      description: body.description,
      location: body.location,
      when: new Date(),
      max_reservations: body.max_reservations,
      price: body.price,
      created_date: new Date()
    });
    response.json(meal)
  } catch (err) {
    throw err;
  }
});

// Returns meal by id // GET api/meals/2
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const meal = await knex("meals").select("*").where({ id: id });
    res.json(meal);
  } catch (err) {
    throw err;
  }
});

// Updates the meal by id // PUT api/meals/2
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const meal = await knex("meals").update({ title: "new title" }).where({ id: id });
    response.json(meal)
  } catch (error) {
    throw error;
  }
});

// Deletes the meal by id	// DELETE api/meals/2
router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const meal = await knex("meals").del().where({ id: id });
    response.json(meal)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
