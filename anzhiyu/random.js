var posts=["2024/11/03/hello-world/","2024/11/04/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };