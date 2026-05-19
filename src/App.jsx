import { useState, useCallback } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import './App.css';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddSuccess = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  return (
    <div className="App">
      <header style={styles.header}>
        <h1>React Integrasi API</h1>
        <p>Data dari JSONPlaceholder API (dummy backend)</p>
      </header>
      <main>
        <AddUserForm onSuccess={handleAddSuccess} />
        <UserList key={refreshKey} />
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
