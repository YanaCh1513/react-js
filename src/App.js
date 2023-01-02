import styles from "./App.module.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";


import { HomePage } from "./pages/HomePage";
import { ChatsPage } from "./pages/ChatsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Header } from "./components/header/Header";


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

      {/* <BrowserRouter> */}
      <Routes >
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='chats' element={<ChatsPage />}>
            <Route index element={<ChatsPage />} />
            <Route path=":chatId" element={<ChatsPage />} />
          </Route>
          <Route path='profile' element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
      </Routes>
      {/* </BrowserRouter> */}

    </>
  );
}

