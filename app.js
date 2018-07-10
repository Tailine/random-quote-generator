// Event Listeners
document.querySelector('#btn-quote').addEventListener('click', fetchQuote);
document.addEventListener('DOMContentLoaded', fetchQuote);
//document.querySelector('#twitter').addEventListener('click', shareQuote);

// fetch the data from API
async function fetchQuote() {
    try {
        const response = await fetch(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${Math.random()}`);
        const dataFetched = await response.json();
        displayQuote(dataFetched);
    } catch(err) {
        alert('Sorry, something went wrong.');
        location.reload();
    }
}

function displayQuote(dataFetched) {
    const [ data ] = dataFetched;  
    const quoteArea = document.querySelector('blockquote');
    const authorArea = document.getElementById('author');
    
    quoteArea.setAttribute('cite', `${data.link}`);
    quoteArea.innerHTML = data.content;
    authorArea.innerHTML = ` - ${data.title}`;
    
    setTwitterButton(quoteArea, authorArea);
}

function setTwitterButton(q, a) {
    const btnShare = document.querySelector('#twitter');
    const quote = q.textContent;
    const author = a.textContent;
    
    btnShare.setAttribute('href', `https://twitter.com/share?text=${quote}${author}`);
}

    