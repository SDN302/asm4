import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import { StudentsService } from './students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
	constructor(private readonly studentService: StudentsService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post()
	async create(@Body() createStudentDto: CreateStudentDto) {
		return await this.studentService.create(createStudentDto);
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	async getAll() {
		return await this.studentService.getAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	async getById(@Param('id') id: string) {
		return await this.studentService.getById(id);
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateStudentDto: UpdateStudentDto,
	) {
		return await this.studentService.update(id, updateStudentDto);
	}

	@HttpCode(HttpStatus.OK)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return await this.studentService.delete(id);
	}
}
