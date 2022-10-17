// question 1
const blocks = [
  {
    gym: false,
    school: true,
    store: false
  },
  {
    gym: true,
    school: false,
    store: false
  },
  {
    gym: true,
    school: true,
    store: false
  },
  {
    gym: false,
    school: true,
    store: false
  },
  {
    gym: false,
    school: true,
    store: true
  }
];
let max = 0;
for (let index = 0; index < blocks.length; index++) {
  const pre = getSet(blocks[index - 1] || []);
  const cur = getSet(blocks[index]);
  const nex = getSet(blocks[index + 1] || []);
  if (blocks[index].length === cur) {
    max = index;
    break;
  } else if (cur && pre && nex && pre >= cur && nex >= cur) {
    max = index;
  }
}
function getSet(obj) {
  return Object.keys(obj).filter((x) => obj[x] === true).length;
}
// console.log(max);

//question 2
let builds = [
  [true, true, true, false, false],
  [true, true, true, true, false],
  [true, true, true, true, true, true, false, false, false],
  [true, false, false, false, false],
  [true, false],
  [true, true, true, true, false, false]
];
let buildpercent = [];
for (var i = 0; i < builds.length; i++) {
  for (var j = 0; j < builds[i].length; j++) {
    if (builds[i][j] === false || builds[i][builds[i].length - j]) {
      let pent =
        (builds[i][j].length -
          (builds[i][j] === false ? builds[i].length - j : j)) /
        builds[i].length;
      console.log(builds[i].length - j + 1, j + 1);

      buildpercent.push(Math.round(pent * 100));
      break;
    }
  }
}
console.log(buildpercent);
