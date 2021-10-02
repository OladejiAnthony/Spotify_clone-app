import React, {useEffect, useState} from 'react';
import './App.css'
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';
                                
const spotify = new  SpotifyWebApi();         //it helps us to communicate back and forth with spotify.

function App() {

  //const [token, setToken] = useState(null);  --- useState is the basic way of handling or writing variables in react.
                                              // it is like a short term memory store, when you refresh you lose your data.

  const [{user, token}, dispatch] = useDataLayerValue();                                            

  useEffect(() => {                           //useEffect runs code i.e function, based on a given condition.  
    const hash = getTokenFromUrl();           //it helps us run a piece of code when the component load or a parameter changes.
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('3iMPMq4spiipSdBetwYwyt').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      })
    }
 }, []);

  return (
    <div className='app'>  
      { token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;






//Spotify Client ID- c6da302b71dd48119775441d3468c8a8

//3hrs,51mins
