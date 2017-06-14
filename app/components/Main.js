import React from 'react';
var Link = require('react-router').Link;
// Here we include all of the sub-components
import SavedContainer from './containers/SavedContainer';
import SearchContainer from './containers/SearchContainer';
import Saved from './containers/panels/Saved';
import Search from './containers/panels/Search';
import styles from '../styles';
import helpers from "../utils/helper";

// Create the Main Component with class
var Main = function(props) {

    return (

      <div className="container">

        <div className="navbar">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">NYT</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/search">Search
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/saved">Saved</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div className="jumbotron text-center" style={styles.transparentBg}>
                <div className="container">
                    <h1>MERN Stack Article Finder</h1>
                    <p>Search for and save articles from the New York Times</p>
                </div>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                        {props.children}

                    </div>
                </div>
        </div>
      
      </div>
    );
};


export default Main;


