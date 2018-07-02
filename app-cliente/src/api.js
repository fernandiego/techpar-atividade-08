const axios = require("axios");

const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});

const pessoa = {
  list: _ => api.get('/list'),
  save: data =>  api[data.idpessoa ? 'put' : 'post']('/save', data),
  find: idpessoa => api.get('/' + idpessoa),
  del: idpessoa => api.delete(`/${idpessoa}`) 
}

module.exports = { pessoa }