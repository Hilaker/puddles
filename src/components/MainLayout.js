/**
 * Created by hilakerer1 on 08/01/2018.
 */
import React, {Component} from 'react';
import TowersVisuals from './TowersVisuals.js';
import {buildMatrix} from '../utils/buildMatrixUtils.js';

class MainLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            towersHeights: [2,4,1,5],
            heightsStr:''
        };
        this.onTowersHeightsChange = this.onTowersHeightsChange.bind(this);
        this.onBuildClick = this.onBuildClick.bind(this);
    }
    onBuildClick(event){
        var heightsStr = this.state.heightsStr || '';
        var heightsArr = heightsStr.split(',');
        this.setState({towersHeights: heightsArr});
    }
    onTowersHeightsChange(event){
        var heightsStr =  event.target.value;
        this.setState({heightsStr: heightsStr});
    }
    render() {
        const result = buildMatrix(this.state.towersHeights);
        return (
            <div>
                <TowersVisuals matrix={result.matrix}/>
                <input type='text' onChange={this.onTowersHeightsChange}/>
                <button onClick={this.onBuildClick}>Build towers</button>
                <div>Total puddle volume is <b>{result.volume}</b></div>
            </div>
        );
    }
}

export default MainLayout;