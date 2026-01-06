// Simple scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 50) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});


/* KNOWLEDGE HUB SECTION */

  document.querySelector('.btn-primary').addEventListener('click', () => {
    alert('Load more posts from backend / CMS');
  });

/* KNOWLEDGE HUB SECTION */

/*  SHOP SECTION  */

  const filterButtons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      products.forEach(product => {
        if (filter === 'all') {
          product.style.display = 'block';
        } else {
          if (product.classList.contains(filter)) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        }
      });
    });
  });

/*  SHOP SECTION  */
