import { FC, useEffect, useState } from 'react';
import User from "../components/User";
import { AppProps, Users } from './App.types';
// interface AppProps {
//   title:string
// }




const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      const listData = data.results;
      setUsers(listData);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

  }

  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    setUsername(event.target.value)
  }

  return <div>
    <h1>{title}</h1>
    <button onClick={getUsers}>Show Users</button>
    <input type='text' value={username} onChange={handleChange} />
    <div>{username}</div>
    {isLoading && <p>Loading...</p>}
    <ul>
      {users.map(({ login, name, email }) => {
        return <User key={login.uuid} name={name} email={email}/>
      })}
    </ul>
  </div>
};

export default App;