document.querySelector('#btn-quote').addEventListener('click', getQuote);

document.addEventListener('DOMContentLoaded', getQuote);

function getQuote() {
    const xhr = new XMLHttpRequest();
    //const randomNumber = Math.random();
    xhr.open('GET', `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${Math.random()}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            let quote = JSON.parse(this.responseText);
            document.querySelector('blockquote').setAttribute('cite', `${quote[0].link}`);
            document.querySelector('blockquote').innerHTML= quote[0].content;
            document.getElementById('author').innerHTML = `- ${quote[0].title}`;
        }
    };
    xhr.send();
}