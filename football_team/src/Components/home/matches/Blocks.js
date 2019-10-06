import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from './../../ui/misc';
import MatchesBlock from '../../ui/matches_blocks';

class Blocks extends Component {

    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot)
            
            this.setState({
                matches: reverseArray(matches)
            });

            // console.log(matches)
        })
    }

    showMathces = (matches) => (
        matches ?
            matches.map((match)=>(
                <div className="item">
                    <div className="wrapper">
                        <MatchesBlock match={match}/>
                    </div>
                </div>
            ))
        :null
    )

    render() {
        console.log(this.state);
        return (
            <div className="home_matches">
                {this.showMathces(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;