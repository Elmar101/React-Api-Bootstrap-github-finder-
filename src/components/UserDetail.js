import React, { useState,useEffect } from 'react';
import Loading from './Loading';
import Repos from './Repos';
const UserDetail = ({match,onGetUser,ongetUserRepos,loading,user,repos}) => {

    useEffect( () =>{
        onGetUser(match.params.login);
        ongetUserRepos(match.params.login);
    },[])

    const {
        name,
        avatar_url,
        location,
        html_url,
        bio,
        blog,
        followers,
        following,
        public_repos
    } = user;

    if( loading ) return <Loading/>
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={avatar_url} className="card-img-top"/>
                        <div className="card-body"> 
                            <p> {name} </p> 
                            {
                            location && <>
                                            <p><i className="fas fa-map-marker-alt"> {location} </i></p>
                                            <p><a className="btn btn-block btn-primary" href={html_url}> Github Profile </a></p>
                                        </>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            { bio && <> 
                                        <h1> About Bio </h1> 
                                        <p> { bio } </p>
                                        </>
                            }
                            { blog && <> 
                                        <h1> About </h1> 
                                        <p> { blog } </p>
                                        </>
                            }
                            <span className="badge badge-primary m-1"> Followers: {followers} </span>
                            <span className="badge badge-danger m-1"> Following: {following} </span>
                            <span className="badge badge-success m-1"> Repo: {public_repos} </span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Repos repos={repos} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default UserDetail
