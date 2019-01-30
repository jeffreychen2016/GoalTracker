import firebase from 'firebase';
import userRequests from '../dbRequests/user';

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
    userRequests
      .getUId(user.email)
      .then((uid) => sessionStorage.setItem('uid',uid));
  });
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

export default {loginUser, logoutUser, registerUser};