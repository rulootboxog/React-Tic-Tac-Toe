export function onRequest(context) {
  let headers = new Headers();
  var name = headers.get("name")
  return new Response("Hello " + name)
  }