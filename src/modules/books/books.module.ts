import { Module } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { BooksService } from './books.service';
import { BookResolver } from './books.resolver';

@Module({
  imports: [PrismaModule],
  providers: [BooksRepository, BooksService, BookResolver],
  exports: [BooksService],
})
export class BooksModule {}
