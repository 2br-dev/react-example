export default function reduser(state = [], action) {
    switch (action.type) {
      case 'FETCH_USER':
        return action.payload       
        
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
}