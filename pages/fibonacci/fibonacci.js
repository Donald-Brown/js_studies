const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

$(function () {
  $("#button").click(function () {
      let num = parseInt($("#fibInput").val());
      if (isNaN(num) || num <= 0) {
          $("#result").val("must be number > 0");
      } else {
          $("#result").val(fib(num));
      }
  }); // end click
}); // end ready
