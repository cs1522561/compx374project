import React, {useEffect, useState} from 'react'
import {Card, Button, Alert, Container} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContexts'
import {Link, useNavigate} from 'react-router-dom'
import {doc, getDoc, addDoc, collection} from 'firebase/firestore'
import { database } from '../../database/Firebase'
import Papa from "papaparse";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../database/Firebase";

export default function UserProfile() {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()
    const [currentUserData, setCurrentUserData] = useState({forename: '', surname: '', country: '', branch: ''})
    
    useEffect(() => {
        getUserData(currentUser.uid)
    }, [])

    async function getUserData(user) {
        const userData = await getDoc(doc(database, 'users', user))
        setCurrentUserData(userData.data())
    }
    

    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate('/login')
        }
        catch {
            setError('Failed to log out.')
        }
    }


    //simple regex for substring .png
	var pattern = /.csv/;

	const uploadFiles = (file) => {
		if (!file) return;
		const storageRef = ref(storage, `images/${file.name}`);
		uploadBytesResumable(storageRef, file);
	};

	const handle = (e) => {
        setSuccess('')
        setError('')
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
                var lapTime = validate(valuesArray)
				if (pattern.test(file.name) && lapTime > -1) {
					uploadFiles(file);
					console.log("File uploaded.");
                    addDoc(collection(database, 'leaderboard'), {
                        car: "null",
                        time: lapTime,
                        uid: currentUser.uid,
                        version: 'null'
                    }).then(response => {
                        console.log(response)
                    }).catch(err => {
                        console.log(err.message)
                    })


                    setSuccess("File uploaded")
					
				} else {
					console.log("Failed verification.")
                    setError("Failed verification")
				}
			}
		});



		return;
	};


    return (
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '70.8vh', paddingTop: '110px'}}>
        <div className='w-100' style={{maxWidth: '480px'}}>
            <Card>
                <Card.Body>
                <h1 className='text-center mb-4'>User Profile</h1>
                {error && <Alert variant='danger'>{error}</Alert>}
                {success && <Alert variant='success'>{success}</Alert>}
                <strong>Email:</strong> {currentUser.email}<br/>
                <strong>Name:</strong> {currentUserData.forename} {currentUserData.surname}<br/>
                <strong>Country:</strong> {currentUserData.country.name}<br/>
                <strong>Branch:</strong> {currentUserData.branch}
                <div className="verification" style={{marginTop: '90px'}}>
                    <p>Upload times for verification here:</p>
                        <form onSubmit={handle}>
                            <input type="file" className="input" />
                            <button type="submit">Upload</button>
                        </form>
                    <br/>
                    <p>Accepted files types (.csv), are found at (C://location) after a lap has been completed</p>
                </div>
                <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </div>
        </div>
        
        </Container>
    )
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