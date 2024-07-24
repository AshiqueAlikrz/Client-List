import React from "react";
import ResponsiveAppBar from "../components/AppBar";
import ActiveLastBreadcrumb from "../components/BreadCrumb";
import BasicTabs from "../components/TabPanel";

const HomePage = () => {
  return (
    <div className="w-full h-auto scrollbar-none">
      <ResponsiveAppBar />
      <div className="flex items-center h-14  m-2   ">
        <h1 className=" font-bold text-2xl ">Clients List</h1>
      </div>
      <div className="m-2">
        <ActiveLastBreadcrumb />
      </div>

      <div className="w-full h-full   rounded-md mt-12  ">
        <BasicTabs />
      </div>
    </div>
  );
};

export default HomePage;
