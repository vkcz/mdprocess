textManip.push(t => t.replace(/\n( *)```table((\n[^\n`]*)*)\n( *)```/g,
    (m, p1, p2, p3) => `<table class="table" cellspacing="0">` + (p2 || "").split("\n").
        map(l => l.trim()).filter(l => l).
        map(l => l.split(/\s+/g).map(w => `<td>${w}</td>`).join("")).
        map(l => `<tr>${l}</tr>`).
        join("") + "</table>"));
textManip[textManip.length - 1].displayName = "Render table";
