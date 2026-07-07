Lumina cy

a blog-style web app where you can write, edit, and delete posts. built as a capstone project while learning Express and EJS.

posts are stored in memory so they reset when the server restarts.


how to run

npm install
node index.js
then go to localhost:3000


what it does

write a post from the home page (title + content)
view all your posts on /posts
click a post to open it in a modal
edit or delete from the three-dot menu inside the modal


built with

node.js + express
ejs for templating
vanilla css (dark theme, no frameworks)


routes

GET /              home page with the post form
GET /posts         list of all posts
POST /create       creates a post
POST /edit/:id     updates a post
POST /delete/:id   deletes a post


design

theme: dark mode with cool tones

text colors
  main text (titles, body, headings)         #e2e2e2
  subtitle text, descriptions, hints         #bbc9cf
  active nav link, accents                   #a8e8ff
  text on publish button                     #00586b
  secondary text (tags, metadata)            #c6c4df
  tertiary highlights                        #d5deff
  error messages                             #ffb4ab

background colors
  page background (body)                     #0f0f0f
  footer background                          #121414
  header/navbar background                   #1e2020
  form inputs, cards (raised surfaces)       #282a2b
  modal overlay background                   #0d0e0f
  publish button, glowing accents            #00d4ff
  dropdown menu background, badges           #47475d
  delete button background                   #93000a

border colors
  borders, dividers                          #859398
  subtle borders (header bottom, card edges) #3c494e

glass effect
  background: rgba(30, 30, 46, 0.4)
  backdrop-filter: blur(20px)
  border: 1px solid rgba(255, 255, 255, 0.08)
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.03)

fonts
  Hanken Grotesk — headlines and display text        https://fonts.google.com/specimen/Hanken+Grotesk
  Inter — body text and captions                     https://fonts.google.com/specimen/Inter
  Geist — labels, buttons, and nav links             https://fonts.google.com/specimen/Geist
  icons: Material Symbols Outlined                   https://fonts.google.com/icons

---

live demo: https://lumina-cy.onrender.com
