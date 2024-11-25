const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  renderLibrary();
}

function renderLibrary() {
  const library = document.getElementById('library');
  library.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <button onclick="toggleReadStatus(${index})" class="${book.isRead ? 'read' : 'not-read'}">
        ${book.isRead ? 'Read' : 'Not Read'}
      </button>
      <button onclick="removeBook(${index})" class="remove">Remove</button>
    `;
    library.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  renderLibrary();
}

function handleAddBook(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value, 10);
  const isRead = document.getElementById('isRead').checked;

  if (!title || !author || isNaN(pages)) {
    alert('Please fill out all fields correctly.');
    return;
  }

  if (pages < 0) {
    alert('Number of pages cannot be negative.');
    return;
  }

  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);
  closeModal();
}

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

myLibrary.push(
  new Book('Test', 'Test', 310, true),
  new Book('1Book', 'Bokk', 328, false),
);

renderLibrary();
