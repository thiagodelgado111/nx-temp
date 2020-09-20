import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaveMessageDto } from './dto/message.dto';
import { Message } from './schemas/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>
  ) {}

  async create(leaveMessageDto: LeaveMessageDto): Promise<Message> {
    const newMessage = new this.messageModel(leaveMessageDto);
    return newMessage.save();
  }

  async getAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }
}
