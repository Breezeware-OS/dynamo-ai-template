import './App.css';
import React, {useEffect, useState,useRef} from 'react';
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import axios from 'axios';
import ReactGA from 'react-ga4';
import AppRouter from './routes/AppRouter';
import keycloakJS from './Keycloak';


const TRACKING_ID = 'G-3PGC5XGPZR'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [user, setUser] = useState();




  const isRun = useRef(false);

  const initialAuth = async () => {
    try {
      const authenticated = await keycloakJS.init({onLoad: 'login-required'});
      console.log(
        `User is ${authenticated ? 'authenticated' : 'not authenticated'}`,
      );
      if (authenticated) {
        const token = keycloakJS.token;
        axios.interceptors.request.use(
          (axios.defaults.headers = {
            Authorization: 'Bearer ' + token,
          }),
        );
        const profile = await keycloakJS.loadUserProfile();
        console.log(profile, 'profile');
        setUser(profile);
      } else {
        signOut();
      }
    } catch (error) {
      console.log('Failed to initialize adapter:', error);
    }
  };


  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    initialAuth();
  }, []);

  const signOut = () => {
    keycloakJS.logout({redirectUri: 'http://localhost:3000/'});
  };

  return (
    user && (
    <AppRouter user={user} signOut={signOut} />
  ) )
}

export default App;