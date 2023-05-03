import axios from 'axios';
import { environment } from '../environment/environment';
const apiKey = environment.firebaseConfig.apiKey;

export const login = async ({ username: email, password, keepMeSignedIn }) => {
  try {
    const loginURL =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
    console.log('15', email);
    const res = await axios.post(`${loginURL}?key=${apiKey}`, {
      email: 'himanshujain044@gmail.com',
      password: '1234567',
      returnSecureToken: true,
    });

    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
