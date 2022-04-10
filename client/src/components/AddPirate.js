import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from "./style.module.css"


const AddPirate = (props) => {

    const [pirateName, setPirateName] = useState("");
    const [pirateImg, setPirateImg] = useState("");
    const [noOfTreasure, setNoOfTreasure] = useState();
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setError] = useState({});

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/pirates', {
            pirateName,
            pirateImg,
            noOfTreasure,
            catchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
        .then((res) => {
            console.log(`you have added the pirate ${pirateName}`)
            navigate('/pirates')
        })
        .catch((err) => {
            console.log(err.response.data)
            console.log(`there was this problem with adding ${pirateName}: ${err}`)
            setError(err.response.data.errors)
            
        })
        
    }

    return (
    <div>
        <Header pageInd = {"Add Pirat"} />
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formcolumn}>
                <label>Pirate name:</label>
                <input type='text' value = {pirateName} onChange = {(e) => setPirateName(e.target.value)} />
                {
                    errors.pirateName ?
                    <span>**{errors.pirateName.message}</span>:
                    null
                }
                
                <label>Img Url:</label>
                <input type='text' value = {pirateImg} onChange = {(e) => setPirateImg(e.target.value)} />

                {
                    errors.pirateImg ?
                    <span>**{errors.pirateImg.message}</span>:
                    null
                }
                <label># of Treasure Chests:</label>
                <input type='number' value = {noOfTreasure} onChange = {(e) => setNoOfTreasure(e.target.value)} />

                {
                    errors.noOfTreasure?
                    <span>**{errors.noOfTreasure.message}</span>:
                    null
                }

                <label>Pirate Catch Phrase:</label>
                <input type='text' value = {catchPhrase} onChange = {(e) => setCatchPhrase(e.target.value)} />

                {
                    errors.noOfTreasure?
                    <span>**{errors.noOfTreasure.message}</span>:
                    null
                }
            </div>

            <div className={styles.formcolumn}>
                <label>Crew Position:</label>
                <select value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                    <option defaultChecked>Select a Crew Position</option>
                    <option>Captain</option>
                    <option>First Mate</option>
                    <option>Quarter Master</option>
                    <option>Boatswain</option>
                </select>
                {
                    errors.crewPosition ?
                    <span>**{errors.crewPosition.message}</span>:
                    null
                }
                
                <label>Peg Leg:  <input type='checkbox'  checked = {pegLeg  ? true : false} onClick = {(e) => setPegLeg(!pegLeg)} /></label>

                {
                    errors.pegLeg ?
                    <span>**{errors.pegLeg.message}</span>:
                    null
                }

                <label>Eye Patch:  <input type='checkbox'  checked = {eyePatch ? true : false} onClick = {(e) => setEyePatch(false)} /></label>
                {
                    errors.hookHand ?
                    <span>**{errors.hookHand.message}</span>:
                    null
                }
                <label>Hook Hand:  <input type='checkbox' checked = { hookHand ? true : false} onClick = {(e) => setHookHand(false)} /></label>
                {
                    errors.hookHand ?
                    <span>**{errors.hookHand.message}</span>:
                    null
                }
            </div>
            <input className={styles.addpiratebtn} type='submit' value='Add Pirate'/>
        </form>
    </div>
    )
}

export default AddPirate;