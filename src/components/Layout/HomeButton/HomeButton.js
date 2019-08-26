import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import HomeIcon from "../../../images/home.svg"

class HomeButton extends Component {
    render() {
        return <img src={HomeIcon} alt="Home" />
    }
}

export default HomeButton