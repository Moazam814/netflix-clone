console.log('JavaScript loaded!');

const loginModal = document.getElementById('loginModal');
const myListSection = document.querySelector('#mylist .card-grid');
const addedItems = new Set();

function toggleLogin() {
  loginModal.style.display = loginModal.style.display === 'flex' ? 'none' : 'flex';
}

// Add to My List functionality
function addToList(id) {
  console.log('Trying to add id: ${id});)

  // Look for all cards on the page
  const allCards = document.querySelectorAll('.card');

  allCards.forEach(card => {
    const button = card.querySelector('button');
    const onclickAttr = button?.getAttribute('onclick');

    // Match the correct card and check if it's not already added
    if (onclickAttr && onclickAttr.includes(addToList('${id}')) && !addedItems.has(id)) {
      const clonedCard = card.cloneNode(true);
      const clonedButton = clonedCard.querySelector('button');
      if (clonedButton) clonedButton.remove(); // remove the button
      myListSection.appendChild(clonedCard);
      addedItems.add(id);

      // Optional: disable button on original card
      button.textContent = 'Added ✅';
      button.disabled = true;
      button.style.backgroundColor = '#555';
    }
  });
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};