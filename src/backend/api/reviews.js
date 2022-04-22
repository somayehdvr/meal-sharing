const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations // GET api/reservations/
router.get("/", async (request, response) => {
    try {
      // knex syntax for selecting things
        const reviews = await knex("reviews").select("*");
        response.send(reviews);
    } catch (error) {
    throw error;
  ``}
});

// Adds a new reservation // POST api/reservations/
router.post("/", async (request, response) => {
    try {
      const body = request.body;
      if (Object.keys(body).length === 0 || body === {}) {
        response.statusCode = 422;
        response.json({ "message": "bad input" });
        return;
      }
      console.log(body)
      const review = await knex("reviews").insert({
        title: body.title,
        description: body.description,
        meal_id: body.meal_id,
        stars: body.stars,
        created_date: new Date()
      });
      response.json(review)
    } catch (err) {
      throw err;
    }
  });

// Returns reservation by id // GET api/reservations/2
router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const review = await knex("reviews").select("*").where({ id: id });
      res.json(review);
    } catch (err) {
      throw err;
    }
});
  
// Updates the reservation by id // PUT api/reservations/2
router.put("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const review = await knex("reviews").update({ title: "new title" }).where({ id: id });
      response.json(review)
    } catch (error) {
      throw error;
    }
});
  
// Deletes the reservation by id // DELETE api/reservations/2
router.delete("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const review = await knex("reviews").del().where({ id: id });
      response.json(review)
    } catch (error) {
      throw error;
    }
  });

module.exports = router;