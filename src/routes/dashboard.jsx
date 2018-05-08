import Dashboard from "views/Dashboard/Dashboard.jsx";
import Experience from "views/Dashboard/Experience.jsx";
import Education from "views/Dashboard/Education.jsx";

import RequestForm from "views/Forms/RequestForm.jsx";


var dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/experience",
    name: "Experience",
    icon: "pe-7s-portfolio",
    component: Experience
  },
  {
    path: "/education",
    name: "Education",
    icon: "pe-7s-study",
    component: Education
  },
  {
    path: "/forms/RequestForm",
    name: "Report",
    icon: "pe-7s-note2",
    component: RequestForm
  },
  
  
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
]; 
export default dashboardRoutes;
