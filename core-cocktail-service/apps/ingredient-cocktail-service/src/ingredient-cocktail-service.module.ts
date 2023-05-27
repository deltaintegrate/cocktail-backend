import { Module } from '@nestjs/common';
import { IngredientCocktailServiceController } from './ingredient-cocktail-service.controller';
import { IngredientCocktailServiceService } from './ingredient-cocktail-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CoctailsModule } from './modules/coctails/coctails.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coctail } from './modules/coctails/models/coctail.entity';
import { Ingredient } from './modules/ingredients/models/ingredient.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'ACCOUNT_COCKTAIL_SERVICE', transport: Transport.TCP },
    ]),
    CoctailsModule,
    IngredientsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Coctail, Ingredient],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [IngredientCocktailServiceController],
  providers: [IngredientCocktailServiceService],
})
export class IngredientCocktailServiceModule {
  constructor(private dataSource: DataSource) {}
}
