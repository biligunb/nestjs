import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiProperty({ description: 'The name of a ToDo'})
    @IsString()
    title: String;

    @IsString()
    description: String;
}
