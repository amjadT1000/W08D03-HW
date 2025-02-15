const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dbAdmin:Twuiq1000@cluster0.tve7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const seedBook = require("./book_seed");
const seedAuthor = require("./author_seed");
const Author = require("./author");
const Book = require("./book");


Author.find({ gender: "male" }, (err, authors) => {
  console.log(" male", authors);
});
Author.find({ age: { $gt: 44 } }, (err, authors) => {
  console.log(" authors that age grater than 44", authors);
});
Author.find({ nationality: "kuwait" }, (err, authors) => {
  console.log("Kuwait", authors);
});


Book.find({ name: /^l/i }, (err, books) => {
  console.log("starts with L or l", books);
});

Book.find({ pages: { $gt: 250 } }, (err, books) => {
  console.log("books with +250 pages", books);
});

Book.find({ pages: { $gt: 250 } }, (err, books) => {
  console.log("books with +250 pages", books);
});

Author.find(
  { $or: [{ nationality: "Kuwait" }, { nationality: "Saudi Arabia" }] },
  (err, authors) => {
    console.log("Kuwait OR Saudi", authors);
  }
);


Author.find(
  { books: { $size: { $gt: 3 } }, age: { $gt: 35 } },
  (err, authors) => {
    console.log("Authors with +3 books and age +35", authors);
  }
);


Author.find({ age: { $exists: true } }, (err, authors) => {
  console.log("do not have a key of age", authors);
});

Author.find({ nationality: { $not: "Saudi Arabia" } }, (err, authors) => {
  console.log("are not from Saudi Arabia", authors);
});
