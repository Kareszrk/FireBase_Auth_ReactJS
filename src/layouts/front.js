import React, {Component} from 'react';

class Front extends Component {
    constructor(props){
        super();
    }

    render(){
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default Front;