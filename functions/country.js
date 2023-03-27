export function onRequest(context) {
  let headers = new Headers();
  var country = headers.get("cf-ipcountry")
   console.log(new Map(headers));
  return new Response("Hello " + country + " user.")
  }