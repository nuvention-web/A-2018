import Dashboard from "views/Dashboard/Dashboard.jsx";
import Experience from "views/Dashboard/Experience.jsx";
import Education from "views/Dashboard/Education.jsx";

import ExperienceForm from "views/Forms/ExperienceForm.jsx";
import EducationForm from "views/Forms/EducationForm.jsx";



import RequestForm from "views/Forms/RequestForm.jsx";


var dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    collapse:true,
    path: "/experience",
    name: "Experience",
    icon: "pe-7s-portfolio",
    views: [
      {
        path: "/experience",
        name: "View Experience",
        component: Experience
      },
      {
        path: "/forms/experience-form",
        name: "Add Experience",
        component: ExperienceForm
      },
    ]
  },
  {
    collapse:true,
    path: "/education",
    name: "Education",
    icon: "pe-7s-study",
    state: "openEducation",
    views: [
      {
        path: "/education",
        name: "View Education",
        component: Education
      },
      {
        path: "/forms/education-form",
        name: "Add Education",
        component: EducationForm
      },
    ]
  },
  {
    path: "/forms/RequestForm",
    name: "Share",
    icon: "pe-7s-note2",
    component: RequestForm
  },

  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
]; 
export default dashboardRoutes;
