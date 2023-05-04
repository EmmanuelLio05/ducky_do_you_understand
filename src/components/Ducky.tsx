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
    Expectanting = 'rubber_duck_1.jpg',
    Watching = 'rubber_duck_2.jpg',
    Thinking = 'rubber_duck_3.jpg',
    Pondering = 'rubber_duck_4.jpg',
    Confused = 'rubber_duck_5.jpg'
}