import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import EditReview from "./components/Edit-review.component";
import ListReview from "./components/Review-List.component";
import WriteReview from "./components/Write-Review.component";
class App extends Component {
    render(){
        return(
            <Router>
                <div className="container">
                    <h2>Reviews</h2>
                    <Route path="/" exact component={ListReview}/>
                    <Route path="/edit/:" component={EditReview}/>
                    <Route path="/create:" component={WriteReview}/>
                </div>
            </Router>
        )
    }
}


export default App;
