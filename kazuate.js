let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let w = document.querySelector('p');		
w.remove();
// 入力回数（予想回数）
let b = document.querySelector('#kaitou');
b.addEventListener('click', hantei);
let kaisu = 1;

function hantei() {
	let i = document.querySelector('input[kazu="seisu"]');
	let yoso = i.value;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  if(kaisu < 5){
    if(yoso === kotae){
      let p4 = document.querySelector('p#result');
      p4.textContent = "正解です．おめでとう!";
      console.log("正解です．おめでとう!");
    }else if(yoso < kotae){
      let p4 = document.querySelector('p#result');
      p4.textContent = "まちがい、答えはもっと大さいですよ";
    }else{
      let p4 = document.querySelector('p#result');
      p4.textContent = 'まちがい、答えはもっと小さいですよ';
    }
    kaisu = kaisu + 1;
  }else{
      let p4 = document.querySelector('p#result');
      p4.textContent = "答えは" + kotae + "でした．すでにゲームは終わっています";
      kaisu = kaisu + 1;
  }
}

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
//function hante() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール