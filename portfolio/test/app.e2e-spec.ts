import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Portfolio (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/api/profile (GET) defaults to English with SAP content', () => {
    return request(app.getHttpServer())
      .get('/api/profile')
      .expect(200)
      .expect((res) => {
        expect(res.body.lang).toBe('en');
        expect(res.body.profile.name).toBe('Prez Bobel');
        expect(res.body.profile.portfolio.some((p: { id: string }) => p.id === 'sap-eu-pl')).toBe(true);
      });
  });

  it('/api/profile?lang=pl returns Polish', () => {
    return request(app.getHttpServer())
      .get('/api/profile?lang=pl')
      .expect(200)
      .expect((res) => {
        expect(res.body.lang).toBe('pl');
        expect(res.body.ui.navAbout).toBe('O mnie');
      });
  });

  it('/api/profile?lang=es returns Spanish', () => {
    return request(app.getHttpServer())
      .get('/api/profile?lang=es')
      .expect(200)
      .expect((res) => {
        expect(res.body.lang).toBe('es');
        expect(res.body.ui.navAbout).toBe('Sobre mí');
      });
  });
});
