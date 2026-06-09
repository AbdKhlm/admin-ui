import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;