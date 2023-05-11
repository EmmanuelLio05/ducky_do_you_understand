import React, { useState, useEffect } from 'react'
import { TextField, Typography } from '@mui/material'

import './App.css'
import { Ducky, DuckyMood } from './components/Ducky'

function App() {
    const [explanation, setExplanation] = useState('');
    const [mood, setMood] = useState(DuckyMood.Expectanting);

    //#region Efectos
    useEffect(
        () => {
          if (explanation.trim().length > 0 && explanation.trim().length <= 50) {
            setMood(DuckyMood.Thinking);
        } else if (explanation.trim().length > 50 && explanation.trim().length <= 150) {
            setMood(DuckyMood.Pondering);
        } else if (explanation.trim().length > 150 && explanation.trim().length <= 300) {
            setMood(DuckyMood.Confused);
        } else if (explanation.trim().length == 0) {
            setMood(DuckyMood.Expectanting);
        }
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
            <Typography variant='h3'>Ducky, do you understand?</Typography>
        </div>
        <div style={{
            height: '35vh'
        }}>
            <TextField
                value ={explanation}
                onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                        setExplanation(event.target.value);
                    }
                }
                label="Tell me"
                color='info'
                maxRows={6}
                minRows={4}
                fullWidth 
                multiline
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

export default App
