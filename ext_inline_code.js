{
    const inlineTransforms = {
        Raw: t => t,
    };
    textManip.push(t => t.replace(/`([A-Z][a-z]+):([^`]*)`/g, (m, p1, p2) =>
        (inlineTransforms[p1] || inlineTransforms.Raw)(p2 || "")));
    textManip[textManip.length - 1].displayName = "Transform inlines";
}
