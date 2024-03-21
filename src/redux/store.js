import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../feature/count/count.js';
import ThemeSlice from '../feature/changeTheme/theme.js';

export default configureStore({
  // reducer là một bộ máy dùng để phân tích và tính cập nhập lại state
  reducer: {
    counter: counterSlice,

    theme: ThemeSlice,
  },
});
