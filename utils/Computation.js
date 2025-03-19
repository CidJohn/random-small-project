export function safeEval(expression) {
  try {
    return new Function("return " + expression)();
  } catch (error) {
    return "Error";
  }
}
