import '../styles/App.css'
import React from 'react';
import TodayData from './TodayData.js';
import FuturePanelData from './FuturePanelData.js';
import { IconSquareGithub } from '../assets/imports'
import uniqid from 'uniqid'
import LoadingScreen from './LoadingScreen'
import { AnimatePresence } from 'framer-motion'

import {
	cloud, sun, sCloud,
	sRain, sSnow, sElectricStorm,
	sWind, moon, mCloud, mRain, mSnow,
	mElectricStorm, mWind, cBroken,
	sShowerRain, mShowerRain
} from '../assets/imports'
class App extends React.Component {

	render() {

		return (
			<div className="App">
				<div className="background"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F58%2F6e%2F51%2F586e51559dc40f48cd8ce65af9c1522f.gif&f=1&nofb=1&ipt=c298129c39d8fa5dd8293245986ac07095604cdc5e5545bdb48ed5fab87e4fd0&ipo=images" alt="" srcset="" /></div>
				<AnimatePresence>
					{!!this.state.daily.length ? <>
						<div className="appContainer">
							<a className='github' href="https://github.com/MacauleyStephenson/Tell-The-Weather">
								<IconSquareGithub width='50px' height='50px' />
								<h2>Apheiros</h2>
							</a>
							<div className='weatherAppContainer'>
								<TodayData data={this.state.info} setLocation={this.setLocation} getData={this.getData} hourly={this.state.hourly} />
								<FuturePanelData daily={this.state.daily} hourly={this.state.hourly} changeUnitMeasure={this.changeUnitMeasure} getData={this.getData} />
							</div>
						</div>
					</> : <LoadingScreen />
					}
				</AnimatePresence>
			</div>
		);
	}
}


export default App;