function switchMode() {
    var theme = document.getElementsByTagName('link')[0];
    if (document.getElementById("dot").classList.contains("dot-dark")) {
        document.getElementById("dot").classList.remove("dot-dark");
        document.getElementById("dot").classList.add("dot-light");
    } else {
        document.getElementById("dot").classList.remove("dot-light");
        document.getElementById("dot").classList.add("dot-dark");
    }
    if (theme.getAttribute('href') == 'dark.css') {
        theme.setAttribute('href', 'light.css');
    } else {
        theme.setAttribute('href', 'dark.css');
    }
}