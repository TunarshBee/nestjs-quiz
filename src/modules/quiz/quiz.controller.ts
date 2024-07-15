import { QuizService } from './../../services/quiz/quiz.service';
import { QuizValidationPipe } from './../../dtos/quiz.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return {
      status: true,
      statusCode: 200,
      message: 'Get all quizzes',
      data: [
        { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
        {
          id: 2,
          question: 'Who won the Nobel Prize in Literature in 2020?',
          answer: 'Jane Austen',
        },
      ],
    };
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  createQuiz(@Body() quiz: QuizValidationPipe) {
    return this.quizService.createQuiz(quiz);
  }
}
