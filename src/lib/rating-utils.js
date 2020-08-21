export const convert = (from, to) => value => {
    const max = Math.max(from, to);
    const min = Math.min(from, to);

    return roundHalf((min/max) * value);
}

function roundHalf(num) {
    return -(Math.round(-num*2).toFixed()/2);
}