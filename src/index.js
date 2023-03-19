import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInCompleteList(inputText);
};

//未完了リストへ追加するの関数
const createInCompleteList = (text) => {
  //liタグを生成
  const li = document.createElement("li");
  li.className = "list-row";

  //pタグを生成
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "item-title";

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親要素を未完了から削除
    const completeTarget = completeButton.parentNode;
    // document.getElementById('incomplete-list').removeChild(completeTarget);
    deleteFromIncompleteList(completeButton.parentNode);

    //自分
    //押された完了ボタンの親要素を未完了から完了したTodoへ移動
    // const completeArea = document.getElementById('complete-list');
    // completeArea.appendChild(completeTarget);

    // //移動先では、完了・削除ボタンを外す
    // completeTarget.removeChild(completeButton);
    // completeTarget.removeChild(deleteButton);

    //  //代わりに、戻すボタンを付与
    //  const backButton = document.createElement('button');
    //  backButton.innerText = '戻す';
    //  completeTarget.appendChild(backButton);

    //答え合わせ
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //p以下を初期化
    addTarget.textContent = null;

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    p.className = "item-title";

    //戻すボタンを付与
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //押された戻るボタンの親要素を完了リストから削除
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      //押された戻るボタンのTodo内容テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      //取得した内容以外を書き換えて未完了リストに追加
      createInCompleteList(text);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を未完了から削除
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById('incomplete-list').removeChild(deleteTarget);
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了のリストから指定された要素の削除する関数
const deleteFromIncompleteList = (Target) => {
  document.getElementById("incomplete-list").removeChild(Target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
