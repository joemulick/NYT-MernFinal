import React from 'react';
import helper from '../../utils/helper';
import Search from './panels/Search';

class SearchContainer extends React.Component {

    constructor() {

    super();
    
    this.state = {queryTerm: ""}

    this.saveArticle = this.saveArticle.bind(this);

    }
    
     saveArticle(response) {
     }


    render() {
        return (
            <div>
                <Search />

            </div>

            //{/* ((THIS GOES IN SEARCH COMPONENT ABOVE WHEN ITS NOT NULL))  results={this.state.results}*/}

        );
    }

};

export default SearchContainer;
