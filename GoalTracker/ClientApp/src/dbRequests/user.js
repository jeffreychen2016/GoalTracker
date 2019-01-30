import axios from 'axios';

const addUser = (user) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`/api/user/adduser`,user)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const getUId = (email) => {
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

export default {addUser, getUId}