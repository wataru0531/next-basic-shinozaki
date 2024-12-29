

// taskページ

import type { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET", // GETは省略可
    cache: "no-store" // ssr。cache skipとなる
  })

  // console.log(response)
  return await response.json();
}

const TaskPage = async () => {

  // const tasks: Task[]  = (await getTasks()).tasks;
  const tasks  = (await getTasks()).tasks as Task[];
  // console.log(tasks) // [ { id: 1, name: 'プログラミング' }, { id: 2, name: 'ランニング' } ]
  // 型アサーションを使う理由
  // response.json()が返すデータが何であるか、TypeScriptは正確には知らない。
  // そのため、デフォルトでは、そのデータはunknownまたはanyとして扱われる。
  // これでは、後続のコードでそのデータに対して型チェックや補完が働かなくなり、
  // 型安全性が損なわれてしまう。
  
  return(
    <div>
      <h1>Taskページ</h1>
      { 
        tasks.map((task) => {
          return(
            <div key={ task.id }>
              <h3>name: { task.name }</h3>
            </div>
          )
        })
      }

    </div>
  )
}

export default TaskPage;