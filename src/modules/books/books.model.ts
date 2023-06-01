import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Book as BookDB } from '@prisma/client';

@ObjectType()
export class Book {
  @Field(() => Int)
  isbn: BookDB[`isbn`];

  @Field(() => String)
  title: BookDB[`title`];

  @Field(() => String)
  description: BookDB[`description`];

  @Field(() => GraphQLISODateTime)
  createdAt: BookDB[`createdAt`];
}
