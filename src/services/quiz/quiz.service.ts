import { QuizValidationPipe } from './../../dtos/quiz.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getQuiz(): string {
    return "Here's a quiz for you: What is the capital of France?";
  }

  getQuizById(id: number): string {
    return `Here's the quiz for id ${id}: Who won the Nobel Prize in Literature in 2020?`;
  }

  getAllQuiz(): Array<string> {
    return [
      "Here's a quiz for you: What is the capital of France?",
      "Here's the quiz for id 2: Who won the Nobel Prize in Literature in 2020?",
    ];
  }

  createQuiz(quiz: QuizValidationPipe) {
    return {
      message: 'Quiz has been created successfully',
      data: quiz,
    };
  }
}
