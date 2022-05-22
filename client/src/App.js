import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function App() {
	const [blogs, setBlogs] = useState({});

  const fetchData = async () => {
    const result = await axios(`${process.env.REACT_APP_API}/blogs`);
    setBlogs(result.data);
  };

	useEffect(() => {
    fetchData();
	}, []);
  
  const deleteBlog = (slug) => {
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`)
    .then(res => {
      Swal.fire(
        'ลบบทความสำเร็จ!',
        '',
        'success'
      )
      fetchData();
    })
    .catch(err => {
      Swal.fire(
        'ลบบทความไม่สำเร็จ!',
        'กรุณาลองใหม่อีกครั้ง',
        'error'
      )
    })
  }
  const confirmDelete = (slug) =>{
    Swal.fire({
      title: 'คุณต้องการลบบทความนี้หรือไม่?',
      text: "หากลบแล้วจะไม่สามารถกู้คืนได้!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ลบบทความ',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      console.log(result);
      if (result.value) {
        deleteBlog(slug);
      }
    })

    
  
  }
  // const removeBlog = async (id) => {
  //   setBlogs(blogs.filter(blog => blog.id !== id));
  //   // await remove(id);
  //   // fetchData();
  // };

	return (
		<div className='container p-5'>
			<NavbarComponent />

			<h1>Home</h1>
      {
        blogs.data ? blogs.data.map(blog => (
          <div className='row' key={blog._id}>
            <div className="col pt-3 pb-2 shadow-s">
              <a href={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
              </a>
              <div class="pt-3" dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 250) }} /> {/* render html */}
              <p>ผู้เขียน: {blog.author}, เผยแพร่ {new Date(blog.createdAt).toLocaleString()}</p>
              <a href={`/blog/edit/${blog.slug}`} className='btn btn-outline-secondary me-2'>
                แก้ไข
              </a>
              <button className='btn btn-outline-danger' onClick={ () => confirmDelete(blog.slug) }>
                ลบ
              </button>
              <hr />
            </div>
          </div>
        ))
        : <p>ไม่พบบทความ</p>
      }
      <code>
			  <pre>{JSON.stringify(blogs, null, 2)}</pre>
      </code>
		</div>
	);
}

export default App;
