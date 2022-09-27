
import React, { useContext, useEffect, useState } from 'react'
import Papa from "papaparse";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../database/Firebase";
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'
import { auth, database } from '../../database/Firebase'

import './styles/verification.css';

function Verification() {
	const [currentUser, setCurrentUser] = useState()



	//simple regex for substring .png
	var pattern = /.csv/;

	const uploadFiles = (file) => {
		if (!file) return;
		const storageRef = ref(storage, `images/${file.name}`);
		uploadBytesResumable(storageRef, file);
	};

	const handle = (e) => {
		e.preventDefault();
		const file = e.target[0].files[0];

		Papa.parse(file, {
			header: true,
			skipEmptyLines: true,
			complete: function (results) {
				const valuesArray = [];

				results.data.map((d) => {
					valuesArray.push(Object.values(d));
				});

				if (pattern.test(file.name) && validate(valuesArray) > -1) {
					uploadFiles(file);
					console.log("File uploaded.");
					
				} else {
					console.log("Failed verification.")
				}
			}
		});



		return;
	};

	return (
	  	<div className="verification" style={{marginTop: '90px'}}>
		  	<p>Upload times for verification here:</p>
		  	<form onSubmit={handle}>
				<input type="file" className="input" />
				<button type="submit">Upload</button>
		  	</form>
		  	<br></br>
		  	<p>Accepted files types (.csv), are found at (C://location) after a lap has been completed</p>
	  	</div>
	);
}

function validate(data) {
	var frame = -1;
	var time;
	var dist;
	var totTime;
	var totDist;
	var segNum;
	var sector;
	var markers;
	var markerTime;
	var markerFlag;
	var positionX;
	var positionY;
	var positionZ;
	var rotationX;
	var rotationY;
	var rotationZ;
	var steeringAngle;
	var throttle;
	var brakePressure;
	var gear;
	var rawSteer;
	var rawThrottle;
	var rawBreak;
	var autoGear;
	var aerodrspos;

	for (let i = 0; i < data.length; i++) {
		
		if (data[i] == null) continue;

		let row = data[i];

		if (frame > 0) {
			var calculatedDist = 0;
			calculatedDist += Math.pow(row[10] - positionX, 2);
			calculatedDist += Math.pow(row[11] - positionY, 2);
			calculatedDist += Math.pow(row[12] - positionZ, 2);
			calculatedDist = Math.sqrt(calculatedDist);
			
			calculatedDist -= row[4] - totDist;
			
			if (Math.abs(calculatedDist) > 1) {
				return -1;
			}
		}
		
		frame = row[0];
		time = row[1];
		dist = row[2];
		totTime = row[3];
		totDist = row[4];
		segNum = row[5];
		sector = row[6];
		markers = row[7];
		markerTime = row[8];
		markerFlag = row[9];
		positionX = row[10];
		positionY = row[11];
		positionZ = row[12];
		rotationX = row[13];
		rotationY = row[14];
		rotationZ = row[15];
		steeringAngle = row[16];
		throttle = row[17];
		brakePressure = row[18];
		gear = row[19];
		rawSteer = row[20];
		rawThrottle = row[21];
		rawBreak = row[22];
		autoGear = row[23];
		aerodrspos = row[24];
	}
	
	return time;
}

export default Verification;