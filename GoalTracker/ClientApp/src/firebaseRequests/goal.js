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

const deleteGoal = () => {
  return new Promise((resolve,reject) => {
    axios
      .delete(`/api/goal/deletegoal`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const addGoal = (goalDetail) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`/api/goal/addgoal`,goalDetail)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {getGoal, deleteGoal, addGoal};