import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from '.surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    //state stores whether or not the user has clicked on the button
    // onClick(event) {
    //   this.setState({
    //     clicked
    //   })
    // }
    //The Surprise component needs to know whether to render
    // the button or the image. This information can be stored
    // in the component's state.
    render() {
        // Show the button to start with
        if (!this.state.clicked) {
            console.log(this.state.clicked);
            return <SurpriseButton onClick = {
                () => this.setState.clicked = true
            }
            />;
        } else {
            return <SurpriseImage / > ;
        }
    }
}
