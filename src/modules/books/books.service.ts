import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(private repository: BooksRepository) {}

  async createBook(params: {
    isbn: Book[`isbn`];
    title: Book['title'];
    description: Book['description'];
  }) {
    const { isbn, title, description } = params;

    const book = await this.repository.createBook({
      data: {
        isbn,
        title,
        description,
      },
    });

    return book;
  }

  async getBooks() {
    const books = await this.repository.getBooks({});
    return books;
  }
}
