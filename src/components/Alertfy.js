import React from 'react'

const Alertfy = (props) => {
    return (
      props.alert !==null && (
          <div className="container my-2">
              <div className={`alert alert-${props.alert.type} alert-dismissible show fade`} role="alert">
                 {props.alert.message}
              
                <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
          </div>
      )
    )
}
export default Alertfy;