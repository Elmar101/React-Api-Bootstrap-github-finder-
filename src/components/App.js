import React, { Component,Fragment } from 'react'
import Navbar from './Navbar'
import Users from './Users';
import Alertfy from './Alertfy';
import Searc from './Searc';
import axios from 'axios';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], loading: false, alert: null }
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlerts = this.setAlerts.bind(this);
    }
   /*  componentDidMount(){
        this.setState({ loading: true })
        setTimeout(() =>{
            axios.get('https://api.github.com/users')
            .then(res=> this.setState({ users: res.data, loading: false }))
        },1000)    
    } */
    searchUsers(keywords){
        this.setState({ loading: true })
        setTimeout(() =>{
            axios.get(`https://api.github.com/search/users?q=${keywords}`)
            .then(res=> this.setState({ users: res.data.items, loading: false }))
        },1000)    
    }
    clearUsers(){
        this.setState({ users: [] });
    }
    setAlerts(message,type){
        this.setState( { alert:{message, type} } );
        setTimeout(()=>{ this.setState({ alert:null} )},3000);
    }
    render() {
        return (
            <>
                <Navbar />
                <Alertfy alert={this.state.alert}/>
                <Searc
                     onSearchUsers={this.searchUsers} 
                     onClearUsers={this.clearUsers}
                     onSetAlerts={this.setAlerts}
                     showButton={ this.state.users.length>0 ? true : false }
                />
                <Users users={this.state.users} loading={this.state.loading}/>
            </>
        )
    }
}

export default App
