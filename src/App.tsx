import React, { useState, useEffect } from 'react'
import { Textarea, Title } from '@mantine/core'

import './App.css'
import { Ducky, DuckyMood } from './components/Ducky'

function App() {
    const [explanation, setExplanation] = useState('');
    const [mood, setMood] = useState(DuckyMood.Expectanting);

    //#region Efectos
    useEffect(
        () => {
            async function ducky_think() {
                setMood(DuckyMood.Watching);
                await delay(500);
                if (explanation.trim().length > 0 && explanation.trim().length <= 50) {
                    setMood(DuckyMood.Thinking);
                } else if (explanation.trim().length > 50 && explanation.trim().length <= 150) {
                    setMood(DuckyMood.Pondering);
                } else if (explanation.trim().length > 150 ) {
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
            <Title order={3}>Ducky, do you understand?</Title>
        </div>
        <div style={{
            height: '35vh'
        }}>
            <Textarea
                value={explanation}
                onChange={(event) => setExplanation(event.currentTarget.value)}
                label="Tell me"
                autosize
                minRows={4}
                maxRows={6}
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
