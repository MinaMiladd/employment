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
import ShowHistoryOfApp from "./pages/ManageReqeusts/ShowHistoryOfApplicant";

// import Middleware files
import Guest from "./middleware/Guest";
import Admin from "./middleware/Admin";

import Show from "./pages/ShowHisOfUser/Show";


 export const routes = createBrowserRouter([

    {
        path : "",
        element : <App />,
        children :[
          {
            path:"/show-his",
            element : <Show />
          }
        ,
              
    {
        path: "/",
        element: <Home />,
        
        
      },

      {
        path: ":id",
        element: <JobDetails />,
      },
       
      // Guest Middleware
      {
        element : <Guest />,
        children : [
          {
            path :"/login",
            element : <Login />,
        },
        
        {
            path : "/register",
            element : <Register />,
        },
      

        ]
      },

  
  
  {
    path : "/manage-jobs",
    element : <Admin />,
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
  element : <Admin />,
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
  element : <Admin />,
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
  element : <Admin />,
  children: [
    {
      path :'',
      element : <ManageRequests />,
    },
    {
      path :'show',
      element : <ShowHistory />,
    },
    {
      path :'show-history',
      element : <ShowHistoryOfApp />,
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