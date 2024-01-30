const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const updateItem = parseInt(req.params.id);
  const addOne = 1;
  console.log('Updating item:', updateItem);
  const dbQuery =
    'UPDATE "gallery" SET "likes" = "likes" + $1 WHERE "id" = $2;';

  pool
    .query(dbQuery, [addOne, updateItem])
    .then((result) => {
      res.send('Item updated:').status(200);
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
      res.send(result.rows).status(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

//POST /gallery
router.post('/', (req, res) => {
  const newItem = req.body;
  const queryArgs = [newItem.url, newItem.title, newItem.description];
  const dbQuery = `
    INSERT INTO "gallery" ("url", "title", "description")
    VALUES ($1, $2, $3);`;

  pool
    .query(dbQuery, queryArgs)
    .then((result) => {
      res.send('Item added').status(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
      alert('Something Wrong in post');
    });
});

module.exports = router;
