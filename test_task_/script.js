
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
    
    
    if (localStorage.getItem('formSubmitted')) {
        
        submitButton.disabled = true;
        submitButton.classList.add('disabled'); 
    }
    
    
    form.addEventListener('submit', function(event) {
        
        localStorage.setItem('formSubmitted', 'true');
    });

    const burgerMenu = document.querySelector('.burger__menu');
    const navContainer = document.querySelector('.nav__container');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navContainer.classList.toggle('active');
    });
    