import {
  Delete,
  ForbiddenException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicationDto, EditApplicationDto } from './dto';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  getApplications() {
    return this.prisma.loanApplication.findMany();
  }

  getApplicationById(applicantId: number, Id: number) {
    return this.prisma.loanApplication.findFirst({
      where: {
        id: Id,
        applicantId,
      },
    });
  }

  async createApplication(applicantId: number, dto: CreateApplicationDto) {
    const application = await this.prisma.loanApplication.create({
      data: {
        applicantId,
        ...dto,
      },
    });

    return application;
  }

  async editApplicationById(
    applicantId: number,
    Id: number,
    dto: EditApplicationDto,
  ) {
    const application = await this.prisma.loanApplication.findUnique({
      where: {
        id: Id,
      },
    });

    if (!application || application.applicantId !== applicantId) {
      throw new ForbiddenException('Access to resources denied');
    }

    return this.prisma.loanApplication.update({
      where: {
        id: Id,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteApplicationById(applicantId: number, Id: number) {
    const application = await this.prisma.loanApplication.findUnique({
      where: {
        id: Id,
      },
    });

    if (!application || application.applicantId !== applicantId) {
      throw new ForbiddenException('Access to resources denied');
    }

    await this.prisma.loanApplication.delete({
      where: {
        id: Id,
      },
    });
  }
}
