import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from 'src/modules/form.entity';
import { FormController } from './form.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:Form.name , schema:FormSchema}])],
  controllers:[FormController],
  providers: [FormService]

})
export class FormModule {}
