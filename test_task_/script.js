
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(event) {
        this.value = this.value.replace(/\D/g, ''); 
    });

  
    phoneInput.addEventListener('input', function(event) {
        let phoneNumber = this.value.replace(/\D/g, ''); 
        phoneNumber = phoneNumber.substring(0, 11); 
        let formattedPhoneNumber = '+7 (' + phoneNumber.substring(1, 4) + ') ' + phoneNumber.substring(4, 7) + '-' + phoneNumber.substring(7, 9) + '-' + phoneNumber.substring(9);
        this.value = formattedPhoneNumber;
    });


    const form = document.querySelector('.form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Проверяем, была ли форма уже отправлена ранее
    if (localStorage.getItem('formSubmitted')) {
        // Если да, делаем кнопку отправки формы недоступной для нажатия
        submitButton.disabled = true;
        submitButton.classList.add('disabled'); // Добавляем класс для стилизации неактивной кнопки
    }
    
    // Обработчик события отправки формы
    form.addEventListener('submit', function(event) {
        // При отправке формы сохраняем информацию о ее отправке в локальное хранилище
        localStorage.setItem('formSubmitted', 'true');
    });