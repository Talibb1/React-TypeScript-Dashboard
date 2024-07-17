import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Code Splitting
const DashboardPage = lazy(() => import("../Components/Page/Dashboard/DashboardPage"));
const UserPage = lazy(() => import('../Components/Page/UserList/view/user-view'));
const Product = lazy(() => import("../Components/Page/Dashboard/DashboardPage"));
const Blog = lazy(() => import("../Components/Page/Dashboard/DashboardPage"));
const LoginPage = lazy(() => import("../Components/Page/Login/LoginPage"));
const Signup = lazy(() => import("../Components/Page/SignUp/SignupPage"));
const Page404 = lazy(() => import("../Components/Page/page-not-found/not-found-page"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />}>
            {/* <Route index element={<DashboardPage />} /> */}
            <Route path="/User" element={<UserPage />} />
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

          <Route path="Login" element={<LoginPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="forget-password" element={<Signup />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;

{
  /* Uncomment and update these routes as needed */
}

// <Route path="/product/:id" element={<Product />} />

// <Route path="/product/*" element={<PageNotFound />} />
