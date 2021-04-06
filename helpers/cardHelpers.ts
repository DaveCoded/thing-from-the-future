import { CardData } from "../types/cardTypes";

export function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function getCard(cardType: 'object' | 'mood', data: CardData): string {
    const arr = data[cardType]
    const randomNumber = getRandomArbitrary(0, arr.length)
    return arr[randomNumber]
}

export function getTerrainCard(data: CardData) {
    const arr = data.terrain
    const randomNumber = getRandomArbitrary(0, arr.length)
    const terrainValue1 = arr[randomNumber]
    const secondRandomNumber = getRandomArbitrary(0, arr.length)
    const terrainValue2 = arr[secondRandomNumber]
    return { terrainValue1, terrainValue2 }
}

export function getArcCard(data: CardData) {
    const {values, durations} = data.arc
    const arcValue = values[getRandomArbitrary(0, values.length)]
    const arcDuration = durations[getRandomArbitrary(0, durations.length)]
    return { arcValue, arcDuration }
}

export function getAllCards(data: CardData) {
    const objectValue = getCard('object', data)
    const moodValue = getCard('mood', data)
    const { terrainValue1, terrainValue2 } = getTerrainCard(data)
    const { arcValue, arcDuration } = getArcCard(data)
    return {
        objectValue,
        moodValue,
        terrainValue1,
        terrainValue2,
        arcValue,
        arcDuration
    }
}
