export function onRequest(context) {
  let headers = new Headers();
  var name = 
   console.log(new Map(headers));
  return new Response("Hello " + headers.get("name"))
  }