import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import BackArrow from "../../../images/back.svg"

class BackArrow extends Component {
    render() {
        return <img src={BackArrow} alt="Back" />
    }
}

export default BackArrow