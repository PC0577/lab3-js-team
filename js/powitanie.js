if (userName) { 
    const powitanie = document.createElement('p');
    powitanie.textContent = '1. Witaj, ' + userName;
    document.getElementById('skrypty').append(powitanie);
}