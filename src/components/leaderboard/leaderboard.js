import React, { useState, useEffect, useMemo } from 'react';
import Pagination from './Pagination';
import { collection, getDocs } from 'firebase/firestore';
import { database } from  '../../database/Firebase.js';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';
import { Card, Button, Form, Col, Row, Alert, Container } from 'react-bootstrap';

import './styles/leaderboard.css';
import './styles/pagination.scss';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getLeaderboard();
    }, []);

    useEffect(() => {
        console.log(leaderboard);
    }, [leaderboard]);
    
    // Retrieve the leaderboard data from Firebase
    function getLeaderboard() {
        const leaderboardRef = collection(database, "leaderboard");
        var leaderboardData
        getDocs(leaderboardRef).then(response => {
            const data = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            //setLeaderboard(data);
            console.log(data)
            leaderboardData = data
            console.log(leaderboardData)
        }).catch(error => (console.log(error.message)));
        
        const usersRef = collection(database, "users");
        getDocs(usersRef).then(response => {
            const data = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            var finalArray = []            
            data.map(user => {
                leaderboardData.map(entry => {
                    if (entry.data.uid === user.id) {
                        console.log(entry)
                        
                        

                        var leaderboardDict = []
                        leaderboardDict.push({
                            position: 0,
                            name: user.data.forename + " " + user.data.surname,
                            country: user.data.country.name,
                            car: entry.data.car,
                            time: convertToMinutes(entry.data.time),
                            version: entry.data.version
                        })
                        finalArray.push(leaderboardDict)
                    }
                })
            })
            let leaderboardPos = 0;
            finalArray
                .sort((a, b) => a[0].time > b[0].time ? 1 : -1)
                .forEach(item => item[0].position = ++leaderboardPos)
            setLeaderboard(finalArray)
        }).catch(error => (console.log(error.message))); 
    }

    function convertToMinutes(timeInSeconds) {
        var milliseconds = parseFloat(timeInSeconds) * 1000
        var minutes = Math.floor((milliseconds/1000/60) << 0)
        var seconds = (Math.floor((milliseconds/1000) % 60) + ((milliseconds/1000) % 1)).toFixed(3)
        return minutes + ":" + seconds
    }

    // HTML for display length
    let PageSize = 10;

    // Only show rows if it appears on the current
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return leaderboard.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, leaderboard]);

    // HTML for displaying the leaderboard
    let htmlLeaderboard = <table>
        <thead>
            <tr>
                <th class="dt-center" scope="col">Position</th>
                <th class="dt-center" scope="col">User</th>
                <th class="dt-center" scope="col">Country</th>
                <th class="dt-center" scope="col">Car</th>
                <th class="dt-center" scope="col">Time</th>
                <th class="dt-center" scope="col">Build Version</th>
                <th class="dt-center" scope="col">Replay</th>
            </tr>
        </thead>
        <tbody>
            {currentTableData.map(leaderboard =>
                <tr>
                    <td>{leaderboard[0].position}</td>
                    <td>{leaderboard[0].name}</td>
                    <td>{leaderboard[0].country}</td>
                    <td>{leaderboard[0].car}</td>
                    <td>{leaderboard[0].time}</td>
                    <td>{leaderboard[0].version}</td>
                    <td>*Replay here*</td>
                </tr>
            )}
        </tbody>
    </table>;

    // HTML for paging functionality
    let htmlPaginate = <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={leaderboard.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
    />;
    
    // Initialise the leaderboard
    return(
        <>
            <div className='mb-1' style={{marginTop: '90px', zIndex: -1}}>
                <div className='lead-grad'/>
                <div className='lead-grad-info'>
                    <h1><b>Leaderboard</b></h1>
                </div>
            </div>
            <Container className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth: '1000px'}}>
                    <Card>
                        <Card.Body>
                            <div class="container">
                                <div class="dataTables_wrapper">
                                    {htmlLeaderboard}
                                    {htmlPaginate}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
}

export default Leaderboard;