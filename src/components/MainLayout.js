/**
 * Created by hilakerer1 on 08/01/2018.
 */
import React, {Component} from 'react';
import TowersVisuals from './TowersVisuals.js';
import {buildMatrix} from '../utils/buildMatrixUtils.js';
import '../styles/MainLayout.css'

class MainLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            towersHeights: [2,5,1,2,3,4,7,7,6],
            heightsStr:''
        };
        this.onTowersHeightsChange = this.onTowersHeightsChange.bind(this);
        this.onBuildClick = this.onBuildClick.bind(this);
    }
    onBuildClick(event){
        var heightsStr = this.state.heightsStr || '';
        var heightsArr = heightsStr.split(',');
        heightsArr = heightsArr.map(str => parseInt(str));
        this.setState({towersHeights: heightsArr});
    }
    onTowersHeightsChange(event){
        var heightsStr =  event.target.value;
        this.setState({heightsStr: heightsStr});
    }
    render() {
        const result = buildMatrix(this.state.towersHeights);
        return (
            <div className='main-layout'>
                <div className='header'>
                    <span className='title'>Towers and Puddles</span>
                    <input type='text' onChange={this.onTowersHeightsChange} />
                    <button onClick={this.onBuildClick}>Build towers</button>
                </div>
                <TowersVisuals matrix={result.matrix}/>
                <div>Total puddle volume is <b>{result.volume}</b></div>
            </div>
        );
    }
}

export default MainLayout;