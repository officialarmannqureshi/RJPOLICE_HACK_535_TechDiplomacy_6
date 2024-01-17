import { Admin, Resource,ListGuesser } from 'react-admin';
import MyLoginPage from './components/MyLoginPage';


export const HomePage = () => (
    <Admin basename="/"  dataProvider={restProvider('http://localhost:3001')} authProvider={authProvider}
    loginPage={MyLoginPage}
    requireAuth
    >
        <Resource name="users" list={ListGuesser} />
    </Admin>
);