import React, { Component } from 'react'

class Searc extends Component {
    constructor(props) {
        super(props);
        this.state = { keywords: ''}
        this.changeSearchHandler = this.changeSearchHandler.bind(this);
        this.submitSearchHandler = this.submitSearchHandler.bind(this);
    }
    changeSearchHandler (e){
        this.setState({ keywords: e.target.value })
    }
    submitSearchHandler(e){
        e.preventDefault();
        if(this.state.keywords ===''){
            this.props.onSetAlerts('Zehmet olmazsa aradiqiniz karakteri daxil edin ','danger')
        }else{
            this.props.onSearchUsers(this.state.keywords);
            this.setState({ keywords:''})
        }
    }
    render() {
        return (
            <div className="container my-3">
                <form onSubmit={ this.submitSearchHandler } >
                    
                        <div className="input-group"> 
                            <input type="text" className="form-control"
                                value={this.state.keywords}
                                onChange={  this.changeSearchHandler }
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary"> Search </button>
                            </div>
                            </div>
                </form>
                {
                    this.props.showButton 
                    &&
                    <button className="btn btn-secondary btn-block mt-3"
                            onClick={ this.props.onClearUsers}
                    >
                        Clear Result
                    </button>
                }
           </div>
        )
    }
}

export default Searc
