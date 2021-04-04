export type Wildcard = {
    value: 'wildcard',
    message: string
}

export type MoodCard = {
    variation: 'mood'
    value: string
}

export type TerrainCard = {
    variation: 'terrain'
    value: string | Wildcard
}

export type ArcCard = {
    variation: 'arc'
    value: 'collapse' | 'discipline' | 'grow' |  'transform'
    duration: string
}

export type ObjectCard = {
    variation: 'object'
    value: string | Wildcard
}
