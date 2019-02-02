import axios from 'axios';

const getGoal = () => {
  return new Promise((resolve,reject) => {
    axios
      .get(`/api/user/getuid/${email}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {loginUser, logoutUser, registerUser};