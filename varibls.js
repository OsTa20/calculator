let menu = document.getElementById('menu');
let menu_d = document.getElementById('menu_d');
let screen_p = document.getElementById('screen_p');
let screen_res = document.getElementById('screen_res');
let clearall = document.getElementById('clearall');
let del_btn = document.getElementById('del_btn');
let btn_0 = document.getElementById('btn_0');
let btn_1 = document.getElementById('btn_1');
let btn_2 = document.getElementById('btn_2');
let btn_3 = document.getElementById('btn_3');
let btn_4 = document.getElementById('btn_4');
let btn_5 = document.getElementById('btn_5');
let btn_6 = document.getElementById('btn_6');
let btn_7 = document.getElementById('btn_7');
let btn_8 = document.getElementById('btn_8');
let btn_9 = document.getElementById('btn_9');
let pro_add = document.getElementById('pro_add');
let pro_min = document.getElementById('pro_min');
let pro_dar = document.getElementById('pro_dar');
let pro_ksm = document.getElementById('pro_ksm');
let pro_sing = document.getElementById('pro_sing');
let pro_kos = document.getElementById('pro_kos');
let pro_poin = document.getElementById('pro_poin');
let result_btn = document.getElementById('result_btn');
let dark = document.getElementById('dark');
let sound = document.getElementById('sound');

let pro_sing_var = false;
let pro_kos_var = false;
let pro_poin_var = false;
let poin_var2 = '0.';

var menu_var = 0;
menu.onclick = function(){
  if(menu_var == 0){
    menu.textContent = '><';
    menu_d.style = "visibility: visible;width: 150px";
    menu_var = 1;
    dark.style.display = 'block';
  }
  else{
    menu.textContent = '|||';
    menu_d.style = "visibility: hidden;width: 0";
    menu_var = 0;
    dark.style.display = 'none';
  }
}

let date = new Date().toLocaleString();
let historyday = [];
let history = [];
clearall.onclick = function(){
  sound.play();
  if(localStorage.lhistory == undefined){
    history.push(screen_p.textContent);
    historyday.push(date);
    localStorage.lhistory = history;
    localStorage.lhistoryday = historyday;
  }
  else {
    history = localStorage.lhistory.split(',');
    historyday = localStorage.lhistoryday.split(',');
    history.push(screen_p.textContent);
    historyday.push(date);
    localStorage.lhistory = history;
    localStorage.lhistoryday = historyday;
  }
  screen_p.textContent = '0';
  screen_res.textContent = '';
  pros_exis = false;
  pro_poin_var = false;
  poin_var2 = '0.';
  pro_sing_var = false;
  pro_kos_var = false;
  proc_arr = [];
  allproc_arr = [];
  number_1 = 0;
  number_2 = 0;
}

let number_1 = 0;
let number_2 = 0;
let curr_pr = '';
let pros_exis = false;
let proc_arr = [];
let proc_arr_var = [];
let allproc_arr = [];
let result = 0;