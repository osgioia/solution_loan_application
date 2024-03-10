import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateApplicationDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  purpose: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;
}
