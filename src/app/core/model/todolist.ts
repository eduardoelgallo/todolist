interface TodoList {
  id: string ;
  title: string;
  description: string;
  state: number;
  is_favorite: boolean;
  created_at: string | null;
  latitude: number;
  longitude: number;
}

export default TodoList
