import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormModule } from './form/form.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

dotenv.config();
@Module({
  imports: [  
    ConfigModule.forRoot({isGlobal: true,}),
    MongooseModule.forRoot(process.env.MONGO_URL, {}),
   FormModule,

                          

ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'uploads'),
  serveRoot: '/uploads', // Path to the folder containing the uploaded images
}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}