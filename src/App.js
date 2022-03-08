// import logo from "./Data/Assets/Logo/logo.svg";
import "./App.css";
import { useModal } from "./Components/Context/ModalContext";
import Landing from "./Components/Pages/Landing/Landing";
import Login from "./Components/UI/Modal/Login";
import Signup from "./Components/UI/Modal/Signup";

function App() {
  const { showLoginModal, showSignupModal } = useModal();
  return (
    <div>
      {showLoginModal && <Login />}
      {showSignupModal && <Signup />}
      <Landing />
    </div>
  );
}

export default App;
