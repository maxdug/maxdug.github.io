document.getElementById('wordgate-form').addEventListener('submit', function checkPassword(e) {

  e.preventDefault();

  if (document.getElementById('uwm-input')

  && document.getElementById('uwm-input').value == 'givemeaccess') window.location.href = '/uwm/uwm.html';

  if (document.getElementById('citi-input')

  && document.getElementById('citi-input').value == 'givemeaccess') window.location.href = '/citi/citi.html';

});
