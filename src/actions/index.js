export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const resetCount = () => ({
  type: 'RESET_COUNT'
});

export const resetClicks = () => ({
  type: 'RESET_CLICKS'
});

export const changeCount = (newCount) => ({
  type: 'CHANGE_COUNT',
  payload: newCount
});

export const addNumber = (number) => ({
  type: 'ADD_NUMBER',
  payload: number
});