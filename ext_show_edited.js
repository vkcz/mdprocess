(function() {
    const dw = document.createElement("details");
    const sl = document.createElement("summary");
    sl.innerText = "interpreted Markdown";
    const hp = document.createElement("pre");
    dw.append(sl);
    dw.append(hp);
    document.gebi("setup").append(dw);
    textManip.push(t => (hp.innerText = t));
})();
textManip[textManip.length - 1].displayName = "Show interpreted Markdown";
