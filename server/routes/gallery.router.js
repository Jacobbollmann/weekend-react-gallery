const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const updateItem = parseInt(req.params.id);
  const addOne = +1;
  console.log('Updating item:', updateItem);
  const dbQuery = 'UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;';

  pool
    .query(dbQuery, [addOne, updateItem])
    .then((result) => {
      res.send('Item updated:').status(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "gallery" ORDER BY "id" ASC;';

  pool
    .query(dbQuery)
    .then((result) => {
      console.log('Getting gallery data:');
      res.send(result.rows).status(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
