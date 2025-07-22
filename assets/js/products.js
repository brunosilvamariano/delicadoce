// Produtos dinâmicos para Delicadoce
const products = {
    brigadeiros: [
        {
            id: 'caixinha-brigadeiro-tradicional',
            name: 'Brigadeiro Tradicional',
            description: '4 brigadeiros tradicionais, feitos com chocolate nobre e granulado belga.',
            price: 12.00,
            calories: 320,
            image: 'assets/images/brigadeiro_tradicional.jpg'
        },
        {
            id: 'caixinha-brigadeiro-coco',
            name: 'Brigadeiro de Coco (Beijinho)',
            description: '4 deliciosos brigadeiros de coco fresco, cobertos com coco ralado.',
            price: 12.00,
            calories: 340,
            image: 'assets/images/brigadeiro_coco.jpg'
        },
        {
            id: 'caixinha-brigadeiro-churros',
            name: 'Brigadeiro de Churros',
            description: '4 brigadeiros sabor churros, com doce de leite e açúcar com canela.',
            price: 12.00,
            calories: 350,
            image: 'assets/images/brigadeiro_churros.jpg'
        },
        {
            id: 'caixinha-brigadeiro-limao',
            name: 'Brigadeiro de Limão',
            description: '4 refrescantes brigadeiros de limão siciliano, deliciosos e cítricos.',
            price: 12.00,
            calories: 310,
            image: 'assets/images/brigadeiro_limao.jpg'
        }
    ],
    bolo_de_pote: [
        {
            id: 'bolo-pote-chocolate',
            name: 'Bolo de Pote de Chocolate',
            description: 'Camadas de bolo de chocolate com creme de chocolate, irresistível!',
            price: 8.50,
            calories: 280,
            image: 'assets/images/bolo_pote_chocolate.jpg'
        },
        {
            id: 'bolo-pote-morango',
            name: 'Bolo de Pote de Morango',
            description: 'Bolo de baunilha com creme e pedaços de morango fresco.',
            price: 9.00,
            calories: 260,
            image: 'assets/images/bolo_pote_morango.jpg'
        },
        {
            id: 'bolo-pote-doce-leite',
            name: 'Bolo de Pote de Doce de Leite',
            description: 'Bolo de baunilha com generosas camadas de doce de leite cremoso.',
            price: 8.80,
            calories: 290,
            image: 'assets/images/bolo_pote_doce_leite.jpg'
        },
        {
            id: 'bolo-pote-limao',
            name: 'Bolo de Pote de Limão',
            description: 'Refrescante bolo de limão com creme cítrico e raspas de limão.',
            price: 8.50,
            calories: 250,
            image: 'assets/images/bolo_pote_limao.jpg'
        }
    ],
    donuts: [
        {
            id: 'donut-chocolate',
            name: 'Donut de Chocolate',
            description: 'Donut macio coberto com chocolate cremoso e granulado colorido.',
            price: 6.50,
            calories: 320,
            image: 'assets/images/chococroc.jpg'
        },
        {
            id: 'donut-caramelo',
            name: 'Donut de Caramelo',
            description: 'Donut delicioso com cobertura de caramelo derretido e nozes.',
            price: 7.00,
            calories: 340,
            image: 'assets/images/chococroc_caramelo.jpg'
        },
        {
            id: 'donut-morango',
            name: 'Donut de Morango',
            description: 'Donut com cobertura de morango e pedacinhos de morango desidratado.',
            price: 6.80,
            calories: 310,
            image: 'assets/images/chococroc_morango.jpg'
        },
        {
            id: 'donut-doce-leite',
            name: 'Donut de Doce de Leite',
            description: 'Donut com cobertura cremosa de doce de leite argentino.',
            price: 6.80,
            calories: 330,
            image: 'assets/images/chococroc_doce_leite.jpg'
        }
    ],
    cento_brigadeiros: [
        {
            id: 'cento-brigadeiro-tradicional',
            name: 'Cento de Brigadeiro Tradicional',
            description: '100 brigadeiros tradicionais feitos com chocolate nobre, perfeitos para festas e eventos.',
            price: 280.00,
            calories: 8000,
            image: 'assets/images/brigadeiro_tradicional.jpg'
        },
        {
            id: 'cento-brigadeiro-misto',
            name: 'Cento de Brigadeiro Misto',
            description: '100 brigadeiros variados: tradicional, coco, churros e limão. Ideal para agradar todos os gostos.',
            price: 300.00,
            calories: 8200,
            image: 'assets/images/brigadeiro_coco.jpg'
        },
        {
            id: 'cento-brigadeiro-gourmet',
            name: 'Cento de Brigadeiro Gourmet',
            description: '100 brigadeiros gourmet com sabores especiais e decoração refinada para eventos especiais.',
            price: 350.00,
            calories: 8500,
            image: 'assets/images/brigadeiro_churros.jpg'
        }
    ]
};

// Função para renderizar produtos dinamicamente
function renderProducts(category) {
    const container = document.getElementById(category);
    if (!container || !products[category]) return;

    const productsGrid = container.querySelector('.row.g-4');
    if (!productsGrid) return;

    // Limpar produtos existentes
    productsGrid.innerHTML = '';

    // Renderizar novos produtos
    products[category].forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Função para criar card de produto
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-md-6';
    
    col.innerHTML = `
        <div class="menu-item-card">
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" class="food-photo">
            </div>
            <div class="item-content">
                <h3 class="item-title">${product.name}</h3>
                <p class="item-description">${product.description}</p>
                <div class="items-calories">
                    <p class="item-calories"><strong>${product.calories} kcal</strong> <i class="fas fa-info-circle nutrition-info-icon" onclick="showNutritionModal('${product.id}')" title="Informações Nutricionais"></i></p>
                </div>
                <div class="item-footer">
                    <span class="item-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add-to-cart" onclick="addToCart('${product.id}', ${product.price})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Função para obter produto por ID
function getProductById(productId) {
    for (const category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Inicializar produtos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar produtos para todas as categorias
    Object.keys(products).forEach(category => {
        renderProducts(category);
    });
});

