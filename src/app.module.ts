import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { HttpModule } from './routes/http.module';

@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule {}
