import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { mongoose } from '@typegoose/typegoose';
import { ID_VALIDATION_ERROR } from './id-validation.constants';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param') {
      return value;
    }
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new BadRequestException(ID_VALIDATION_ERROR);
    }
    return value;
  }
}
