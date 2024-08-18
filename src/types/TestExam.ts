export interface TestExamInterface {
  tries: number;
  questions: {
    title: string;
    correctIndex: number;
    options: string[];
  }[];
}
