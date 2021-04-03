import React,{ useState } from 'react'

const Searc = (props) => {
    const {onSetAlerts, onSearchUsers, onClearUsers, showButton} = props;
    const [ keywords ,setKeywords ] = useState('');
    
    const changeSearchHandler = (e) => {
        setKeywords( e.target.value );
    }

    const submitSearchHandler = (e) => {
        e.preventDefault();
        if( keywords ==='' ){
            onSetAlerts('Zehmet olmazsa aradiqiniz karakteri daxil edin ','danger')
        }else{
            onSearchUsers( keywords );
            setKeywords( '' );
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={ submitSearchHandler } >
                
                    <div className="input-group"> 
                        <input  type="text" className="form-control"
                                value={ keywords }
                                onChange={ changeSearchHandler }
                        />

                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary"> Search </button>
                        </div>
                    </div>
            </form>
            {
                showButton 
                &&
                <button className="btn btn-secondary btn-block mt-3"
                        onClick={ onClearUsers}
                >
                    Clear Result
                </button>
            }
        </div>
    )
    
}

export default Searc
