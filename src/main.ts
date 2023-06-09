import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Certificado de Depósito Interbancário Mensal')
  .setDescription('Taxa de juros entre bancos')
  .setVersion('1.0')
  .addTag('cdi')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('cdi-api', app, document);

  await app.listen(3000);

   if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
