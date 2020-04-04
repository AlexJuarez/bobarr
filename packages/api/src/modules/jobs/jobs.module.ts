import { Module, forwardRef } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TypeOrmModule } from '@nestjs/typeorm';

import { REDIS_CONFIG } from 'src/config';
import { JobsQueue } from 'src/app.dto';

import { MovieDAO } from 'src/entities/dao/movie.dao';
import { TorrentDAO } from 'src/entities/dao/torrent.dao';

import { JackettModule } from 'src/modules/jackett/jackett.module';
import { LibraryModule } from 'src/modules/library/library.module';
import { TransmissionModule } from 'src/modules/transmission/transmission.module';

import { DownloadProcessor } from './processors/download.processor';
import { RefreshTorrentProcessor } from './processors/refresh-torrent.processor';
import { RenameAndLinkQueueProcessor } from './processors/rename-and-link.processor';

import { JobsService } from './jobs.service';

const queues = [
  { name: JobsQueue.REFRESH_TORRENT, redis: REDIS_CONFIG },
  { name: JobsQueue.DOWNLOAD, redis: REDIS_CONFIG },
  { name: JobsQueue.RENAME_AND_LINK, redis: REDIS_CONFIG },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieDAO, TorrentDAO]),
    BullModule.registerQueue(...queues),
    JackettModule,
    TransmissionModule,
    forwardRef(() => LibraryModule),
  ],
  providers: [
    DownloadProcessor,
    RefreshTorrentProcessor,
    RenameAndLinkQueueProcessor,
    JobsService,
  ],
  exports: [JobsService],
})
export class JobsModule {}
