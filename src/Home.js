import React, { useState } from "react"
import { fadeIn, bounce, wobble } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core'
import './Home.css'
const FadeIn = styled.div`animation: 5s ${keyframes`${fadeIn}`} infinite`;
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}  infinite`;
const Wobble = styled.div`animation: 2s ${keyframes`${wobble}`}  infinite`;
const Home = () => {
    const [check, setCheck] = useState(false);
    return (
        <div style={{ backgroundColor: "black", color: "white" }}>
            {check ? (
                <div>
                    <FadeIn>
                        <h1>This is React Babes</h1>
                    </FadeIn>
                    <Bounce>
                        <h1>Yay</h1>
                    </Bounce>
                </div>) :
                (<div>
                    <h1>Animations will come here</h1>
                </div>)
            }


            <Button color="primary" onMouseOver={() => setCheck(!check)} >Animate</Button>
            <div style={{ backgroundColor: "teal", }}>
                <Wobble >
                    <h1 style={{ textAlign: "center", }}>This will Wobble</h1>
                </Wobble>
            </div>

        </div>
    )
}

export default Home;