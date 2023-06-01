import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './books.model';
import { BooksService } from './books.service';

@Resolver()
export class BookResolver {
  constructor(private bookService: BooksService) {}

  @Query(() => [Book])
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Mutation(() => Book)
  async createBook(
    @Args({ name: `isbn`, type: () => Int }) isbn: number,
    @Args({ name: `title`, type: () => String }) title: string,
    @Args({ name: `description`, type: () => String }) description: string,
  ) {
    return this.bookService.createBook({ isbn, title, description });
  }
}
