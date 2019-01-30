import axios from 'axios';

const addUser = () => {
  return new Promise((resolve,reject) => {
    axios
      .post(`/api/user/adduser`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {addUser}