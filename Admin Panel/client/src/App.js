//System for Geo-Tagging of privately owned cameras
import React from 'react';
import { Admin, Resource, ListGuesser } from "react-admin";
import restProvider from 'ra-data-simple-rest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CctvList } from './cctvs';
import OperatorShow from './components/OperatorShow';
import MyLoginPage from './components/MyLoginPage';
import authProvider from './components/Authentication/authProvider';
import CameraDetail from './components/CameraDetail';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter basename='/admin'>
      <Admin
        dataProvider={restProvider('http://localhost:3001')}
        authProvider={authProvider}
        loginPage={MyLoginPage}
        requireAuth
      >
     
        <Resource name="cctvs" list={CctvList} show={OperatorShow}>
            <Route path=':cctvId/show/view-analyze' element={<CameraDetail/>}>

            </Route>
        </Resource>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </BrowserRouter>
  );
}

export default App;
