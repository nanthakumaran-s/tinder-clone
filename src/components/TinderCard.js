/* eslint-disable */
import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css';
import axios from '../axios'

function TinderCards() {
    
    const [people, setpeople] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder-clone/cards')
            setpeople(req.data)
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log(direction + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name)
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards_container'>
                {people.map((person) => (
                    <TinderCard
                    className= 'swipe'
                    key= {person.name}
                    preventSwipe= {['up', 'down']}
                    onSwipe= {(dir) => swiped(dir, person.name)}
                    onCardLeftScreen= {() => outOfFrame(person.name)}>
                        <div className='card' style={{backgroundImage: `url(${person.imageUrl})`}}>
                            <h3>
                                {person.name}
                            </h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
