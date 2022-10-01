
import './App.css';
function App() {
  return (
    <div >
    <form action="http://localhost:2022/user/addbooks" method="POST">
      <label htmlFor="authorName">Author Name</label>
      <br />
      <input type="text" name='author_name' id='authorName' />
      <br />
      <br />
      <br />
      <label htmlFor="BookTitle">Book Title</label>
      <br />
      <input type="text" id='BookTitle' name='book_Title'/>
      <br />
      <br />
      <br />
      <label htmlFor="bookName">Book Genre</label>
      <br />
      <input type="text" id='bookName' name='book_Genre' />
      <br />
      <br />
      <br />
      <label htmlFor="publication">Year oF Publication</label>
      <br />
      <input type="text" id='publication' name='published_year' />
      <br />
      <br />
      <button type='submit'>submit</button>
    </form>
    <form action="http://localhost:2022/user/remove" method='POST'>
      <h3>please insert the book title to be deleted</h3>
      <input type="text" name="titleToDelete" id="" />
      <button type="submit">Delete</button>
    </form>

    <form action="http://localhost:2022/user/edit" method="POST">
       <h3>choose what to edit</h3>
      <select name="editOptions" id="editOptionsId">
        <option value="author_name">Author Name</option>
        <option value="book_Title">Book Title</option>
        <option value="book_Genre">Book Genre</option>
        <option value="published_year">Year oF Publication</option>
      </select>
      <h3>Insert the previous value</h3>
          <input type="text" name="toBeUpdate" />
      <h3>Insert the value for updating</h3>
          <input type="text" name="updatedInput" />
      <button type="submit">Update</button>
      <br />
      <br />
      <br />
    </form>
    </div>
  );
};

export default App;
