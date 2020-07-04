import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { WinstonModule } from 'nest-winston';
import { UI } from 'bull-board';

import { AppModule } from './app.module';
import { winstonOptions } from './utils/winston-options';

async function bootstrap() {
  const logger = WinstonModule.createLogger(winstonOptions);
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,
    new FastifyAdapter(),
    { logger });
  app.use('/jobs', UI);
  await app.listen(4000, '0.0.0.0');
}
bootstrap();
