let o;
var s = r => {
    if (!o) {
        const n = r.forwardRef(({
            color: i = "currentColor",
            size: e = 24,
            ...t
        }, l) => r.createElement("svg", {
            ref: l,
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: i,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...t
        }, r.createElement("line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12"
        }), r.createElement("polyline", {
            points: "12 5 19 12 12 19"
        })));
        n.displayName = "ArrowRight", o = n
    }
    return o
};
export {
    s as
    default
};