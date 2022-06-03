const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns meals // GET api/meals/?
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things
    let meals = await getMeals(request.query);
    function getMeals(query) {
      const meals = knex("meals")
      if ("maxPrice" in query) {
        if (!Number.isInteger(parseInt(query.maxPrice))) {
          response.statusCode = 400;
          response.json({ "message": "bad input" });
          return;
        } else {
          meals.where('price', '<', query.maxPrice)
        }
      }
      if ("availableReservations" in query) {
        meals.where('max_reservations', '>', '0');
      }
      if ("title" in query) {
        meals.where({ title: query.title })
      }
      if ("createdAfter" in query) {
        if (!Date.parse(query.createdAfter)) {
          response.statusCode = 400;
          response.json({ "message": "bad input" });
          return;
        } else {
          meals.where('created_date', '>', query.createdAfter);
        }
      }
      if ("limit" in query) {
        if (!Number.isInteger(parseInt(query.limit))) {
          response.statusCode = 400;
          response.json({ "message": "bad input" });
          return;
        } else {
          meals.limit(query.limit)
        }
      }
      return meals.select()
    }
    response.json(meals)
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
