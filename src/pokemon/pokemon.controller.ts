import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreatePokemonDTO } from './dto/pokemon.dto'

import{PokemonService} from './pokemon.service'

@Controller('pokemon')
export class PokemonController {

    constructor(private pokemonService: PokemonService){}

    @Post('/create')
    async createPomenons(@Res() res,@Body() createPokemonDTO: CreatePokemonDTO){
        //console.log(createPokemonDTO);
       const pokemon =  await this.pokemonService.createPokemon(createPokemonDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Pokemon succesfully created',
            pokemon
        });
    } 

    @Get('/')
    async getPokemons(@Res() res){
       const pokemons =  await this.pokemonService.getPokemons();
        return res.status(HttpStatus.OK).json({
            pokemons
        })
    }
    @Get('/:pokemonID')
    async getPokemon(@Res() res, @Param('pokemonID') pokemonID){
       const pokemon = await this.pokemonService.getPokemon(pokemonID);
       if(!pokemon) throw new NotFoundException('Pokemon does not exist');
       return res.status(HttpStatus.OK).json({
           pokemon
       })
    }

    @Delete('/delete')
    async deletePokemon(@Res() res, @Query('pokemonID') pokemonID){
        const pokemonDeleted = await this.pokemonService.deletePokemon(pokemonID);
        if(!pokemonDeleted) throw new NotFoundException('Pokemon does not exist');
        return res.status(HttpStatus.OK).json({
            message:"The pokemon has been deleted successfully ",
            pokemonDeleted

        });
    }

    @Put('/update')
     async updatePokemon(@Res() res, @Body() createPokemonDTO: CreatePokemonDTO, @Query('pokemonID') pokemonID){
        const upddatedPokemon = await this.pokemonService.updatePokemon(pokemonID, createPokemonDTO);
        if(!upddatedPokemon) throw new NotFoundException('Pokemon does not exist');
        return res.status(HttpStatus.OK).json({
            message: "The pokemon has been updated",
            upddatedPokemon
        })
    }

}
