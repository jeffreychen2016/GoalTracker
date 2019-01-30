import axios from 'axios';

const addUser = (user) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`/api/user/adduser`,user)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {addUser}