// Hide navbar when clicked
document.addEventListener('DOMContentLoaded', function() {
    const  navbarToggler = document.querySelector('.navbar-toggler');
    const  navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
          navbarToggler.click();
        }
      });
    });
});



// tabs start
document.addEventListener('DOMContentLoaded', function(){
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');
  const btn4 = document.getElementById('btn-4');

  const tab1 = document.getElementById('part-1');
  const tab2 = document.getElementById('part-2');
  const tab3 = document.getElementById('part-3');
  const tab4 = document.getElementById('part-4');

  function resetButtons() {
    [btn1, btn2, btn3, btn4].forEach(btn => {
      btn.style.background = '';
      btn.style.color = '';
    });
  }

  function hideTabs() {
    [tab1, tab2, tab3, tab4].forEach(tab => {
      tab.style.display = 'none';
    });
  }

  btn1.addEventListener('click', function(){
    resetButtons();
    hideTabs();
    btn1.style.background = 'black';
    btn1.style.color = 'white';
    tab1.style.display = 'block';
  });

  btn2.addEventListener('click', function(){
    resetButtons();
    hideTabs();
    btn2.style.background = 'black';
    btn2.style.color = 'white';
    tab2.style.display = 'block';
  });

  btn3.addEventListener('click', function(){
    resetButtons();
    hideTabs();
    btn3.style.background = 'black';
    btn3.style.color = 'white';
    tab3.style.display = 'block';
  });

  btn4.addEventListener('click', function(){
    resetButtons();
    hideTabs();
    btn4.style.background = 'black';
    btn4.style.color = 'white';
    tab4.style.display = 'block';
  });

  // Set initial state
  hideTabs();
  tab1.style.display = 'block'; // Show the first tab by default
  btn1.style.background = 'black'; // Set first button as active
  btn1.style.color = 'white';
});
// tabs End

