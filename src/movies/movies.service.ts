import { Movies } from './movies.entity';
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movies)
        private readonly moviesRepository: Repository<Movies>,
    ) {}

    async findAll(): Promise<Movies[]> {
        return await this.moviesRepository.find();
      }
}
