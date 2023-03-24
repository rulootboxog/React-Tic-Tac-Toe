let name = ''
name = request.headers.get('name')

export function onRequest(context) {
  return new Response("Hello " + name)
  }