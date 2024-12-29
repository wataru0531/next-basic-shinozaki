

// クライアントコンポーネント

"use client"

function ClientComponent(){
  // サーバーでもブラウザでもレンダリングされている
  console.log("client component")

  return(
    <h1>ClientComponent</h1>
  )
}

export default ClientComponent;
