result_btn.onclick = function(){
  sound.play();
  if(proc_arr.length != 0){
    if(allproc_arr[allproc_arr.length-1] != 'p'){
      if(allproc_arr[allproc_arr.length-1] != 'n1'){
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
        screen_p.textContent = result + ' ';
        screen_p.style = "font-size: 25px";
        screen_res.textContent = '';
        number_1 = result;
        result = 0;
        proc_arr = false;
        pro_poin_var = false;
        poin_var2 = '0.';
        pro_sing_var = false;
        pro_kos_var = false;
        number_2 = 0;
        proc_arr = [];
        allproc_arr = [];
        proc_arr.push(number_1);
        allproc_arr.push('n1');
      }
    }
    else {
      alert('error');
    }
  }
}

del_btn.onclick = function(){
  sound.play();
  if(allproc_arr[allproc_arr.length-1] == 'p'){
    allproc_arr.pop();
    proc_arr.pop();
    for (var i=0;i<proc_arr.length;i++){
      if(allproc_arr[i] != 'r'){
        proc_arr_var[i] = proc_arr[i];
      }
    }
    screen_p.textContent = proc_arr_var.join(' ').toString();
    if(screen_p.textContent.length < 40){
      screen_p.style = 'font-size: 25px';
    }
    proc_arr_var = [];
    if(allproc_arr.indexOf('p') == -1){
      pros_exis = false;
      number_2 = 0;
    }
    else {
      for (var j=allproc_arr.length-1; j>=0;j--){
        if(allproc_arr[j] == 'p'){
          curr_pr = proc_arr[j];
           break;
        }
      }
      number_1 = proc_arr[proc_arr.length-4];
      number_2 = proc_arr[proc_arr.length-2];
    }
  }
  else if(allproc_arr[allproc_arr.length-1] == 'r'){
    allproc_arr.pop();
    proc_arr.pop();
    number_2 = proc_arr[proc_arr.length-1];
    var number_var = number_2.toString().split('');
    number_var.pop();
    if(number_var.length == 0){
      number_2 = 0;
      proc_arr.pop();
      allproc_arr.pop();
      if(allproc_arr.indexOf('r') != -1){
        for(var aa=allproc_arr.length-1;aa>=0;aa--){
          if(allproc_arr[aa] == 'r'){
            screen_res.textContent = proc_arr[aa];
             number_1 = proc_arr[aa];
            break;
          }
        }
      }
      else {
        screen_res.textContent = '';
        number_1 = proc_arr[0];
      }
    }
    else {
      var number_var2;
      if(number_var.length > 1){
        number_var2 = number_var.join('');
      }
      else {
        number_var2 = number_var;
      }
      number_var = Number(number_var2.toString());
      // alert(number_2_var);
      number_2 = number_var;
      proc_arr[proc_arr.length-1] = number_2;
      if(allproc_arr.indexOf('r') != -1){
        for (var iii=allproc_arr.length-1;iii>=0;iii--){
          if(allproc_arr[iii] == 'r'){
            number_1 = proc_arr[iii];
            break;
          }
        }
      }
      else {
        number_1 = proc_arr[0];
      }
      fresult(number_1,curr_pr,number_2);
    }
    for (var jj=0;jj<proc_arr.length;jj++){
      if(allproc_arr[jj] != 'r'){
        proc_arr_var[jj] = proc_arr[jj];
      }
    }
    screen_p.textContent = proc_arr_var.join(' ').toString();
    if(screen_p.textContent.length < 40){
      screen_p.style = 'font-size: 25px';
    }
    proc_arr_var = [];
  }
  else if(allproc_arr[allproc_arr.length-1] == 'n1'){
    if(number_1 < 10){
      number_1 = 0;
      proc_arr = [];
      allproc_arr = [];
      screen_p.textContent = '0';
    }
    else {
      var number_o_var = number_1.toString().split('');
      number_o_var.pop();
      var number_o_var2;
      if(number_o_var.length > 1){
        number_o_var2 = number_o_var.join('');
      }
      else {
        number_o_var2 = number_o_var;
      }
      number_o_var = Number(number_o_var2.toString());
      number_1 = number_o_var;
      proc_arr[0] = number_1;
      screen_p.textContent = number_1;
    }
  }
}

