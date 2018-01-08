/**
 * Created by hilakerer1 on 08/01/2018.
 */
import React, {Component} from 'react';
import Block from './Block.js';
import {buildMatrix} from '../utils/buildMatrixUtils.js';

//stubs
//var A = [2,3,6,2,3,1,7,3,2,2];
//var B = [2,5,1,2,3,4,7,7,6];
var C = [2,4,1,5];

class TowersVisuals extends Component {
    render(){
        const arr = buildMatrix(C);
        return (
            <div>
                Towers
                {arr.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex}>
                            {
                                row.map((item, itemIndex) => {
                                    return <Block type={item} key={itemIndex}/>;
                                })
                            }
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TowersVisuals;
