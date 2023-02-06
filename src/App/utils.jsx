export const appendWords = (path) => {
    const words = document.createElement('script');
    words.src = path;
    words.async = true;
    document.getElementById('polyglot').appendChild(words);
}