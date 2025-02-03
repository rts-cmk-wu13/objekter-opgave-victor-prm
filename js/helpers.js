function highlightText(originalStr,highlightStr){
    return originalStr.replace(highlightStr,`<span class="header-highlight">${highlightStr}</span>`);
}