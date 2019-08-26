import React, { Component } from 'react';
import './layout.css'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class Layout extends Component {
	render() {
		return (
			<div id='layout'>
				<Header />
				<main id='main'>
					<p>main content</p>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Layout;
