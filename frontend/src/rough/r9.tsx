import React from "react";
import { createContext ,useState} from "react";
interface Task {
    id: number;
    name: string;
}
interface TaskContextType {
    tasks: Task[];
    edittask: (id: number, taskName: string) => void;
    addtask: () => void;
    deletetask: () => void;
}

export const taskcontext = createContext<TaskContextType | null>(null);
const R9=({children})=>{
   
    
    const [tasks, setTask] = useState<Task[]>([]);
function edittask(id:number,taskName:string){
const newTask={...tasks}

const taskindex=tasks.findIndex((task)=>task.id==id);
tasks[taskindex]={
    id:id,
    name:taskName
}
setTask([...tasks]);
}
function addtask(){
    
}
function deletetask(){
    
}

    return (
        <taskcontext.Provider value={{tasks,edittask,addtask,deletetask}}>
            {children}
        </taskcontext.Provider>
    )
}
export default R9;