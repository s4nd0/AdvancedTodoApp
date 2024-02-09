import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Tasks from "./pages/Tasks";

// hooks
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  );

  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <BrowserRouter scrollRestoration="auto">
          <div
            className={`m-0 p-0 flex flex-col ease-out duration-100 overflow-hidden min-h-screen  ${
              darkTheme ? "dark bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <main className="flex-1 max-w-screen-lg w-full mx-auto">
              <Routes>
                <Route
                  path="/"
                  element={!user ? <Navigate to="/login" /> : <Home />}
                />
                <Route
                  path="/login"
                  element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                  path="/signup"
                  element={user ? <Navigate to="/" /> : <Signup />}
                />
                <Route
                  path="/create"
                  element={!user ? <Navigate to="/login" /> : <Create />}
                />
                <Route
                  path="/tasks"
                  element={!user ? <Navigate to="/login" /> : <Tasks />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
