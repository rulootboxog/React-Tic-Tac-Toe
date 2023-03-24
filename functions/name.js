export function onRequest(context) {
  let headers = new Headers();
  var name = headers.get("name")
   console.log(new Map(headers));
  return new Response("Hello " + name)
  }