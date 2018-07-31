import express from 'express';
import data from '../src/testData.json'; 

const router = express.Router();
let contests = data.contests.reduce((obj, contest)=>{
      obj[contest.id] = contest;
      return obj;
    }, {});

router.get('/contests', (req, res) => {
  res.send({ 
    contests:contests 
   });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  // contest.description = 'This is the test description you would really like to read about.';
  res.send(contest);
});

export default router;