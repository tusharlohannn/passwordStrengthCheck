  let passwordInput = document.getElementById('passwordInput');
  passwordInput.addEventListener('input', ()=> {
    let count = 0;
    let password = passwordInput.value;
  if(password.length>=16){
    count++;
    document.getElementById('longer').innerHTML = 'is longer than 16 characters <img src="./resources/tick.svg" alt="">';
  }
  else{
    document.getElementById('longer').innerHTML = 'is longer than 16 characters <img src="./resources/cross.svg" alt="">';
  }
  if(/[A-Z]/.test(password) && /[a-z]/.test(password)){
    count++;
    document.getElementById('case').innerHTML = 'contains uppercase & lowercase letters <img src="./resources/tick.svg" alt="">';
  }
  else{
    document.getElementById('case').innerHTML = 'contains uppercase & lowercase letters <img src="./resources/cross.svg" alt="">';
  }
  if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)){
    count++;
    document.getElementById('special').innerHTML = 'contains special characters <img src="./resources/tick.svg" alt="">';
  }
  else{
    document.getElementById('special').innerHTML = 'contains special characters <img src="./resources/cross.svg" alt="">';
  }
  if(/\d/.test(password)){
    count++;
    document.getElementById('numbers').innerHTML = 'consists of numbers <img src="./resources/tick.svg" alt="">';
  }
  else{
    document.getElementById('numbers').innerHTML = 'consists of numbers <img src="./resources/cross.svg" alt="">';
  }


  if(count===4){
    document.getElementById('passwordStrength').innerHTML = 'Password Strength: <span class="veryStrong">Very Strong</span>';
  }
  else if(count===3){
    document.getElementById('passwordStrength').innerHTML = 'Password Strength: <span class="strong">Strong</span>';
  }
  else if(count===2){
    document.getElementById('passwordStrength').innerHTML = 'Password Strength: <span class="medium">Medium</span>';
  }
  else{
    document.getElementById('passwordStrength').innerHTML = 'Password Strength: <span class="weak">Weak</span>';
  }
  });
  