export interface Data {
    gen: chart[],
    type: chart[],
    HighScore: chart[],
    HighHp: chart[]
}

export interface chart {
    item: string | number,
    count: number
}

export interface Pokemon {
    id: string,
    name: string,
    nameJapan: string,
    nameGerman: string,
    img: string
}

export interface PokById {
    img: string,
    hp: number,
    name: string,
    japan: string,
    german: string,
    attack: number,
    defense: number,
    sp_attack: number,
    sp_defense: number,
    speed: number,
    gen: number,
    species: string
}