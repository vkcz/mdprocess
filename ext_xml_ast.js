(function() {
    const dw = document.createElement("details");
    const sl = document.createElement("summary");
    sl.innerText = "output XML AST";
    const xp = document.createElement("pre");
    dw.append(sl);
    dw.append(xp);
    document.gebi("setup").append(dw);
    let cmx = new commonmark.XmlRenderer();
    astManip.push(doc => [(xp.innerText = cmx.render(doc)), doc][1]);
    astManip[astManip.length - 1].displayName = "Show constructed AST";
})();
