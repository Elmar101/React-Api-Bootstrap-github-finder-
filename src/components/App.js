import React, { Component } from 'react'
import Navbar from './Navbar';
import About from './About';
import Users from './Users';
import UserDetail from './UserDetail';
import Alertfy from './Alertfy';
import Searc from './Searc';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [], 
            user:{},
            repos: [],
            loading: false, 
            alert: null 
        }
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlerts = this.setAlerts.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepos = this.getUserRepos.bind(this);
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

    getUser(userName){
        this.setState({ loading: true });
        setTimeout(() =>{
            axios.get(`https://api.github.com/users/${userName}`)
                 .then(res=> this.setState({ user: res.data, loading: false }))
        },1000)   
    }

    getUserRepos(userName){
        this.setState({ loading: true });
        setTimeout(() =>{
            axios.get(`https://api.github.com/users/${userName}/repos`)
                 .then(res=> this.setState({ repos: res.data, loading: false }))
        },1000)   
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Alertfy alert={this.state.alert}/>
                <Switch>
                    <Route exact path='/' render={
                        (props) =>{
                            return (
                            <>
                                <Searc
                                    onSearchUsers={this.searchUsers} 
                                    onClearUsers={this.clearUsers}
                                    onSetAlerts={this.setAlerts}
                                    showButton={ this.state.users.length>0 ? true : false }
                                />
                                <Users users={this.state.users} loading={this.state.loading}/>
                            </>
                        )}
                    }/> 

                    <Route path='/about' component={ About }/>  
                    <Route path='/user/:login' render={ (props) =>(
                        <UserDetail
                            {...props} 
                            onGetUser = {this.getUser}
                            user = {this.state.user}
                            ongetUserRepos = { this.getUserRepos } 
                            repos = {this.state.repos}
                            loading={this.state.loading}
                        />
                    )}/>       
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
