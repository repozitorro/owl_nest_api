import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export interface TopPageModel extends Base {}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class VacanciesData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => [VacanciesData] })
  vacancies: VacanciesData;

  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage;

  @prop()
  seoText: string;

  @prop({ type: () => [String] })
  tags: string[];

  @prop()
  tagsTitle: string;
}
