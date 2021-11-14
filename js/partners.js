const partners = () => {
    const cardsRestaurants = document.querySelector('.cards-restaurants')

    const renderItem = (data) => {
        data.forEach((item) => {
            const a = document.createElement('a')
            const { name, image, kitchen, price, products, stars, time_of_delivery } = item
            a.setAttribute('href', '/restaurant.html')
            a.dataset.products = products
            a.classList.add('card')
            a.classList.add('cards-restaurants')
            a.innerHTML = `
         <img src="${image}" alt="${name}" class="card-image" />
					    	<div class="card-text">
				    			<div class="card-heading">
						    		<h3 class="card-title">${name}</h3>
						    		<span class="card-tag tag">${time_of_delivery} мин</span>
					    		</div>
					    		<div class="card-info">
					    			<div class="rating">
					    				${stars}
					    			</div>
					    			<div class="price">От ${price} ₽</div>
					    			<div class="category">${kitchen}</div>
					    		</div>
				    		</div>  
            `
            a.addEventListener('click', (e) => {
                e.preventDefault()
                localStorage.setItem('restaurant', JSON.stringify(item))
                window.location.href = '/restaurant.html'
            })
            cardsRestaurants.append(a)
        })
    }

    fetch('./db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItem(data)
        })
        .catch((error) => {
            console.log(error);
        })

}

partners()