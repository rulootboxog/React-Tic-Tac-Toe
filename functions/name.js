export function onRequest(context) {
  let name
  name = headers.get('name');

  return new Response("Hello Stranger")
 }
 

 