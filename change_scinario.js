document.getElementById("change_scene")
var current_id=0;
var current_data=[];
var target = "くっちー"

disp_scenario();

function disp_scenario(){
  var result = scinario_data.filter(function(value){
    if (value.id==current_id) return true;
  })
  if(result.length==0){return;}

  current_data=result[0];
  document.forms.fl.choice1.value = current_data.choice[0].text;
  if(current_data.choice.length>=2){
    document.forms.fl.choice2.value = current_data.choice[1].text;
    document.forms.fl.choice2.style.visibility = "visible";
  }else{
    document.forms.fl.choice2.style.visibility = "hidden";
  }if (current_data.choice.length>=3){
    document.forms.fl.choice3.value = current_data.choice[2].text;
    document.forms.fl.choice3.style.visibility = "visible";
  }else{
    document.forms.fl.choice3.style.visibility = "hidden";
  }
  bcg.src = "../images/"+current_data.img;

  if (current_data.id == 2){
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("value", "初期表示");
    player_name = window.prompt("ユーザー名を入力してください", "");
    current_data.msg = "なるほど!"+player_name+"というんだな！次に初めてふれる羊の名前を教えてくれ!";
  }
  if(current_data.id == 3){
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("value", "初期表示");
    hituji_name = window.prompt("羊の名前を入力してください", "");
  }
  //入力した羊の名前でシナリオ内の仮称くっちーを置き換えたいけどうまくいった
  if(current_data.id>4){
    current_data.msg = current_data.msg.replace("くっちー", hituji_name);
  }
  msg.innerHTML = current_data.msg;
}

function change_scenario(selectno) {
   current_id = current_data.choice[selectno].goto;
   disp_scenario();
}