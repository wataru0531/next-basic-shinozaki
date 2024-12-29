

// サーバーアクションズファイル
// 任意で名前をつけることが可能

"use server ";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number, 
  state: FormState, 
  formData: FormData
) => {
  // DBにタスクを作成
  console.log("タスクを作成しました")
  // console.log(formData); // [Symbol(state)]: [{ name: '$ACTION_ID_1db784b0d3160f5f5d887fefb049ef1ffd767c67',value: ''},{ name: 'name', value: 'だよ' }]}

  // 取得方法
  // console.log(formData.get("name"))

  // 
  // console.log(taskId);

  state.error = "エラーが発生しました。"

  return state;
}

