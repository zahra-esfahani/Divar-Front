import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDataProfile } from "../confings/fetchUsersData";
import Loader from "../modules/Loader";
import Auth from "../pages/Auth";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/404";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";


function RoutersHandler() {
  const { data, isLoading, error } = useQuery(["profile"], fetchDataProfile);
  console.log({ data, isLoading, error });
  if(isLoading) return <Loader/>
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth"
          element={data ? <Navigate to="/dashboard" /> : <Auth />}
        />
        <Route
          path="/admin"
          element={
           data && data.data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
          }
        />
        <Route
          path="/dashboard"
          element={data ? <Dashboard /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutersHandler;
