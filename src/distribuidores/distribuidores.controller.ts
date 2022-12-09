import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { DistribuidoresService } from './distribuidores.service';
import { CreateDistribuidoresDto } from './dto/create-distribuidores.dto';
import { UpdateDistribuidoreDto } from './dto/update-distribuidores.dto';

@Controller('distribuidores')
export class DistribuidoresController {
  constructor(private readonly distribuidoresService: DistribuidoresService) {}

  @Post()
  create(@Body() createDistribuidoreDto: CreateDistribuidoresDto) {
    return this.distribuidoresService.create(createDistribuidoreDto);
  }

  @Get()
  findAll() {
    return this.distribuidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.distribuidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDistribuidoreDto: UpdateDistribuidoreDto) {
    return this.distribuidoresService.update(+id, updateDistribuidoreDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.distribuidoresService.remove(+id);
  }
}
