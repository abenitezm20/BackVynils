import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //await app.listen(3000);
  //new code
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });
  //end new code
}
bootstrap();
