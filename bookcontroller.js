const Book = require("./models/bookmodel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error("Failed to get books", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error("Failed to get the book", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  const { name, imageUrl, author, pages, price } = req.body;

  try {
    const book = new Book({ name, imageUrl, author, pages, price });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error("Failed to create the book", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl, author, pages, price } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { name, imageUrl, author, pages, price },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error("Failed to update the book", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Failed to delete the book", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
