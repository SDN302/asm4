import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({ origin: '*' });

	const config = new DocumentBuilder()
		.setTitle('ASM4')
		.setDescription('The ASM4 API description')
		.setVersion('1.0')
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api-docs', app, documentFactory);

	await app.listen(4000);
}
bootstrap();
