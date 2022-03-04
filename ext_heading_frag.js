// from https://docs.gitlab.com/ee/user/markdown.html#header-ids-and-links
const fragify = htext => htext.toLowerCase().
    replace(/\W/g, m => (m == " " || m == "-") ? "-" : "").replace(/-+/, "-");
astManip.push(doc => {
    const walker = doc.walker();
    let ev, htext, inh;
    while (ev = walker.next()) {
        if (ev.node.type == "heading") {
            if (ev.entering) {
                inh = true;
                htext = "";
            } else {
                inh = false;
                htext = fragify(htext);
                // <a id="fragment" href="#fragment">§</a>
                createNodes([["text", ` `], ["html_inline", `</a>`], ["text", `§`],
                    ["html_inline", `<a id="${htext}" href="#${htext}">`]]).
                    forEach(n => ev.node.prependChild(n));
            }
        } else if (inh && (ev.node.type == "text"  || ev.node.type == "code")) {
            htext += ev.node.literal;
        }
    }
    return doc;
});
astManip[astManip.length - 1].displayName = "Heading fragments";
