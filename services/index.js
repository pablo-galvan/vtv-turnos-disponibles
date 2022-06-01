const axios = require('axios').default;
const { branches } = require('../config');

const findDates = (results) => {
  return results.map(request => {
    const idBranch = request.value.config.params.planta_id;
    const branch = branches.find(branch => branch.id === idBranch);

    if (request.value.data.results.length != 0) {
      const dates = request.value.data.results;

      return { name: branch.name, dates };
    }
    return { name: branch.name, dates: []};
  })
};
  
const check = async (domain) => {
  console.log(':::::::::: 🚗 🚕 🚙 Consultando por:', domain);
  const session = await axios.get('https://vtvpba.minfra.gba.gob.ar/SolicitudTurno');
  const cookieVtv = session.headers['set-cookie'][0].split(';')[0]; 
  const url = 'https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json';

  const requests = branches.map((branch) => {
    return axios.get(url, {
      params: {
        planta_id: branch.id,
        dominio: domain
      },
      headers: {
        Cookie: cookieVtv
      }
    });
  });

  const results = await Promise.allSettled(requests);

  return results;
};

module.exports = {
  check,
  findDates
};