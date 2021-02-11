import { Document } from 'mongoose'

export interface Pokemon extends Document{
    readonly name: string;
    readonly type: string;
    readonly generation: number;
    readonly characteristics: string;
    readonly imageURL: string;
    readonly createDate: Date; 
    
}