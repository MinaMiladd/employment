import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";

import Home from "./pages/home/Home";

import App from "./App";

/*import athu files */
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

/*import job files*/
import JobDetails from "./pages/JobDetails/JobDetails";
import ManageJobs from "./pages/Manage-Jobs/ManageJobs";
import AddJob from "./pages/Manage-Jobs/AddJob";
import UpdateJob from "./pages/Manage-Jobs/UpdateJob";

/*import applicant files */
import ManageApplicants from "./pages/ManageApplicants/ManageApplicants";
import AddApplicant from "./pages/ManageApplicants/AddApplicant";
import UpdateApplicant from "./pages/ManageApplicants/UpdateApplicant";

/*import qualifications files */
import ManageQualifications from "./pages/ManageQualifications/ManageQualifications";
import AddQualifications from "./pages/ManageQualifications/AddQualifications";
import UpdateQualifications from "./pages/ManageQualifications/UpdateQualifications";

/*import Requests files */
import ManageRequests from "./pages/ManageReqeusts/ManageRequests";
import ShowHistory from "./pages/ManageReqeusts/ShowHistory";
 

 export const routes = createBrowserRouter([

    {
        path : "",
        element : <App />,
        children :[
              
    {
        path: "/",
        element: <Home />,
      },

      {
        path: ":id",
        element: <JobDetails />,
      },


  
  {
      path :"/login",
      element : <Login />,
  },
  
  {
      path : "/register",
      element : <Register />,
  },

  {
    path : "/manage-jobs",
    children : [
      {
         path :'',
         element :<ManageJobs />
      },

    {
          path :'add',
          element :<AddJob />
    },

    {
      path :':id',
      element :<UpdateJob />
    }


    ]
},


{
  path : "/manage-applicants",
  children : [
    {
       path :'',
       element :<ManageApplicants />
    },

  {
        path :'add',
        element :<AddApplicant />
  },

  {
    path :':id',
    element :<UpdateApplicant />
  }


  ]
},
{
  path : "/manage-qualifications",
  children : [
    {
       path :'',
       element :<ManageQualifications />
    },

  {
        path :'add',
        element :<AddQualifications />
  },

  {
    path :':id',
    element :<UpdateQualifications />
  }


  ]
}, 

{
  path: "/manage-requests",
  children: [
    {
      path :'',
      element : <ManageRequests />,
    },
    {
      path :'show',
      element : <ShowHistory />,
    },
    
  ]
},


  

  ],//array
  },
  {
    path : "*",
    element : <Navigate to={"/"} />,
  },

  ]);