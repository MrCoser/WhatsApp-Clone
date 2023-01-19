import { lazy, Suspense } from 'react';

//import messanger components
//import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';

import Loader from './components/loader/Loader';

const Messanger=lazy(()=>import(`./components/Messanger`));

function App() {
  const clientId='222517394677-rj1p28aadl3hmsmt24u99g84gutj1sqm.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
<UserProvider>
      <AccountProvider>
        <Suspense fallback={<Loader/>}>
        <Messanger/>
        </Suspense>
      </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
