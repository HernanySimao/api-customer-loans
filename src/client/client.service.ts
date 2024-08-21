import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientRepository } from './repositories/client.repository';

@Injectable()
export class ClientService {

    constructor(private readonly ClientRepository: ClientRepository){}

  create(createClientDto: CreateClientDto) {
    return this.ClientRepository.create(createClientDto);
  }

//   findAll() {
//     return this.ClientRepository.findAll();
//   }

//   findOne(id: number) {
//     return this.ClientRepository.findOne(id);
//   }

//   update(id: number, updateClientDto: UpdateClientDto) {
//     return this.ClientRepository.update(id, updateClientDto);
//   }

//   remove(id: number) {
//     return this.ClientRepository.remove(id);
//   }
}
