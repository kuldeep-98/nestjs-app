import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: '2850',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
