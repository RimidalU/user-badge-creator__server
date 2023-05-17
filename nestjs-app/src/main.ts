import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

import { AppModule } from './app.module';
import { join } from 'path';

// const PORT = process.env.PORT || 5000;
const PORT = process.env.NESTJS_APP_DOCKER_PORT;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });

    app.use('/uploads', express.static(join(__dirname, '..', '/uploads')));

    const config = new DocumentBuilder()
      .setTitle('User badge creator')
      .setDescription('Badge generator from user database.')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    // This is necessary to make the hot-reload work with Docker
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
