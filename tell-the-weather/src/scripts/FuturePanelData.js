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