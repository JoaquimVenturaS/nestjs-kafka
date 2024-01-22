import { Injectable } from '@nestjs/common';
import { PrismaClient } from '.prisma/client/orders';

@Injectable()
export class PrismaService extends PrismaClient {}
