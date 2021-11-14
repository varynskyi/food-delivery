const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')

    const renderItems = (data) => {
        data.forEach(cartItem => {
            console.log(cartItem);
        });
    }

    buttonCart.addEventListener('click', () => {
        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }
         modalCart.classList.add('is-open')
    })

    close.addEventListener('click', () => {
         modalCart.classList.remove('is-open')
    })    
}

cart()
