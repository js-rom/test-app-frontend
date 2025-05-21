import pkg from '../../package.json';

export const environment = {
  production: true,
  NAME: pkg.name,
  VERSION: pkg.version,
  REST_CORE: 'https://test-app-backend-owlc.onrender.com'
};
