// import { Helmet } from "react-helmet-async";

import DashboardLayout from "../../Layout/Header/index";
import AppView from "./app-view";

const HomePage = () => {
  return (
    <>
      <DashboardLayout>
        <AppView />
      </DashboardLayout>
    </>
  );
};

export default HomePage;
