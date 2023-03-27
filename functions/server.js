export function onRequest(context) {
  let headers = new Headers();
  var server = headers.get("server")
   console.log(new Map(headers));
  return new Response("Hello " + server + " user.")
  }