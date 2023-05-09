import React, { } from 'react'

export function Ducky({ mood }: { mood: DuckyMood }) {

    return <img
        src={'../../src/assets/' + mood}
        style={{
            height: '100%',
            width: '100%'
        }}
    />
}

export enum DuckyMood {
    Expectanting = 'Expectanting.PNG',
    Watching = 'Watching.PNG',
    Thinking = 'Thinking.PNG',
    Pondering = 'Pondering.PNG',
    Confused = 'Confused.PNG'
}