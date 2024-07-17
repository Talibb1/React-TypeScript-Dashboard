import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// Code Splitting

const DashboardLayout = lazy(() => import("../Components/Layout/Dashboard/Dashboard"));
const AppView = lazy(() => import("../Components/Page/Dashboard/app-view"));
const UserPage = lazy(
  () => import("../Components/Page/UserList/view/user-view")
);
const Product = lazy(() => import("../Components/Page/Products/products"));
const Blog = lazy(() => import("../Components/Page/Blog/Blog"));
const LoginPage = lazy(() => import("../Components/Page/Login/LoginPage"));
const Signup = lazy(() => import("../Components/Page/SignUp/SignupPage"));
const Page404 = lazy(
  () => import("../Components/Page/page-not-found/not-found-page")
);

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          }
        >
          <Route index element={<AppView />} />
          <Route path="User/*" element={<UserPage />} />
          <Route path="Product/*" element={<Product />} />
          <Route path="Blog/*" element={<Blog />} />
          <Route path="Chat/*" element={<Blog />} />
          <Route path="Mail/*" element={<Blog />} />
          <Route path="Calendar/*" element={<Blog />} />
          <Route path="Kanban/*" element={<Blog />} />
          <Route path="User-Profile/*" element={<Blog />} />
          <Route path="Edit-Profile/*" element={<Blog />} />
          <Route path="Change-Password/*" element={<Blog />} />
        </Route>
        
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="Signup"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="forget-password"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="404"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Page404 />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

{
  /* Uncomment and update these routes as needed */
}

// <Route path="/product/:id" element={<Product />} />

// <Route path="/product/*" element={<PageNotFound />} />
