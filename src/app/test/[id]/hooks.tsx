import { useReducer } from 'react';

enum ActionType {
  Open,
  Close,
}

interface ExamStateInterface {
  isModalOpen: boolean;
  currentQuestionIndex: number;
}

interface ActionOpenModal {
  type: ActionType.Open;
}
const initialState: ExamStateInterface = {
  isModalOpen: false,
  currentQuestionIndex: 0,
};

export function reducer(
  state: ExamStateInterface = initialState,
  action: ActionOpenModal,
): ExamStateInterface {
  const { type } = action;

  if (type === ActionType.Open) {
    return {
      ...state,
      isModalOpen: true,
    };
  }

  throw Error('Unknown action.');
}

export const useBasketState = (): {
  state: ExamStateInterface;
} => {
  const [state] = useReducer(reducer, initialState);

  return {
    state,
  };
};
