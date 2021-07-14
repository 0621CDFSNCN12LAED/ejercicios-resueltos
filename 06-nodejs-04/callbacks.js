function agregarHTTP(url) {
  return "http://" + url;
}

const agregarHTTPS = (url) => {
  return "https://" + url;
};

function procesar(urls, callback) {
  const result = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    result.push(callback(url));
  }
  console.log(url);
  return result;
}

console.log(procesar(["google.com.ar", "digitalhouse.com.ar"], agregarHTTP));
console.log(procesar(["instagram.com", "pinterest.com"], agregarHTTPS));
