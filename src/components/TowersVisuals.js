/**
 * Created by hilakerer1 on 08/01/2018.
 */
import React, {Component} from 'react';
import Block from './Block.js';

class TowersVisuals extends Component {
    render(){
        const matrix = this.props.matrix;//buildMatrix(C);
        return (
            <div>
                Towers
                {matrix.map((row, rowIndex) => {
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
