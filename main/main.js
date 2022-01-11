alert("ようこそ, ポケモンマスター羊の世界へ")
const textbox = document.getElementById("message")
function change() {
    window.location.href = 'savepage.html'; // ページ遷移
  }
player_name = inputValue
hituji_name = inputValue1


<!--名前入力フォームここに表示じゃなくて実際のゲームで使うコードの雛形-->
<form id="form1" action="#">
    <input type="text" id="input-name" value="名前を入力してください">
    <input type="button" onclick="showMessage()" value='決定'>
  </form>
  <p id="output-name"></p>
  <script language="javascript" type="text/javascript">
    const showMessage = () => {
      const textbox = document.getElementById("input-name");
      const inputValue = textbox.value;

      //テキストボックスの値を使って、出力するメッセージを生成する
      const output = "お主の名前は「" + inputValue + "」じゃな？";
      //出力用のp要素にメッセージを表示
      document.getElementById("output-name").innerHTML = output;
    }
  </script>