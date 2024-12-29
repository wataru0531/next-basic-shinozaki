
// api

import { NextResponse } from "next/server";

export interface Task {
  id: number
  name: string
}

const tasks: Task[] = [
  { id: 1, name: "プログラミング" },
  { id: 2, name: "ランニング" }
];


const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Promise ... Promiseの返り値の型。ジェネリクス。
// Promise<void>とすることで、返り値の型はvoid。
// Promise<number>とすることで、返り値の型はnumber。

// ここでは何も返さずただ指定された秒数だけ実行を待機するだけなのでvoid。
// resolve() この実引数の値の型を指定

export const GET = async () => {
  await sleep(1000);

  return NextResponse.json({ tasks } , {
    status: 200
  })
}

export const dynamic = "force-dynamic";

