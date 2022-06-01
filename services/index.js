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
  const cookieVtv = "_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D"; 
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