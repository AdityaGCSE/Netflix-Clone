import './App.css';
import LoginButton from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
