import { Injectable } from '@nestjs/common';
import { Review } from './review.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewSchema: Model<Review>,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    return this.reviewSchema.create(dto);
  }

  async delete(id: string): Promise<Review> | null {
    return this.reviewSchema.findByIdAndDelete(id).exec();
  }

  async findByProductId(productId: string): Promise<Review[]> {
    return this.reviewSchema.find({ productId }).exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewSchema.deleteMany({ productId }).exec();
  }
}
