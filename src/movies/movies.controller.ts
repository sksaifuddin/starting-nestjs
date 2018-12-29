import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(){
        return ' hello movies';
    }


}
