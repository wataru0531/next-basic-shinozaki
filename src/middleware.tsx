
// ミドルウェア

// これらは型にも使えるし、リクエスト、レスポンスに関するメソッドも保有している
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest): NextResponse => {
  console.log("middleware running!!")


  return NextResponse.next(); 
}

// middlewareの設定
export const config = {
  // matcher 一致される、照合させる。
  matcher: ["/", "/task"], // ルートページ、taskページのみmiddlewareを通過させる
}