import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./style.module.css"
import Header from './Header';
import { Card, CardContent} from "@mui/material";


const OnePirate = (props) => {

    const {id} = useParams();
    const [pirate, setPirate] = useState({}); 
    const [pegLeg, setPegLeg] = useState(pirate.pegLeg);
    const [eyePatch, setEyePatch] = useState(pirate.eyePatch);
    const [hookHand, setHookHand] = useState(pirate.hookHand);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                console.log(res.data);
                setPirate(res.data);
                setEyePatch(res.data.eyePatch);
                setPegLeg(res.data.pegLeg);
                setHookHand(res.data.hookHand);
                // setLoaded(true);
            })
    }, [])


    // a function for onClick event to send a put request to change 

    return (
        <div>
            <Header pageInd={pirate.pirateName}/>
            <div>
                        <div>
                            <img className = {styles.bigimage} src = {pirate.pirateImg} alt= "pirate image"/>
                            <h2>{pirate.catchPhrase}</h2>
                        </div>
                        <div>
                            <Card>
                                <CardContent>
                                    <h2>About</h2>
                                    <p>Position: {pirate.crewPosition}</p>
                                    <p>Treasures: {pirate.noOfTreasure}</p>
                                    <p>Peg Leg: {pegLeg ? "Yes": "No"} <button onClick={e =>setPegLeg(!pegLeg)}>{pegLeg ? "No": "Yes" }</button></p>
                                    <p>Eye Patch: {eyePatch ? "Yes": "No"} <button onClick={e =>setEyePatch(!eyePatch)}>{eyePatch ? "No": "Yes" }</button></p>
                                    <p>Hook Hand: {hookHand ? "Yes": "No"} <button onClick={e =>setHookHand(!hookHand)}>{hookHand ? "No": "Yes" }</button></p>
                                </CardContent>
                            </Card>
                        </div>
                </div>
        </div>
    )
}

export default OnePirate;