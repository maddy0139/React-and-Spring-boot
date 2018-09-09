import React from 'react';

class EditEmployee extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            item:this.props.location.state.item
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const {item} = this.state;
        fetch(`http://localhost:8081/api/v1/employees/${item.id}`, {
            method:'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
            })
            .then(()=>{
                this.props.history.push('/Employees');
            });
            
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let updatedItem = this.state.item;
        updatedItem[name] = value;
        this.setState({item:updatedItem});
    }
    render()
    {
        const {item} = this.state;
        return(
            <div className="container pad-top">
                <div className="row">
                    <h4>Update Employee Details</h4>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-5">
                            <input type="text" name="firstname" onChange={this.handleChange.bind(this)} value={item.firstname} className="form-control" id="name" placeholder="Employee First Name"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-5">
                            <input type="text" name="lastname" onChange={this.handleChange.bind(this)} value={item.lastname} className="form-control" id="lastname" placeholder="Employee Last Name"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="designation" className="col-sm-2 control-label">Designation</label>
                        <div className="col-sm-5">
                            <input type="text" name="designation" onChange={this.handleChange.bind(this)} value={item.designation} className="form-control" id="designation" placeholder="Designation"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="salary" className="col-sm-2 control-label">Salary</label>
                        <div className="col-sm-5">
                            <input type="text" name="salary" onChange={this.handleChange.bind(this)} value={item.salary} className="form-control" id="salary" placeholder="Salary"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-5">
                            <input type="submit" className="btn btn-primary" value="Update"/>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
export default EditEmployee;