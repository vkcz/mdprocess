astManip.push(doc => {
    const walker = doc.walker(); let ev;
    while (ev = walker.next()) {
        if (ev.entering && ev.node.type == "code_block" && ev.node.info) {
            // <span class="lang">infostring</span>
            createNodes([["html_inline", `<span class="lang">`],
                ["text", ev.node.info], ["html_inline", `</span>`]]).
                forEach(n => ev.node.insertBefore(n));
        }
    }
    return doc;
});
astManip[astManip.length - 1].displayName = "Display info strings";
