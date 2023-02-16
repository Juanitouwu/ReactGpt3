import React from 'react';
import { Route } from 'react-router-dom';

import login from './login';


const Routes = () => (
  <a>
    iniciar sesion
    <Route exact path="../../public/login" component={login} />
    </a>
);

export default Routes;
