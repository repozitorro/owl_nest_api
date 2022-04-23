import { Injectable } from '@nestjs/common';
import { TopLevelCategory, TopPage } from './top-page.schema';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel(TopPage.name)
    private readonly topPageSchema: Model<TopPage>,
  ) {}

  async create(dto: CreateTopPageDto) {
    return this.topPageSchema.create(dto);
  }

  async findById(id: string) {
    return this.topPageSchema.findById(id).exec();
  }

  async findByAlias(alias: string) {
    return this.topPageSchema.findOne({ alias }).exec();
  }

  async findByCategory(firstCategory: TopLevelCategory) {
    return this.topPageSchema
      .aggregate()
      .match({
        firstCategory,
      })
      .group({
        _id: { secondCategory: '$secondCategory' },
        pages: { $push: { alias: '$alias', title: '$title' } },
      })
      .exec();
  }

  async findByText(text: string) {
    return this.topPageSchema
      .find({ $text: { $search: text, $caseSensitive: false } })
      .exec();
  }

  async delete(id: string) {
    return this.topPageSchema.findByIdAndRemove(id).exec();
  }

  async updateById(id: string, dto: CreateTopPageDto) {
    return this.topPageSchema.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
