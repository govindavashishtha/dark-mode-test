export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';

export const setIsDarkMode = (isDark) => {
  return {
    type: SET_IS_DARK_MODE,
    payload: isDark,
  };
};