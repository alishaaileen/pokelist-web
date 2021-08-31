const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const mq = n => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media only screen and (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};