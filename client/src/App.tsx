import React, { useState, useEffect } from 'react';

type UserProps = {
  id: number,
  username: string
}
const App = () => {
  const [users, setUsers] = useState<UserProps[]>([])
  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(res => setUsers(res))
  }, [])
  return (
    <div className="App">
      Book Library system
      {users.map(user => (<p>{user.username}</p>))}
    </div>
  );
}

export default App;
