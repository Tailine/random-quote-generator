
document.querySelector('#btn-quote').addEventListener('click', fetchQuote);
document.addEventListener('DOMContentLoaded', fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${Math.random()}`);
        const dataFetched = await response.json();
        const [ data ] = dataFetched;
        document.querySelector('blockquote').setAttribute('cite', `${data.link}`);
        document.querySelector('blockquote').innerHTML= data.content;
        document.getElementById('author').innerHTML = `- ${data.title}`;
    } catch(err) {
        alert('Sorry, something went wrong.');
        location.reload();
    }
}

/*
function getQuote() {
    const xhr = new XMLHttpRequest();
    //const randomNumber = Math.random();
    xhr.open('GET', `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${Math.random()}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            let quote = JSON.parse(this.responseText);
            document.querySelector('blockquote').setAttribute('cite', `${quote[0].link}`);
            document.querySelector('blockquote').innerHTML= quote[0].content;
            document.getElementById('author').innerHTML = `- ${quote[0].title}`;
        }
    };
    xhr.send();
} */