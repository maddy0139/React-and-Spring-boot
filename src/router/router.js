import React from "react";
import { Route } from "react-router-dom";
import AllEmployees from '../components/Employees/AllEmployees';
import AddEmployee from '../components/Employees/AddEmployee';
import EditEmployee from '../components/Employees/EditEmployee';
import Login from "../components/Login/Login";

class ReactRouter extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route  path="/Login" component={Login} />
        <Route  path="/Employees" component={AllEmployees} />
        <Route  path="/Add" component={AddEmployee} />
        <Route  path="/Edit" component={EditEmployee} />
      </React.Fragment>

    );

  }

}



export default ReactRouter;