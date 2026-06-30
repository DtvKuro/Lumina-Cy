import express from "express";

const app = express();
const port = 3000;
let posts = [];
let id = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/", (req, res) => {
  res.render("index.ejs", {
    homepage: "active",
    postpage: ""
  });
})
app.get("/posts", (req, res) => {
  res.render("posts.ejs", {
    posts : posts,
    homepage: "",
    postpage: "active"
  })
})
app.post("/create", (req, res) => {
  id++;
  let usertitle = req.body["title"]
  let usercontent = req.body["content"] 
  posts.push({id: id, title: usertitle, content: usercontent});

  res.redirect("/");
})

app.post("/edit/:id", (req, res) => {                                                                                                                                                                                                                                                                                                      // req.params.id gives you the :id from the URL               
  let post = posts.find(p => p.id == req.params.id);
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/posts");
 });

app.post("/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect("/posts");  
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}.`);
});