import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/componentErrorBoundary';

import {setSearchField , requestRobots} from '../action';


const mapStateToProps = (state) => {
      return {
        searchField: state.searchRobot.searchField,
        robots: state.requestRobot.robots,
        isPending: state.requestRobot.isPending,
        error: state.requestRobot.error
      }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobot: () => dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount (){
        
        this.props.onRequestRobot();
 
    }

    render(){

       
        const {searchField, onSearchChange , robots , isPending} = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ?
            <h1 className="tc">Loading...</h1>
            :
            (
                <div className="tc">
                    <h1 className="f1" >RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
                );
            }
}


export default connect(mapStateToProps , mapDispatchToProps)(App);