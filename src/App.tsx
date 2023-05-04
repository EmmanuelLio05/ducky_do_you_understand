import React, { useState, useEffect } from 'react'

import './App.css'
import { Ducky, DuckyMood } from './components/Ducky'
import { TellMe } from './components/TellMe'
import { Title } from './components/Title'

function App() {
    const [explanation, setExplanation] = useState('');
    const [mood, setMood] = useState(DuckyMood.Expectanting);

    //#region Efectos
    useEffect(
        () => {
            async function ducky_think() {
                setMood(DuckyMood.Watching);
                await delay(1250);
                if (explanation.trim().length > 0 && explanation.trim().length <= 50) {
                    setMood(DuckyMood.Thinking);
                } else if (explanation.trim().length > 50 && explanation.trim().length <= 150) {
                    setMood(DuckyMood.Pondering);
                } else if (explanation.trim().length > 150 && explanation.trim().length <= 300) {
                    setMood(DuckyMood.Confused);
                } else if (explanation.trim().length == 0) {
                    setMood(DuckyMood.Expectanting);
                }
            }
            ducky_think();
            return;
        },
        [explanation]
    );
    //#endregion

    //#region Return
    return <div>
        <div style={{
            height: '20vh'
        }}>
            <Title />
        </div>
        <div style={{
            height: '35vh'
        }}>
            <TellMe
                value={explanation}
                setValue={setExplanation}
            />
        </div>
        <div style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '35vh'
        }}>
            <Ducky mood={mood} />
        </div>
    </div>
    //#endregion
}

const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default App
