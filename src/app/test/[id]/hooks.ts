import { useReducer, useCallback } from 'react';

enum EXAM_ACTION_TYPE {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  SET_CURRENT_QUESTION_INDEX = 'SET_CURRENT_QUESTION_INDEX',
}

interface ExamStateInterface {
  isModalOpen: boolean,
  currentQuestionIndex: number,
}

interface ActionOpenModal {
  type: EXAM_ACTION_TYPE.OPEN_MODAL;
}
const initialState: ExamStateInterface = {
  isModalOpen: false,
  currentQuestionIndex: 0,
};

export function reducer(
  state: ExamStateInterface = initialState,
  action: ActionOpenModal
): ExamStateInterface {
  const { type } = action;

  if (type === EXAM_ACTION_TYPE.OPEN_MODAL) {
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