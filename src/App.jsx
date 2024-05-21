import * as React from "react";
import { Link, useRoutes } from 'react-router-dom';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Analysis from './pages/Analysis'
import Volumn from './pages/Volumn'
import VolumnIndex from './pages/Volumn/VolumnIndex'

import routes from './consts/routes'

import { 
  AuthProvider,
  RequireAuth,
} from './utils/auth'

function App() {
  let router = [
    {
      path: "/login",
      element: <Login />,
    }, {
      path: "/dashboard",
      element: (<RequireAuth>
          <Dashboard />
        </RequireAuth>),
      children: [
        { index: true, element: <Home /> },
        {
          path: routes.analysis,
          element: <Analysis />,
        }, {
          path: routes.volumn,
          element: <Volumn />,
          children: [
            { index: true, element: <VolumnIndex /> },
          ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
    { path: "*", element: <NoMatch /> },
  ];

  let element = useRoutes(router);

  return (
    <AuthProvider>
       {element}
    </AuthProvider>
  );
}

export default App;

const NoMatch = () => {
  return (
    <div>
      <h2>Develop in progress...</h2>
      <p>
        <Link to="/dashboard">Go to the home page</Link>
      </p>
    </div>
  );
}