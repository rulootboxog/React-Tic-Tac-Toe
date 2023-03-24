export function onRequest(context) {
  let headers = new Headers();
  let name = ''
  name = headers.get("name")
  return new Response("Hello " + name)
  }