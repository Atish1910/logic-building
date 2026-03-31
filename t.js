// 4. Find the First Non-Repeating Character

const iStr = "atishatipshatishatish";
const iNonRepeatChar = iStr
  .split("")
  .find((ch) => iStr.indexOf(ch) == iStr.lastIndexOf(ch));
