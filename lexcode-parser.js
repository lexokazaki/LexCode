// LexCode JavaScript Sample Parser
function parseLexCode(code) {
  const pattern = /^LX([A-Z]{2})([1-6])([a-z])([1-6])-([a-z]{2}\+[a-z]{2})@([a-zA-Z0-9_]+)((\+[a-z]{2})*)$/;
  const match = code.match(pattern);
  if (!match) return null;
  
  return {
    emotion: match[1],
    intensity: parseInt(match[2]),
    nuance: match[3],
    expression: parseInt(match[4]),
    symbolicGesture: match[5],
    target: match[6],
    modifiers: match[7] ? match[7].split('+').filter(Boolean) : []
  };
}

// Example
console.log(parseLexCode("LXHC2w3-ri+pb@child+dn+rb")); // Custom robot gesture with rear balance
