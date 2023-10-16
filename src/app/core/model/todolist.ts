interface TodoList {
  id: string;
  title: string;
  description: string;
  state: number;
  is_favorite: boolean;
  create_at: string;
  latitude: number;
  longitude: number;
}

export default TodoList
