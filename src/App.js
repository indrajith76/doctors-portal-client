import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { Lines } from "react-preloaders2";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
      <Lines color={'#19D3AE'} />
    </>
  );
}

export default App;
