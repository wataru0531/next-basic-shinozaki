
// サーバーアクションの挙動確認

"use client";

import { useFormState, useFormStatus } from "react-dom";

import { createTask } from "@/actions/sampleActions";

// useFormState
// サーバー側から返された値をクライアント側で保持できるフック。
// サーバー側で起きたエラーをクライアント側で表示する時などに使用される

// useFormStatus
// → サーバーアクションの状態を取得
// 注意 

const ServerActionsPage = () => {
  // サーバーアクションズでフォームには存在しない値を送信
  // → taskIdを引数に持つ新しい関数を定義しておく
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId)

  // stateの初期状態を保持させる
  const initialState = { error: "" };

  const [ state, formAction ] = useFormState(createTaskWithTaskId, initialState);
  // console.log(state) // {error: 'エラーが発生しました。'}

  // サーバーアクションで通信中はボタンを非活性に。
  const SubmitButton = () => {
    // pending → サーバーアクションが実行中はtrue
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-100"
        disabled={ pending }
      >
        非活性ボタン
      </button>
    )
  }

  return(
    <div>
      <div>ServerActionsページ</div>

      {/* クライアントコンポーネントの場合はファイルを分けないといけない */}
      {/* <form action={ createTaskWithTaskId }> */}
      <form action={ formAction }>
        <input 
          type="text" 
          id="name" 
          name="name"  
          className="bg-gray-200"
        />

        <SubmitButton />

        {/* <button 
          // type="submit"
          className="bg-gray-400 ml-2 px-2"
        >
          Submit
        </button> */}

        <div className="mt-6 text-red-500">{ state?.error }</div>

      </form>

    </div>
  )
}

export default ServerActionsPage;