const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoHamIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu); //show->solo se muestra una vez; toggle->varias veces
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoHamIcon.addEventListener('click', toggleCarritoAside); 


function toggleDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = DesktopMenu.classList.contains('inactive');


    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClose) {
        DesktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


const productList=[];
productList.push({
    name : 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
    name : 'laptop',
    price: 1100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})
productList.push({
    name : 'celular',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
})

renderCarts(productList);

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 
*/
function renderCarts(arr) {
    for(producto of arr){

        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
            const productImg = document.createElement('img');
            productImg.setAttribute('src', producto.image);
    
            const productInfo= document.createElement('div');
            productInfo.classList.add('product-info');
    
                const productInfoDiv= document.createElement('div');
                    const productPrice = document.createElement('p');
                    productPrice.innerHTML='$'+ producto.price;
                    const productName = document.createElement('p');
                    productName.innerHTML = producto.name;
                productInfoDiv.appendChild(productPrice);
                productInfoDiv.appendChild(productName);
    
    
                const productInfoFigure = document.createElement('figure');
                    const productInfoFigureImg = document.createElement('img');
                    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
                productInfoFigure.appendChild(productInfoFigureImg)
    
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
