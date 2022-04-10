import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import Header from './Header';
import { confirm } from "react-confirm-box";  


const AllPirates = () => {

    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((allPirates) => {
                // console.log(allPirates);
                console.log(allPirates.data);
                // console.log(allPirates.data.pirateName);
                setPirates(allPirates.data);
                console.log(pirates.pirateName);
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    },[])

    const handlePirate = (id) => {
            const pirateUrl = "/pirates/" + id;
        navigate(pirateUrl);
    }
    const deletePirateReq = (pirateId) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirateId}`)
        .then(res =>{
            console.log(res);
            setPirates(pirates.filter(pirate => pirate._id !== pirateId))
        
            }
        )
        .catch(err => console.log(err))
    }
    const deletePirate = async (pirateId) => {
        const result = await confirm(`Are you sure you want delete this pirate?`);
        if (result) {
            console.log("You click yes!");
            deletePirateReq(pirateId);
            return;
        }
        console.log("You click No!");
    }

    return (
        
        <div>
            <Header pageInd = {"Pirat Crew"}/>

            {  pirates.map((pirate, index) => { 

                return (                
                    <div key={index} >
                        <h2>{pirate.pirateName}</h2>
                        <img className = {styles.smallImg} src = {pirate.pirateImg} />
                        <button onClick={(e)=> handlePirate(pirate._id)}>View Pirate</button>
                        <button className={styles.delete} onClick={(e) => {deletePirate(pirate._id)}}>Walk the Plank</button>
                    </div>
                )
            })  
            }
        </div>
    )
}

export default AllPirates;