import { Landing, Error, Register, ProtectedRoute } from "./pages";
import styled from "styled-components";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
} from "./pages/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//     errorElement: <Error />,
//   },
//   {
//     path: "landing",
//     element: <Landing />,
//   },
//   {
//     path: "register",
//     element: <Register />,
//   },
// ]);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-left" />
    </BrowserRouter>
  );
}

export default App;
