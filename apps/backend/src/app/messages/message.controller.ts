import { Body, Controller, Get, Post } from '@nestjs/common';
import { LeaveMessageDto } from './dto/message.dto';
import { Message } from './schemas/message.schema';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getAll(): Promise<Message[]> {
    return this.messageService.getAll();
  }

  @Get('gnarl')
  gnarl(): string {
    return 'gnarl!';
  }

  @Post('leave')
  async create(@Body() leaveMessageDto: LeaveMessageDto) {
    await this.messageService.create(leaveMessageDto);
  }
}
