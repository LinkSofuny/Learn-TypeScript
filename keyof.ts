interface _Person {
    name: string;
    age: number;
    location: string;
}
  
type K1 = keyof _Person & string; // "name" | "age" | "location"

type a<T> = {  
    [P in keyof T]: T[P];
}
type ccc = boolean
type b = Partial<_Person>

interface Hero {
    name: string;
    skill: string;
  }
  
const zed: Hero = { name: "影流之主", skill: "影子" };
type LOL = typeof zed; // type LOL = Hero
  

type TodoProperty = 'title' | 'description';

// type Todo = Record<TodoProperty, number>;
// =
// type Todo = {
//     title: string;
//     description: string;
// }

interface IGirl {
  name: string;
  age: number;
}

type allGirls = Record<string, IGirl>

interface Todo {
    title: string;
    description: string;
    done: boolean;
  }
  
  type TodoBase = Pick<Todo, "title" | "done">;
  
//   // =
//   type TodoBase = {
//       title: string;
//       done: boolean;
//   }
