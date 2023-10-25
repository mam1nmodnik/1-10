// Валидация авторизации
  
    $('#form-validation').click(function(e) {
        
      e.preventDefault();

      const form = e.target.closest('.div'),
      inputs = form.querySelectorAll('.input');
    
     const data = {},
      errors = {};
      const regexes = {
        email: new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
        password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[\\]{};\'":\\\\|,.<>/?]).{8,}$'),
        name: new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
        lastName:new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
        phone: new RegExp('^(\\+7|8)\\d{3}\\d{3}\\d{2}\\d{2}$'),   
      };
          
          form.querySelectorAll('.message').forEach(el => {
            el.remove();
          });
          
          inputs.forEach(input => {
              input.classList.remove('invalid');
              data[input.name] = input.value;
            if (!input.value.trim()) {
              errors[input.name] = 'Поле не может быть пустым';
              let message = `<span class="message invalid">${errors[input.name]}</span>`;
              if(input.closest('.box')){
                input.closest('.box').insertAdjacentHTML('beforeend', message);
              }
              input.classList.add('invalid');
              input.value = ''; 
              let newControl = input.cloneNode( true )
              input.replaceWith(newControl);
            } else if (regexes[input.name] && !regexes[input.name].test(input.value)) {

              errors[input.name] = 'Поле заполнено некорректно';
              let message = `<span class="message invalid">${errors[input.name]}</span>`;
              if(input.closest('.box')){
                input.closest('.box').insertAdjacentHTML('beforeend', message);
              }
              input.classList.add('invalid');
              input.value = ''; 
              let newControl = input.cloneNode( true )
              input.replaceWith(newControl);
            }
           });
             
          if (Object.keys(errors).length > 0) {
            return false;
          };
          location.href = 'student/profile-student.html'
    })


// Валидация регистрации

    $('#form-validation-reg').click(function(e) {
        
      e.preventDefault();

      const form = e.target.closest('.div'),
      inputs = form.querySelectorAll('.input');
    
     const data = {},
      errors = {};
      const regexes = {
        email: new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
        password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[\\]{};\'":\\\\|,.<>/?]).{8,}$'),
        name: new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
        lastName:new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
        phone: new RegExp('^(\\+7|8)\\d{3}\\d{3}\\d{2}\\d{2}$'),   
      };
          
          form.querySelectorAll('.message').forEach(el => {
            el.remove();
          });
          
          inputs.forEach(input => {
              input.classList.remove('invalid');
              data[input.name] = input.value;
            if (!input.value.trim()) {
              errors[input.name] = 'Поле не может быть пустым';
              let message = `<span class="message invalid">${ errors[input.name] }</span>`;
              if(input.closest('.box')){
                input.closest('.box').insertAdjacentHTML('beforeend', message);
              }
              input.classList.add('invalid');
              input.value = ''; 
              let newControl = input.cloneNode( true )
              input.replaceWith(newControl);
            } else if (regexes[input.name] && !regexes[input.name].test(input.value)) {

              errors[input.name] = 'Поле заполнено некорректно';
              errors[input.name.phone] = 'Номре должен быть написан слитно';
              let message = `<span class="message invalid">${ errors[input.name] }</span>`;
    
              if(input.closest('.box')){
                input.closest('.box').insertAdjacentHTML('beforeend', message);
              }
              input.classList.add('invalid');
              input.value = ''; 
              let newControl = input.cloneNode( true )
              input.replaceWith(newControl);
            }
           });
             
          if (Object.keys(errors).length > 0) {
            return false;
          };
          location.href = 'index.html'
    })
    
 // Валидация профиля

  $('#form-validation-users').click(function(e) {
      
    e.preventDefault();

    const form = e.target.closest('.div-8'),
    inputs = form.querySelectorAll('.input');
  
   const data = {},
    errors = {};
    const regexes = {
      email: new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
      password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[\\]{};\'":\\\\|,.<>/?]).{8,}$'),
      name: new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
      lastName:new RegExp('^[A-Za-zА-Яа-я\\s\'-]+$'),
      phone: new RegExp('^(\\+7|8)\\d{3}\\d{3}\\d{2}\\d{2}$'),   
    };
        
        form.querySelectorAll('.message').forEach(el => {
          el.remove();
        });


        let resName = document.querySelector('.text-wrapper');
        let resEmail = document.querySelector('.text-wrapper-2');
        let inputName;
        let inputLastName; 
        let inputEmail;
        

        inputs.forEach(input => {
            input.classList.remove('invalid');
            data[input.name] = input.value;

          if (!input.value.trim()) {
            errors[input.name] = 'Поле не может быть пустым';
            let message = `<span class="message invalid">${ errors[input.name] }</span>`;
            if(input.closest('.box')){
              input.closest('.box').insertAdjacentHTML('beforeend', message);
            }
            input.classList.add('invalid');
            input.value = ''; 
            let newControl = input.cloneNode( true )
            input.replaceWith(newControl);
          } else if (regexes[input.name] && !regexes[input.name].test(input.value)) {

            errors[input.name] = 'Поле заполнено некорректно';
            errors[input.name.phone] = 'Номре должен быть написан слитно';
            let message = `<span class="message invalid">${ errors[input.name] }</span>`;
  
            if(input.closest('.box')){
              input.closest('.box').insertAdjacentHTML('beforeend', message);
            }
            input.classList.add('invalid');
            input.value = ''; 
            let newControl = input.cloneNode( true )
            input.replaceWith(newControl);
          }    

            if(input.name == 'name' ){
              inputName = input.value;
            }
            if(input.name == 'lastName' ){
              inputLastName = input.value
            }
            if(input.name == 'email' ){
              inputEmail = input.value
            }  

        });
            
        if (Object.keys(errors).length > 0) {
          return false;
        };
        resName.innerHTML = ` ${ inputName  + ' ' + inputLastName } `;
        resEmail.innerHTML = ` ${ inputEmail } `;
    })
    
  
  
  