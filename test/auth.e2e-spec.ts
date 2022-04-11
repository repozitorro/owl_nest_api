import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { mongoose } from '@typegoose/typegoose';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';

const userDto: AuthDto = {
  login: 'hellow@gmail.com',
  password: '12345',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (POST) - failure', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ login: 'hellow.man@gmail.com' })
      .expect(400);
  });

  it('/auth/login (POST) - success', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(userDto)
      .expect(200)
      .then(({ body }) => {
        expect(body.access_token).toBeDefined();
      });
  });

  it('/auth/login (POST) - failure', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...userDto, password: '1234' })
      .expect(401);
  });

  afterAll(() => {
    mongoose.disconnect();
  });
});