pro_add.onclick = function(){
  sound.play();
  if(pro_poin_var == true){
    pro_poin_var = false;
    poin_var2 = '0.';
  }
  if(pro_sing_var == true){
    pro_sing_var = false;
    screen_p.textContent += ') ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'r') {
    number_1 = result;
    number_2 = 0;
    proc_arr.push('+');
    allproc_arr.push('p');
    curr_pr = '+';
    screen_p.textContent += '+ ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'n1'){
    proc_arr.push('+');
    allproc_arr.push('p');
    curr_pr = '+';
    screen_p.textContent += '+ ';
    pros_exis = true;
  }
}
pro_min.onclick = function(){
  sound.play();
  if(pro_poin_var == true){
    pro_poin_var = false;
    poin_var2 = '0.';
  }
  if(pro_sing_var == true){
    pro_sing_var = false;
    screen_p.textContent += ') ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'r') {
    number_1 = result;
    number_2 = 0;
    proc_arr.push('-');
    allproc_arr.push('p');
    curr_pr = '-';
    screen_p.textContent += '- ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'n1'){
    proc_arr.push('-');
    allproc_arr.push('p');
    curr_pr = '-';
    screen_p.textContent += '- ';
    pros_exis = true;
  }
}
pro_dar.onclick = function(){
  sound.play();
  if(pro_poin_var == true){
    pro_poin_var = false;
    poin_var2 = '0.';
  }
  if(pro_sing_var == true){
    pro_sing_var = false;
    screen_p.textContent += ') ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'r') {
    number_1 = result;
    number_2 = 0;
    proc_arr.push('×');
    allproc_arr.push('p');
    curr_pr = '×';
    screen_p.textContent += '× ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'n1'){
    proc_arr.push('×');
    allproc_arr.push('p');
    curr_pr = '×';
    screen_p.textContent += '× ';
    pros_exis = true;
  }
}
pro_ksm.onclick = function(){
  sound.play();
  if(pro_poin_var == true){
    pro_poin_var = false;
    poin_var2 = '0.';
  }
  if(pro_sing_var == true){
    pro_sing_var = false;
    screen_p.textContent += ') ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'r') {
    number_1 = result;
    number_2 = 0;
    proc_arr.push('÷');
    allproc_arr.push('p');
    curr_pr = '÷';
    screen_p.textContent += '÷ ';
  }
  if(allproc_arr[allproc_arr.length-1] == 'n1'){
    proc_arr.push('÷');
    allproc_arr.push('p');
    curr_pr = '÷';
    screen_p.textContent += '÷ ';
    pros_exis = true;
  }
}

pro_sing.onclick = function(){
  sound.play();
  pro_sing_var = true;
  if(pros_exis == false){
    screen_p.textContent = '(- ';
    proc_arr.push('(-');
    allproc_arr.push('s');
  }
  else {
    screen_p.textContent += '(- ';
    proc_arr.push('(-');
    allproc_arr.push('s');
  }
}
pro_kos.onclick = function(){
  sound.play();
  if(pro_sing_var == true){
    pro_sing_var = false;
    screen_p.textContent += ') ';
  }
  if (pros_exis == false){
    
  }
  if(pro_kos_var == false){
    pro_kos_var = true;
    screen_p.textContent += '( ';
  }
  else {
    pro_kos_var = false;
    screen_p.textContent += ' )';
  }
}
pro_poin.onclick = function(){
  sound.play();
  if (pro_poin_var == false){
    pro_poin_var = true;
    screen_p.textContent += '.';
  }
}

btn_0.onclick = function(){sound.play();fnumber(0);}
btn_1.onclick = function(){sound.play();fnumber(1);}
btn_2.onclick = function(){sound.play();fnumber(2);}
btn_3.onclick = function(){sound.play();fnumber(3);}
btn_4.onclick = function(){sound.play();fnumber(4);}
btn_5.onclick = function(){sound.play();fnumber(5);}
btn_6.onclick = function(){sound.play();fnumber(6);}
btn_7.onclick = function(){sound.play();fnumber(7);}
btn_8.onclick = function(){sound.play();fnumber(8);}
btn_9.onclick = function(){sound.play();fnumber(9);}

