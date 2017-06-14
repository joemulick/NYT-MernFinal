import React from 'react';
import helper from '../../utils/helper';
import Saved from './panels/Saved';

class SavedContainer extends React.Component {

    constructor() {

    super();

    }

    
    
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Saved Articles</h3>
                            </div>
                            <div className="panel-body">
                                <Saved />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default SavedContainer;