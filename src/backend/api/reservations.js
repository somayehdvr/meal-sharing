const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations // GET api/reservations/
router.get("/", async (request, response) => {
    try {
      // knex syntax for selecting things
        const reservations = await knex("reservations").select("*");
        response.send(reservations);
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
      const reservation = await knex("reservations").insert({
        number_of_guests: body.number_of_guests,
        meal_id: body.meal_id,
        created_date: new Date(),
        contact_phonenumber: body.contact_phonenumber,
        contact_name: body.contact_name,
        contact_email: body.contact_email
      });
      await knex('meals')
        .where({ id: body.meal_id })
        .decrement({ max_reservations: body.number_of_guests })
      response.json(reservation)
    } catch (err) {
      throw err;
    }
  });

// Returns reservation by id // GET api/reservations/2
router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const reservation = await knex("reservations").select("*").where({ id: id });
      res.json(reservation);
    } catch (err) {
      throw err;
    }
});
  
// Updates the reservation by id // PUT api/reservations/2
router.put("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const reservation = await knex("reservations").update({ contact_name: "new contact_name" }).where({ id: id });
      response.json(reservation)
    } catch (error) {
      throw error;
    }
});
  
// Deletes the reservation by id // DELETE api/reservations/2
router.delete("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const reservation = await knex("reservations").del().where({ id: id });
      response.json(reservation)
    } catch (error) {
      throw error;
    }
  });

module.exports = router;