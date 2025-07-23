// Funcionalidades do Botão de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (whatsappButton) {
        // Adicionar evento de clique para tracking (opcional)
        whatsappButton.addEventListener('click', function(e) {
            // Analytics tracking (se necessário)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': 'Contact Button',
                    'value': 1
                });
            }
            
            // Log para debug
            console.log('WhatsApp button clicked');
        });
        
        // Adicionar animação de entrada após carregamento da página
        setTimeout(() => {
            whatsappButton.style.opacity = '1';
            whatsappButton.style.transform = 'translateY(0) scale(1)';
        }, 500);
        
        // Adicionar efeito de vibração no mobile quando tocado
        whatsappButton.addEventListener('touchstart', function() {
            if (navigator.vibrate) {
                navigator.vibrate(50); // Vibrar por 50ms
            }
        });
        
        // Melhorar acessibilidade - adicionar suporte para teclado
        whatsappButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                whatsappButton.click();
            }
        });
        
        // Adicionar tooltip dinâmico baseado no horário
        function updateTooltip() {
            const now = new Date();
            const hour = now.getHours();
            let tooltipText = "Fale conosco no WhatsApp";
            
            if (hour >= 9 && hour < 18) {
                tooltipText = "Estamos online! Fale conosco";
            } else if (hour >= 18 && hour < 22) {
                tooltipText = "Fale conosco - Respondemos em breve";
            } else {
                tooltipText = "Deixe sua mensagem - Respondemos amanhã";
            }
            
            whatsappButton.setAttribute('aria-label', tooltipText);
        }
        
        // Atualizar tooltip inicialmente e a cada hora
        updateTooltip();
        setInterval(updateTooltip, 3600000); // 1 hora
    }
});

// Função para personalizar a mensagem do WhatsApp baseada na página/contexto
function getWhatsAppMessage() {
    const baseMessage = "Olá! Tenho interesse em fazer uma encomenda dos seus deliciosos doces.";
    
    // Verificar se há itens no carrinho (se existir a funcionalidade)
    let cartMessage = "";
    if (typeof getCartItems === 'function') {
        const cartItems = getCartItems();
        if (cartItems && cartItems.length > 0) {
            cartMessage = " Tenho alguns itens no carrinho e gostaria de finalizar o pedido.";
        }
    }
    
    const fullMessage = baseMessage + cartMessage + " Gostaria de saber mais sobre os produtos disponíveis e valores. Obrigado!";
    
    return encodeURIComponent(fullMessage);
}

// Função para atualizar o link do WhatsApp dinamicamente (opcional)
function updateWhatsAppLink() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        const phoneNumber = "5547996756983";
        const message = getWhatsAppMessage();
        const newHref = `https://wa.me/${phoneNumber}?text=${message}`;
        whatsappButton.href = newHref;
    }
}

// Atualizar link quando a página carrega
document.addEventListener('DOMContentLoaded', updateWhatsAppLink);

// Atualizar link quando o carrinho muda (se aplicável)
document.addEventListener('cartUpdated', updateWhatsAppLink);

