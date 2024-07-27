export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const idx in array) {
      newArray.push(`${appendString}${idx}`);
    }
  
    return array;
  }
