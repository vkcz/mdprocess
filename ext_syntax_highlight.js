(function() {
    window.Prism = window.Prism || {};
    Prism.manual = true;
    const PRISM_FILES = ["prism.js"];
    PRISM_FILES.map(x => {
        const e = document.createElement("script");
        e.src = x;
        return e;
    }).forEach(e => document.body.append(e));
    onDone.push(_html => {
        Prism.highlightAllUnder(document.gebi("outpdoc"));
    });
})();
onDone[onDone.length - 1].displayName = "Prism syntax highlighting";
