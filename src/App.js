import './App.css';
import Card from './components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScrollToTopButton from './components/scrollBackTop'


function App() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(10);

  const loadMoreUsers = () => {
    if (userCount < 5000) {
      setUserCount(userCount + 10);
    }
  };

  const handleDelete = (userId) => {
    const updateUser = users.filter((user) => user.login.uuid !== userId);
    setUsers(updateUser); 
  }

  useEffect(() => {
    async function fetchRandomUser() {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${userCount}`)
        console.log(response.data.results);
        setUsers(response.data.results)
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    fetchRandomUser()
  }, [userCount]);

  return (
    <div className='App'>
      <h1>Random User Cards - Netatmo</h1>
      <div className="user-cards">
        {users.length > 0 ? (
          users.map((user) => (
            <Card key={user.login.uuid} user={user} onDelete={handleDelete}/>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='button-container'>
        <button className='loadMore-button' onClick={loadMoreUsers}>Load More Users</button>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
