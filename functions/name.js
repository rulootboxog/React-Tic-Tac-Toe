let name = ''
name = headers.get('name')

export function onRequest(context) {
  return new Response("Hello " + name)
  }