let products = [

    {

        name: "Banana",
        description: "A yellow banana. some say its a berry",
        price: 9
    },

    {

        name: "apple",
        description: "a red apple, sweet and tasty",
        price: 7
    },

    {

        name: "orange",
        description:"an orange, its orange",
        price: "10"
    }
];

function showProducts() {

    let html = '';

    for(let product of products) {

        html += `
        <div class="product">
        <h2>${product.name}</h2>
        <div class="info">
        <p>${product.description}</p>
        <p>Pris: <b>${product.price}</b></p>
        </div>
        <button class="remove" data-product-name="${product.name}">Remove</button>
        <hr>
        </div>
        `;
    }

    document.querySelector('.products').innerHTML = html;
}


function handleEvents() {

    document.querySelector('body').addEventListener('click', function(event) {

        let productClicked = event.target.closest('.product');
        if(!productClicked) {return;}

        let infoproduct = productClicked.querySelector('.info');
        console.log(infoproduct);
        infoproduct.style.display = infoproduct.style.display === 'block' ? 'none' : 'block';

        let removeButton = event.target.closest('.remove');

        if(removeButton) {

            let productName = removeButton.getAttribute('data-product-name');
            products = products.filter((product) => product.name !== productName);
            productClicked.remove();
        }
    });
        let addProductForm = document.querySelector('#add-product-form');
        addProductForm.addEventListener('submit', function(event) {

            event.preventDefault();

            let name = document.querySelector('#name').value;
            let description = document.querySelector('#description').value;
            let price = Number(document.querySelector('#price').value);

            if(name && description && price) {
                let newProduct = {

                    name: name,
                    description: description,
                    price: price
                };

                products.push(newProduct);

                let productsDiv = document.querySelector('.products');
                productsDiv.innerHTML = '';
                showProducts();

                addProductForm.reset();

            }

            else {

                alert('Please fill in all fields')
            }

        });
    
}

showProducts();
handleEvents();