type Todo = {
  id:number,
  content :string;
  date:Date,
  done:boolean,
  deleted:boolean
};
type Todos ={
  icon:string,
  name:string,
  tasks:Todo[],
  colors:string[]
};
type TotalTodo = Todos[];