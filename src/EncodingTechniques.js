const nrzL = (data) => {
  return data.split("").map((bit, index) => ({
    x: index,
    y: bit === "1" ? 0 : 50,
  }));
};

const nrzI = (data, initialValue) => {
  const points = [];
  let high = initialValue === 1;
  data.split("").forEach((bit, index) => {
    points.push({
      x: index,
      y: bit === "1" ? (high ? 50 : 0) : (high ? 0 : 50),
    });
    if (bit === "1") high = !high;
  });
  return points;
};

const bipolarAMI = (data, initialValue) => {
  const points = [];
  let high = initialValue === 1;
  data.split("").forEach((bit, index) => {
    points.push({
      x: index,
      y: bit === "1" ? (high ? 50 : 0) : 25,
    });
    if (bit === "1") high = !high;
  });
  return points;
};

const pseudoternary = (data, initialValue) => {
  const points = [];
  let high = initialValue === 1;
  data.split("").forEach((bit, index) => {
    points.push({
      x: index,
      y: bit === "0" ? (high ? 50 : 0) : 25,
    });
    if (bit === "0") high = !high;
  });
  return points;
};

const manchester = (data) => {
  return data.split("").map((bit, index) => ({
    x: index,
    y: bit === "1" ? 50 : 0,
    x2: index + 0.5,
    y2: bit === "1" ? 0 : 50,
  }));
};

const differentialManchester = (data, initialValue) => {
  const points = [];
  let previousY = initialValue === 1 ? 0 : 50;

  data.split("").forEach((bit, index) => {
    const currentY = bit === "0" ? (previousY === 0 ? 50 : 0) : previousY;
    const nextY = currentY === 0 ? 50 : 0;

    points.push({
      x: index,
      y: currentY,
      x2: index + 0.5,
      y2: nextY,
    });

    previousY = nextY;
  });

  return points;
};

export {
  nrzI,
  nrzL,
  bipolarAMI,
  differentialManchester,
  manchester,
  pseudoternary,
};
