import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class QuizValidationPipe {
  @Length(10, 20)
  @IsNotEmpty({ message: 'Please enter the title' })
  title: string;
  @MinLength(10)
  @IsNotEmpty({ message: 'Please enter the question' })
  question: string;
  @IsNotEmpty()
  @MinLength(3)
  answer: string;
}
