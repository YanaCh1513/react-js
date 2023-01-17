import styles from "./App.module.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";


import { HomePage } from "./pages/HomePage/HomePage";
import { ChatsPage } from "./pages/ChatsPage/ChatsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Header } from "./components/header/Header";

import { Provider } from "react-redux";
import { useSelector, useDispatch } from 'react-redux/es/exports';

import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index"
import { CircularProgress } from "@mui/material";
import { GistsPage } from "./pages/GistsPage/GistsPage";
import { useEffect, useState } from "react";

import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";

import { auth } from './services/firebase'
import { makeAuth } from "./store/profile/actions";
import { selectIsAuth } from "./store/profile/selectors";


import { PrivateRoute } from "./HOC/PrivateRoute";

export function App() {
  // 
  // const mainPageRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />
  //   },
  //   {
  //     path: "/chats",
  //     element: <ChatsPage />
  //   },
  //   {
  //     path: "/profile",
  //     element: <ProfilePage />
  //   }
  // ])

  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  //const [authed, setAuthed] = useState(false)


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in....")
        console.log(user)
        // setAuthed(true)
        dispatch(makeAuth(true))
      } else {
        // setAuthed(false)
        dispatch(makeAuth(false))
        console.log("user is NOT logged in....")
      }
    })
  }, [])


  return (
    <>
      {/* <nav>
        <div className={styles.nav}>
      
          <Link className={styles.navItem} to='/' >Home</Link>
          <Link className={styles.navItem} to='chats' >Chats</Link>
          <Link className={styles.navItem} to='profile' >Profile</Link>
      
        </div>
      </nav> */}

      {/* <RouterProvider router={mainPageRouter} /> */}

      {/* <Header /> */}

      {/* <BrowserRouter>  on index.js */}

      {/* <Provider store={store}> */}
      <div className={styles.container}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<HomePage />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              {/* <Route path='chats' element={<ChatsPage />}>
              <Route index element={<ChatsPage />} />
              <Route path=":chatId" element={<ChatsPage />} />
            </Route> */}

              <Route path='chats' element={<PrivateRoute />}>
                <Route index element={<ChatsPage />} />
                <Route path=":chatId" element={<ChatsPage />} />
              </Route>
              <Route path='profile' element={<PrivateRoute />} >
                <Route index element={<ProfilePage />} />
              </Route>
              {/* <Route path='profile' element={<ProfilePage />} /> */}
              {/* <PrivateRoute authenticated={isAuth} path="profile">
              <ProfilePage />
            </PrivateRoute> */}

              <Route path='gists' element={<GistsPage />} />
            </Route>
            <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
          </Routes>
        </PersistGate>
      </div>
      {/* </Provider> */}
    </>
  );
}

