import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import BackArrowIcon from "../../../images/back.svg"

class BackArrow extends Component {
    render() {
        return <img className='backArrow' src={BackArrowIcon} alt="Back" />
    }
}

export default BackArrow