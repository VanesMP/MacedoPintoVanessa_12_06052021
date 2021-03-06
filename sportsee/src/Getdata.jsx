/*import { useState, useEffect } from 'react'
I use it for calls API :
__useEffect  nous permettra de déclencher le fetch;
__useState  permettra de stocker le retour de l'API dans le  state  . 
*/
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**Function to fetch user data
 * @function GetInfos (using hook)
 * @param {string} id (of the user)
 * @returns {object} data
 */
export const GetInfos = (id) => {
  const [infosUser, setInfosUser] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/`)
        .then(response => response.json())
        .then(infosUser => setInfosUser(infosUser));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [id]); 
    return { infosUser:infosUser }
}

/**Function to fetch user session data
 * @function Getsession (using hook)
 * @param {string} id (of the user)
 * @returns {object} data
 */
export const GetSession = (id) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/average-sessions/`)
        .then(response => response.json())
        .then(session => setSession(session));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [id]); 
    return { session:session }
}

/**Function to fetch user activity data
 * @function GetActivity (using hook)
 * @param {string} id (of the user)
 * @returns {object} data
 */
export const GetActivity = (id) => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/activity/`)
        .then(response => response.json())
        .then(activity => setActivity(activity));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [id]); 
    return { activity:activity }
}

/**Function to fetch user performace data
 * @function GetPerformance (using hook)
 * @param {string} id (of the user)
 * @returns {object} data
 */
export const GetPerformance = (id) => {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/user/${id}/performance/`)
        .then(response => response.json())
        .then(performance => setPerformance(performance));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [id]); 
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