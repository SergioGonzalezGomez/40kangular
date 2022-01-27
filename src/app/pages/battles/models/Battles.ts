export interface BattlesInterface {
    _id: string;
    name: string;
    year: string;
    place: string;
    traitorlegions: [{
        _id: string;
        name: string;
        description: string;
        number: string;
        primarch: string;
        img: string;
        __v: number;
    }]
    loyalistlegions: [{
        _id: string;
        name: string;
        description: string;
        number: string;
        primarch: string;
        img: string;
        __v: number;
    }]
    victory: string;
    img: string;
}