import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [PokemonModule, MongooseModule.forRoot('mongodb://localhost/pokemones-nest-api',{
     useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
