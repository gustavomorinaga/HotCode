import config from '../config';

const URL_EMAILS = `${config.URL_BACKEND}/subscriptions`;

const create = (email) => {
  return fetch(`${URL_EMAILS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(email),
  }).then(async (res) => {
    if (res.ok) {
      const resposta = await res.json();

      return resposta;
    }

    throw new Error('Não foi possível inscrever-se no evento.')
  });
}

const getAll = () => {
  return fetch(`${URL_EMAILS}`).then(async (res) => {
    if (res.ok) {
      const resposta = await res.json();
  
      return resposta;
    }

    throw new Error('Não foi possível carregar os dados.')
  });
}

export default {
  create,
  getAll
};
