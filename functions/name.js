export function onRequest(context) {
  let name
  name = headers.get('name');

  if (name != '') {
    return new Response("Hello " + {name});
  }
  else { return new Response("Hello Stranger")
  }
 }