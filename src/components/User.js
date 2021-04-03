import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class User extends Component {
 
    render() {
        const {login,id,avatar_url,html_url} = this.props.user;
        return (
          
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card mt-2">

                        <img src={ avatar_url} className="img-fluid"/>
                            
                        <div className="card-body">
                            <h5 className="card-title">{login} </h5>
                            <Link to={`user/${login}`} className="btn btn-primary btn-sm"> Profile Get</Link>
                        </div>
                        
                </div>
            </div>
         
        )
    }
}

export default User;
