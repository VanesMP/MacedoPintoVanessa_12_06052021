const  ManageEndpoints = ( category ) => {
    switch (category) {
      case 'usersInfo':
        return `http://localhost:3000/user/12`
  
      case 'activity':
        return `http://localhost:3000/user/12/activity`
  
      case 'average':
        return `http://localhost:3000/user/12/average-sessions`
  
      case 'performance':
        return `http://localhost:3000/user/12/performance`
  
      default :
        return null
    }
  }
  
  export { ManageEndpoints }