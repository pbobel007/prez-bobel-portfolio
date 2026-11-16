import { Controller, Get, Query } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('api')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profile')
  getProfile(@Query('lang') lang?: string) {
    return this.profileService.getPage(lang);
  }

  @Get('locales')
  getLocales() {
    return { locales: this.profileService.getSupportedLocales() };
  }
}
