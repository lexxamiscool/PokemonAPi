export class CreatePokemonDTO{
   readonly name: string;
   readonly type: string;
   readonly generation: number;
   readonly characteristics:string;
   readonly imageURL: string;
   readonly createDate: Date; 
}