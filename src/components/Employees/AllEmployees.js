import React from 'react';
import {Link} from 'react-router-dom';
class AllEmployees extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Employees:[]
        };

        this.EditEmployeeDetails  = this.EditEmployeeDetails.bind(this);
        this.DeleteEmployeeDetails = this.DeleteEmployeeDetails.bind(this);
    }
    componentDidMount(){
       fetch("http://localhost:8081/api/v1/employees")
       .then(response => response.json())
       .then(json =>{
        this.setState({Employees:json});
       });
       
        
    }
    EditEmployeeDetails(data)
    {
        console.log(data);
    }
    DeleteEmployeeDetails(id)
    {
        fetch(`http://localhost:8081/api/v1/employees/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            let updateEmployees = [...this.state.Employees].filter(i =>i.id !== id);
            this.setState({Employees:updateEmployees});
        });
    }
    render()
    {
        return(
            <div className="container">
            <div className="row">
                <h3 className="col-md-3">Employee Details</h3> 
                <Link to="/Add" id="linkMyRequest" className="fa fa-plus col-md-1 btn btn-primary addempBtn">Add</Link> 
            </div>
            <div className="row">
            
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>
                           First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Designation
                        </th>
                        <th>
                            Salary
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.Employees.map(function(item,key)
                        {
                            return(
                                <tr key={key}>
                                    <td>
                                    {item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td style={{"width":"100px"}}>
                                        <div style={{"text-align":"center"}}>
                                        <span>
                                        <Link to={{ pathname: '/Edit', state: { item: item} }} className="fa fa-edit actionbtn" />
                                        </span>
                                        <span><i className="fa fa-trash-o actionbtn"  onClick={this.DeleteEmployeeDetails.bind(this,item.id)}></i></span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        },this)
                    }
                    </tbody>
                </table>
            </div>
            
            </div>
        );
    }
}

export default AllEmployees;