/*import { useState, useEffect } from 'react'
nous allons les utiliser pour faire des calls API :
__useEffect  nous permettra de déclencher le fetch;
__useState  permettra de stocker le retour de l'API dans le  state  . 
*/

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GetInfos = (id) => {
  const [infosUser, setInfosUser] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/`)
        .then(response => response.json())
        .then(infosUser => setInfosUser(infosUser));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({infosUser})
return { infosUser:infosUser }
}

export const GetSession = (id) => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/average-sessions/`)
        .then(response => response.json())
        .then(session => setSession(session));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({session})
return { session:session }
}

export const GetActivity = (id) => {
const [activity, setActivity] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/activity/`)
        .then(response => response.json())
        .then(activity => setActivity(activity));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({activity})
return { activity:activity }
}

export const GetPerformance = (id) => {
const [performance, setPerformance] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/performance/`)
        .then(response => response.json())
        .then(performance => setPerformance(performance));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [id]); 
console.log({performance})
return { performance:performance }
}

GetInfos.propTypes={
  id: PropTypes.string.isRequired,
  infosUser: PropTypes.object.isRequired
}
GetSession.propTypes={
  id: PropTypes.string.isRequired,
  session: PropTypes.object.isRequired
}
GetActivity.propTypes={
  id: PropTypes.string.isRequired,
  activity: PropTypes.object.isRequired
}
GetPerformance.propTypes={
  id: PropTypes.string.isRequired,
  performance: PropTypes.object.isRequired
}