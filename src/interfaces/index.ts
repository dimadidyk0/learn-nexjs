export interface ExamQuestionI {
  title: string;
  options: string[];
  correctIndex: number;
}

export interface ExamI {
  tries: number;
  questions: ExamQuestionI[];
}
