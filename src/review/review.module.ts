import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewModel,
      },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
