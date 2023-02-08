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



	constructor(props) {
		super(props)
		this.getData = this.getData.bind(this)
		this.setLocation = this.setLocation.bind(this)
		this.changeUnitMeasure = this.changeUnitMeasure.bind(this)
		this.imagesID = {
			'01d': sun, '02d': sCloud, '03d': cloud, '04d': cBroken, '09d': sShowerRain, '10d': sRain,
			'11d': sElectricStorm, '13d': sSnow, '50d': sWind, '01n': moon, '02n': mCloud, '03n': cloud,
			'04n': cBroken, '09n': mShowerRain, '10n': mRain, '11n': mElectricStorm, '13n': mSnow, '50n': mWind,
		}
		this.unitsOfMeasure = {
			metric: {
				tempUnit: '°C',
				windSpeedUnit: 'm/s',
			},
			imperial: {
				tempUnit: '°F',
				windSpeedUnit: 'm/h',
			}
		}
		this.state = {
			location: 'salta, argentina',
			info: {
				state: '',
				country: '',
				weatherImage: '',
				description: '',
				feels_like: '',
				humidity: '',
				pressure: '',
				temp: '',
				temp_max: '',
				temp_min: '',
				visibility: '',
				wind_speed: '',
				uvi: '',
			},
			daily: [],
			hourly: [],
			unitOfMeasure: 'metric'
		}
	}

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