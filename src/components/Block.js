/**
 * Created by hilakerer1 on 08/01/2018.
 */
import React, { Component } from 'react';
import '../styles/Block.css'

class Block extends Component {
    render(){
        const type = this.props.type || '';
        return <div className={'block '+ type}></div>;
    }
}

export default Block;
