import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import CctvList from './components/CctvList';
import OperatorShow from './components/OperatorShow';
import MyLoginPage from './components/MyLoginPage';
import authProvider from './components/Authentication/authProvider';
import { Routes, Route } from 'react-router-dom';
import AccessedCameras from './components/AccessedCameras';
function App() {
    return (
        <Admin
            dataProvider={restProvider('http://localhost:3000')}
            authProvider={authProvider} 
            loginPage={MyLoginPage} requireAuth
        >
            <Resource name="cctvs" list={CctvList} show={OperatorShow} />

            <Routes>
                <Route path="/view-cameras" element={<AccessedCameras/>}></Route>
            </Routes>
        </Admin>
    );
}

export default App;
