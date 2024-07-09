import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Code Splitting
const DashboardPage = lazy(() => import('../Components/Page/Dashboard/DashboardPage'));
const Login = lazy(() => import('../Components/Page/Login/Login'));
const Signup = lazy(() => import('../Components/Page/SignUp/Signup'));
const Page404 = lazy(() => import('../Components/Page/page-not-found/404'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;


          {/* Uncomment and update these routes as needed */}
          {/* <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} /> */}
