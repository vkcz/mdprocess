const nthchild = (node, n) => {
    let c = node.firstChild;
    for (let i = 1; i < n; i++) {
        if (!c) {
            return null;
        }
        c = c.next;
    }
    return c;
};
// conta, contb should be functions to produce `Node`s
const insertAt = (na, nb, inds, conta, contb) => {
    // c will be a list, containing items with lists at their ends
    let c = na;
    let nc;
    for (const ni of inds) {
        nc = nthchild(c, ni);
        if (!nc) {
            c.appendChild(conta());
            nc = c.lastChild;
        }
        if (!nc.lastChild || nc.lastChild.type != contb.type) {
            nc.appendChild(contb());
        }
        nc = nc.lastChild;
        c = nc;
    }
    c.parent.prependChild(nb);
};
const newBulletList = () => {
    const r = new commonmark.Node("list");
    r.listType = "bullet";
    r.listTight = true;
    r.listStart = 1;
    return r;
};
const newBulletItem = () => {
    const r = new commonmark.Node("item");
    return r;
};
astManip.push(doc => {
    const walker = doc.walker();
    let ev, htext, inh;
    let snum = [];
    const tocn = newBulletList();
    while ((ev = walker.next())) {
        if (ev.node.type == "heading") {
            if (ev.entering) {
                inh = true;
                htext = "";
            } else {
                inh = false;
                const fh = fragify(htext);
                if (ev.node.level > snum.length) {
                    (new Array(ev.node.level - snum.length)).fill(1).
                        forEach(o => snum.push(o));
                } else {
                    snum[ev.node.level - 1]++;
                }
                snum = snum.slice(0, ev.node.level);
                const nic = new commonmark.Node("item");
                const nlink = new commonmark.Node("link");
                const nt = new commonmark.Node("text");
                nt.literal = snum.join(".") + " " + htext;
                nlink.appendChild(nt);
                nlink.destination = "#" + fh;
                nic.appendChild(nlink);
                insertAt(tocn, nlink, snum, newBulletItem, newBulletList);
            }
        } else if (inh && (ev.node.type == "text" || ev.node.type == "code")) {
            htext += ev.node.literal;
        }
    }
    if (tocn.firstChild) {
        doc.prependChild(tocn);
        createNodes([
            ["html_inline", `</h3>`],
            ["text", `Contents`],
            ["html_inline", `<h3 class="pretoc">`],
        ]).forEach(n => doc.prependChild(n));
    }
    return doc;
});
astManip[astManip.length - 1].displayName = "Table of contents";
