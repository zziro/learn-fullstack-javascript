import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({ contest: data.contests});
});

export default router;
