const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }
// Information to reach API
const apiKey = '11c22e4158ef4ab691830bccf59a3db5';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
