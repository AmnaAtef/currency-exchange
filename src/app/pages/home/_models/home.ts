export interface IRates{
    timestamp: number,
    base: string;
    date: string;
    rates: any[];
}
export interface IRatesObject{
    key: string;
    value: number;
}
export interface IconverterData{
    amountControl: number;
    from: number;
    to: number;
}