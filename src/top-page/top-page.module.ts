import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'TopPage',
        schema: TopPageModel,
      },
    ]),
  ],
  providers: [TopPageService],
})
export class TopPageModule {}
