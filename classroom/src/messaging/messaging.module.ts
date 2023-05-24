import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';
import { DatabaseModule } from '../database/database.module';
import { StudentsService } from '../services/students.service';
import { CoursesService } from '../services/courses.service';
import { EnrollmentsService } from '../services/enrollments.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
