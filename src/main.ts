import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all the properties that are not part of the DTO
      forbidNonWhitelisted: true, // throw an error if the request contains properties that are not part of the DTO
      transform: true, // transform the incoming data to the DTO type
      transformOptions: {
        enableImplicitConversion: true, // transform the payload to the declared type if possible
      },
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
