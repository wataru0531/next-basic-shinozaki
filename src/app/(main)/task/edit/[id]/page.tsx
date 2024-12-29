

// task > edit > idページ

// http://localhost:3000/task/edit/3

// const EditTaskPage = (props) => {
  // console.log(props)
  // { params: { id: '3' }, searchParams: {} }

const EditTaskPage = ({ params: { id } }: { params: { id: string } }) => {
  // 分割代入でparamsオブジェクトを取得して、その後にparamsオブジェクトからidを取得
  

  return(
    <h1>EditTaskPage: { id }ページ</h1>
  )
}

export default EditTaskPage;
