import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<any> {
    const { income, location, name, age } = createClientDto;
    const loans = this.determineLoans(income, location, age);

    return {
      "customer": name,
      loans,
    };
  }

  private determineLoans(income: number, location: string, age: number): { type: string; interest_rate: number }[] {
    const loans = new Set<{ type: string; interest_rate: number }>();

    if (income <= 3000) {
      loans.add({ type: "PERSONAL", interest_rate: 4 });
      loans.add({ type: "GUARANTEED", interest_rate: 3 });
    } else if (income > 3000 && income < 5000 && location === 'SP') {
      if (age < 30) {
        loans.add({ type: "PERSONAL", interest_rate: 4 });
      }
      loans.add({ type: "GUARANTEED", interest_rate: 3 });
    } else if (income >= 5000) {
      loans.add({ type: "CONSIGNMENT", interest_rate: 2 });
    }
    return Array.from(loans);
  }
  
}
