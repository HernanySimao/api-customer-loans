import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('customer-loans')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

//   @Get()
//   findAll() {
//     return this.clientService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.clientService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
//     return this.clientService.update(+id, updateClientDto);
//   }

//   @HttpCode(HttpStatus.NO_CONTENT)
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.clientService.remove(+id);
//   }
}
