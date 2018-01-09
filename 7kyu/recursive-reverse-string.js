function reverse(str) {
  if(str.length === 1){
    return str;
  }

  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("hello world"));
//  "dlrow olleh" (N = 11)

console.log(reverse("abcd"))
// "dcba" (N = 4)

console.log(reverse("12345"))
// "54321" (N = 5)
