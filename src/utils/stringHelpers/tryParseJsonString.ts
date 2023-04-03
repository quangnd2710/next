const tryParseJsonString = <T = string>(value: any, validate?: (value: T | null) => boolean): T | null => {
  if (typeof value !== 'string') return null;
  try {
    const val = JSON.parse(value.trim()) as T;
    if (typeof validate === 'function') {
      return validate(val) === true ? val : null;
    }
    return val;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default tryParseJsonString;
