import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { ApplicationService } from './application.service';
import { CreateApplicationDto, EditApplicationDto } from './dto';
import { Role } from '../roles/roles.enum'
import { Roles } from '../decorators/roles.decorators'

@UseGuards(JwtGuard)
@ApiTags('Applications')
@Controller('applications')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Get()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get all applications' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Application successfully' })
  getApplications(@GetUser('id') userId: number) {
    return this.applicationService.getApplications();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get application by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Applications by id successfully',
  })
  getApplicationById(
    @GetUser('id') applicantId: number,
    @Param('id', ParseIntPipe) Id: number,
  ) {
    return this.applicationService.getApplicationById(applicantId, Id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new application' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Application created' })
  createApplication(
    @GetUser('id') applicantId: number,
    @Body() dto: CreateApplicationDto,
  ) {
    return this.applicationService.createApplication(applicantId, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit application by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Application edited successfully',
  })
  editApplicationById(
    @GetUser('id') applicantId: number,
    @Param('id', ParseIntPipe) Id: number,
    @Body() dto: EditApplicationDto,
  ) {
    return this.applicationService.editApplicationById(applicantId, Id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete application by id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Application deleted' })
  deleteApplicationById(
    @GetUser('id') applicantId: number,
    @Param('id', ParseIntPipe) Id: number,
  ) {
    return this.applicationService.deleteApplicationById(applicantId, Id);
  }

}
