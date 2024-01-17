import { Admin, Resource } from 'react-admin';
import MyLoginPage from './components/MyLoginPage';
import OperatorShow from './components/OperatorShow';
import { CctvList } from './cctvs';

export const AdminPage = () => (
    <Admin basename="/admin"  dataProvider={restProvider('http://localhost:3001')} authProvider={authProvider}
    loginPage={MyLoginPage}
    requireAuth
    >
        <Resource name="cctvs" list={CctvList} show={OperatorShow}/>
    </Admin>
);