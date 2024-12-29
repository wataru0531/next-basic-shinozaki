

const TaskLayout = ({ children }: { children: React.ReactNode }) => {

  return(
    <div>
      <div className="p-4 bg-blue-300">Taskレイアウト</div>
      { children }
    </div>
  )
}

export default TaskLayout;