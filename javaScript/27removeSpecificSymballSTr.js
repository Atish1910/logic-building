// "In JavaScript write a function that will remove the enclosing double quotes (") or single quotes (') at the beginning and end of a string if they are present. For example, if the string value is 'example', it returns example. If string is passed as, it returns as (quotes are removed)."

const iStr = "'atishhhh'";

function display(iStr) {
  iNewStr = "";
  for (let i = 0; i < iStr.length; i++) {
    if (iStr[i] == "'" || iStr[i] == '"') {
    } else {
      iNewStr = iNewStr + iStr[i];
    }
  }
  console.log(iNewStr);
}

display(iStr);
