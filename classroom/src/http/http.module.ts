import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { CoursesService } from '../services/courses.service';
import { StudentsService } from '../services/students.service';
import { EnrollmentsService } from '../services/enrollments.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [
    // Resolvers
    StudentsResolver,
    CoursesResolver,
    EnrollmentsResolver,

    // Services
    CoursesService,
    StudentsService,
    EnrollmentsService,
  ],
})
export class HttpModule {}
