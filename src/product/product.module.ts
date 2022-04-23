import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.schema';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProductController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