function fnumber(num){
  if(pros_exis == false){
    if(number_1 == 0){
      if(pro_poin_var == true){
        poin_var2 += num;
        // alert(poin_var2);
        number_1 = Number(poin_var2);
        screen_p.textContent = poin_var2 + ' ';
      }
      else {
        number_1 = num;
        screen_p.textContent = num + ' ';
      }
      proc_arr[0] = number_1;
      allproc_arr[0] = 'n1';
    }
    else {
      if(pro_poin_var == true){
        var num1var = number_1.toString();
        if(num1var.indexOf('.') == num1var.lastIndexOf()){
          //alert('y');
          number_1 = number_1 + num / 10;
          num = number_1;
          screen_p.textContent = num + ' ';
        }
        else {
          num1var += num;
          number_1 = Number(num1var);
          num = number_1;
          screen_p.textContent = num + ' ';
        }
      }
      else {
        number_1 = number_1 * 10 + num;
        screen_p.textContent += num + ' ';
      }
      proc_arr[0] = number_1;
    }
  }
  else {
    
    // ......
    
    if(number_2 == 0){
      if(pro_poin_var == true){
        poin_var2 += num;
        number_2 = Number(poin_var2);
      }
      else {
        number_2 = num;
      }
      if(allproc_arr[allproc_arr.length-1] == 'p'){
        proc_arr.push(number_2);
        allproc_arr.push('n2');
        fresult(number_1,curr_pr,number_2);
        screen_p.textContent += num + ' ';
      }
      else {
        proc_arr[proc_arr.length-2] = number_2;
        fresult(number_1,curr_pr,number_2);
        if(pro_poin_var == true){
          proc_arr[proc_arr.length-2] = poin_var2;
        }
        for (var i=0;i<proc_arr.length;i++){
          if(allproc_arr[i] != 'r'){
            proc_arr_var[i] = proc_arr[i];
          }
        }
        screen_p.textContent = proc_arr_var.join(' ').toString() + ' ';
        if(screen_p.textContent.length > 40){
          screen_p.style = "font-size: 15px;";
        }
        if(screen_p.textContent.length > 100){
          if(allproc_arr[allproc_arr.length-1] != 'p')
            result_btn.click();
        }
        proc_arr[proc_arr.length-2] = number_2;
        proc_arr_var = [];
      }
    }
    
    // ......
    
    else {
      if(pro_poin_var == true){
        number_2 = proc_arr[proc_arr.length-2];
        poin_var2 = number_2.toString();
        if(poin_var2.indexOf('.') == -1){
          poin_var2 += '.' + num;
        }
        else {
          poin_var2 += num;
        }
        number_2 = Number(poin_var2);
      }
      else {
        number_2 = proc_arr[proc_arr.length-2];
        number_2 = number_2 * 10 + num;
      }
      if(allproc_arr[allproc_arr.length-1] = 'r'){
        proc_arr[proc_arr.length-2] = number_2;
        fresult(number_1,curr_pr,number_2);
        screen_p.textContent += num + ' ';
        if(screen_p.textContent.length > 40){
          screen_p.style = "font-size: 15px;";
        }
        if(screen_p.textContent.length > 100){
          if(allproc_arr[allproc_arr.length-1] != 'p')
            result_btn.click();
        }
      }
    }
  }
}

function fresult(n1,pr,n2){
  if(pr == '+'){
    result = n1 + n2;
  }
  if(pr == '-'){
    result = n1 - n2;
  }
  if(pr == '×'){
    result = n1 * n2;
  }
  if(pr == '÷'){
    result = n1 / n2;
  }
  screen_res.textContent = result;
  if(allproc_arr[allproc_arr.length-1] == 'n2'){
    proc_arr.push(result);
    allproc_arr.push('r');
  }
  else if((allproc_arr[allproc_arr.length-1] == 'r')||(allproc_arr[allproc_arr.length-1] == 'Infinity')){
    proc_arr[proc_arr.length-1] = result;
  }
}