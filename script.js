// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sidebar a');
  
    items.forEach(item => {
      item.addEventListener('click', function (e) {
        // Prevent default anchor behavior
        e.preventDefault();
  
        // Remove the active class from all items
        items.forEach(i => {
          i.classList.remove('active');
        });
  
        // Add the active class to the clicked item
        this.classList.add('active');
      });
    });
  });
  