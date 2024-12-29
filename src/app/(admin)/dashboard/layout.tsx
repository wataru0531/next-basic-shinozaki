

// adminグループのレイアウト
// このようにルートグループを使うと、(main)/taskの方にはこのレイアウトは継承されない。
// → urlのパスは並列だけど違うlayout.tsxを設定したい時に便利

// 参考記事 https://zenn.dev/chot/articles/next-layout-for-admin-page

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  
  return(
    <div>
      <div className="bg-green-300 p-4">Adminレイアウト</div>
      { children }
    </div>
  )
}

export default AdminLayout;
