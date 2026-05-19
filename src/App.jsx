import { useState } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import './App.css';

function App() {
  const [localUsers, setLocalUsers] = useState([]);

  const handleAddSuccess = (newUser) => {
    setLocalUsers(prev => [newUser, ...prev]);
  };

  return (
    <div className="App">
      <header style={styles.header}>
        <h1>React Integrasi API</h1>
        <p>Data dari JSONPlaceholder API (dummy backend)</p>
      </header>
      <main>
        <AddUserForm onSuccess={handleAddSuccess} />
        <UserList localUsers={localUsers} />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
  },
};

export default App;
