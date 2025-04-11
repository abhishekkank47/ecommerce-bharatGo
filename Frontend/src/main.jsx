import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Authprovider } from "./context api/authContext.jsx";
import { CartContextProvider } from "./context api/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById("root")).render(
  
  <Authprovider>
    <CartContextProvider>
      <BrowserRouter>
      <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        <StrictMode>
          
          <App />
          
        </StrictMode>
       
        ,
      </BrowserRouter>
    </CartContextProvider>
  </Authprovider>
);
