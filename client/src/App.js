import { lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  const clientID = '321828412939-npsv4vreqm0l3ej6enhgigaj5qjl2o02.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger />
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;