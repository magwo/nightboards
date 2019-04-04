
function addCss(file) {
    const link = document.createElement("link");
    link.href = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName( "head" )[0].appendChild( link );
}

function getUrlTokens() {
    parts = window.location.hash.replace("#", "").split(",");
    const obj = {};
    parts.forEach(part => {
        const [key, value] = part.split("=");
        obj[key] = value;
    });
    return obj;
}

function getRequestedBoardUrl() {
    return `boards/${getUrlTokens()["board"]}.html`;

}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function addHtml(url) {
    const contentEl = document.getElementById("content");
    contentEl.innerHTML = await fetchHtmlAsText(url);
}