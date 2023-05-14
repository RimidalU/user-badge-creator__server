import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UseGuards,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { filesStorage } from './storage';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(
    FileInterceptor('file', {
      storage: filesStorage,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 5, // 5mb
          }),
          new FileTypeValidator({
            fileType: /(jpg|jpeg|png)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return file;
  }

  @Get(':id')
  @UseGuards(AuthGuard('local'))
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('local'))
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
