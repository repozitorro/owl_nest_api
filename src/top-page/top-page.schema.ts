import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class VacanciesData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({ autoIndex: true, timestamps: true })
export class TopPage extends Document {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: () => [VacanciesData] })
  vacancies: VacanciesData;

  @Prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @Prop()
  seoText: string;

  @Prop({ type: () => [String] })
  tags: string[];

  @Prop()
  tagsTitle: string;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
TopPageSchema.index({ '$**': 'text' });
