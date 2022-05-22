import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Link } from 'react-router-dom';

function App() {
	const [blogs, setBlogs] = useState({});

  const fetchData = async () => {
    const result = await axios(`${process.env.REACT_APP_API}/blogs`);
    setBlogs(result.data);
  };

	useEffect(() => {
    fetchData();
	}, []);
	return (
		<div className='container p-5'>
			<NavbarComponent />

			<h1>Home</h1>
			<pre>{JSON.stringify(blogs)}</pre>
      {
        blogs.data ? blogs.data.map(blog => (
          <div className='row' key={blog._id}>
            <div className="col pt-3 pb-2 shadow-s">
              <a href={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
              </a>
              <p>{blog.content.substring(0, 250)}</p>
              <p>ผู้เขียน: {blog.author}, เผยแพร่ {new Date(blog.createdAt).toLocaleString()}</p>
              <hr />
            </div>
          </div>
        ))
        : <p>ไม่พบบทความ</p>
      }
		</div>
	);
}

export default App;
