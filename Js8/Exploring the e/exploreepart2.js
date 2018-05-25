const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter - Mouseleave
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);

// Mouse Over
// card.addEventListener('mouseover', runEvent);

// Mouse Out
// card.addEventListener('mouseout', runEvent);

// Mouse Move
card.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}