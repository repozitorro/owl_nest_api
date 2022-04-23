import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { Review, ReviewSchema } from './review.schema';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Review.name,
        schema: ReviewSchema,
      },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
