// src/pages/register/register-model.js
import API from './api';

const RegisterModel = {
  async registerUser({ username, email, password }) {
    const response = await API.register({ username, email, password });

    return response;
  },
};

export default RegisterModel;
