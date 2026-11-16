import { Injectable } from '@nestjs/common';
import {
  isLocale,
  Locale,
  LocalizedPage,
  pages,
} from '../i18n/locales';

@Injectable()
export class ProfileService {
  getPage(lang?: string): LocalizedPage {
    const locale: Locale = lang && isLocale(lang) ? lang : 'en';
    return pages[locale];
  }

  getSupportedLocales(): Locale[] {
    return Object.keys(pages) as Locale[];
  }
}
