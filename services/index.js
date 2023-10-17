const axios = require('axios').default;
const { branches } = require('../config');
const Promise = require('bluebird');

const findDates = (results) => {
  return results.map(request => {
    const idBranch = request._settledValueField.config?.params.planta_id;
    const branch = branches.find(branch => branch.id === idBranch);
    const results = request._settledValueField.data.results || [];

    if (results && results.length != 0) {
      const dates = results;

      return { name: branch?.name, dates };
    }
    return { name: branch?.name || 'null', dates: []};
  })
};
  
const check = async (domain) => {
  console.log(':::::::::: 🚗 🚕 🚙 Consultando por:', domain);
  const session = await axios.get('https://vtvpba.minfra.gba.gob.ar/SolicitudTurno');
  const cookieVtv = session.headers['set-cookie'][0].split(';')[0]; 
  const url = 'https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json';
  let nextCookie = cookieVtv;

  // const requests = branches.map((branch) => {
  //   const response = axios.get(url, {
  //     params: {
  //       planta_id: branch.id,
  //       dominio: domain
  //     },
  //     headers: {
  //       Cookie: nextCookie,
  //       "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  //     }
  //   });

  //   nextCookie = session.headers['set-cookie'][0].split(';')[0];

  //   return response;
  // });
  const requests = Promise.map(branches, (branch) => {
    const response = axios.get(url, {
      params: {
        planta_id: branch.id,
        dominio: domain
      },
      headers: {
        Cookie: nextCookie,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      }
    }).catch((error) => {
      return { 
        error: true,
        config: error.config
      };
    }).then((response) => {
      if (response.error) {
        return {
          config: response.config,
          data: {
            results: [],
          }
        };
      }
      
      nextCookie = response.headers['set-cookie'];
      return response;
    });

    return response;
  }, { concurrency: 3 });

  const results = await Promise.allSettled(requests);

  return results;
};

module.exports = {
  check,
  findDates
};