export default {
    async fetch(request) {
      console.log(new Map(request.headers));
      return new Response("Hello world");
    },
  };