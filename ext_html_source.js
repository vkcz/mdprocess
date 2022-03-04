(function() {
    const dw = document.createElement("details");
    const sl = document.createElement("summary");
    sl.innerText = "output HTML source";
    const hp = document.createElement("pre");
    dw.append(sl);
    dw.append(hp);
    document.gebi("setup").append(dw);
    onDone.unshift(t => (hp.innerText = t));
})();
onDone[0].displayName = "Write HTML source";
