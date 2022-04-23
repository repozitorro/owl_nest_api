import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPage, TopPageSchema } from './top-page.schema';
import { TopPageService } from './top-page.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPage.name,
        schema: TopPageSchema,
      },
    ]),
  ],
  providers: [TopPageService],
})
export class TopPageModule {}
