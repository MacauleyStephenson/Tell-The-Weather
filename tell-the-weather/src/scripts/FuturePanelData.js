import React from "react";
import { format, fromUnixTime } from 'date-fns';
import '../styles/FuturePanelData.css';
import PopupInfo from './PopupInfo';
import {
	cloud, sun, sCloud,
	sRain, sSnow, sElectricStorm,
	sWind, moon, mCloud, mRain, mSnow,
	mElectricStorm, mWind, cBroken,
	sShowerRain, mShowerRain,

} from '../assets/imports';
import { motion, AnimatePresence } from "framer-motion";

class FuturePanelData extends React.Component {
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

	componentDidMount() {
		this.getData()
	}

	changeUnitMeasure(unit) {
		this.setState({
			unitOfMeasure: unit
		})
		setTimeout(() => {
			console.log(this.state.unitOfMeasure)
		}, 0);
	}
}