import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: '12345678',
            database: 'itss2-be',
            entities: ['dist/database/entities/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class PostgresModule {}