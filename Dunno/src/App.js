import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.fragment>
  );
}

export default App;
