import axios from 'axios'
import React from 'react'
import NavbarComponent from './NavbarComponent'
import { useState, useEffect } from 'react'

const SingleComponent = (props) => {
  const [blog, setBlog] = useState('');
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
    .then(res => {
      setBlog(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className='container p-5'>
      <NavbarComponent />
      <h2>{blog.title}</h2>
      <div className="pt-3" dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* render html */}
      <p>ผู้เขียน: {blog.author}, เผยแพร่ {new Date(blog.createdAt).toLocaleString()}</p>
      <code>
        <pre>{ JSON.stringify(blog, null, 2)}</pre>
      </code>
    </div>
  )
}

export default SingleComponent