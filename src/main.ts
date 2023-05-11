import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });

    const config = new DocumentBuilder()
      .setTitle('User badge creator')
      .setDescription('Badge generator from user database.')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
