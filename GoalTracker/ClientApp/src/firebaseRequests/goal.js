import axios from 'axios';

const getGoal = () => {
  return new Promise((resolve,reject) => {
    axios
      .get(`/api/goal/getgoal`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {getGoal};