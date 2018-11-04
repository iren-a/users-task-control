export const getTodosLoading = (state) => state.processTodos.isLoaded;
export const getTodosProcessed = (state) => state.processTodos.isProcessedTodo;
export const getTodos = (state) => state.processTodos.todos;
export const getTodosError = (state) => state.processTodos.error;
