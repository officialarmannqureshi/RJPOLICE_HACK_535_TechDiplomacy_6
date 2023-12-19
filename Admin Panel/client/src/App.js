import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CctvList from './components/CctvList'
import OperatorShow from './components/OperatorShow'


function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')} >
            <Resource name="cctvs" list={CctvList} show={OperatorShow} />
            
        </Admin>
  );
}

export default App;
