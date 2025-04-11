import { useState, useEffect } from "react";
import { useAuth } from "../../context api/authContext.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.jsx";

const ProtectedRoutes = () => {
  const [ok, setOk] = useState(false);
  const [ auth, setAuth ] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/auth/user-auth", {
          headers: {
            Authorization: auth?.token
          },
        });
        setOk(res.data.ok);
      } catch (error) {
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  // Return logic based on the state of 'ok'
  return ok ? <Outlet /> : <Spinner />;
};

export default ProtectedRoutes;
