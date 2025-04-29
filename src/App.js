import "./App.css";
import Head from "./components/header/Header";
import Body from "./components/home/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/video-container-components/VideoContainer";
import WatchPage from "./components/watch-video/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
      element:<VideoContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]

}])
function App() { 
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}/>

      {/**
       *
       * Head
       * Body
       *  SideBar
       *    MenuItem
       *  MainContainer
       *    ButtonContainer
       *    VideoContainer
       *      VideoCard
       *
       */}
    </div>
    </Provider>
  );
}

export default App;
