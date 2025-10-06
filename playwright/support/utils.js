export function gerarULID() {
  const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  
  function encodeTime(time, len) {
    let str = "";
    for (let i = len - 1; i >= 0; i--) {
      str = ENCODING[time % 32] + str;
      time = Math.floor(time / 32);
    }
    return str;
  }

  function encodeRandom(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
      str += ENCODING[Math.floor(Math.random() * 32)];
    }
    return str;
  }

  const time = Date.now();
  return encodeTime(time, 10) + encodeRandom(16);
}

