export default {
  async fetch(request) {
    let headers = new Headers();
    var name = headers.get("name")
    console.log(new Map(headers.get("name")));
    return new Response("Hello " + name)
    },
  };