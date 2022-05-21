import React, { useState } from 'react'

const FormComponent = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
    author: '',
  });

  const { title, content, author } = state;

  return (
    <div className="container p-5">
      <pre>{ JSON.stringify(state)}</pre>
      <h1>เขียนบทความ</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="">ชื่อบทความ</label>
          <input type="text" className="form-control" value={title} />
        </div>
        <div className="form-group">
          <label htmlFor="">บทความ</label>
          <textarea className="form-control" value={content}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="">ผู้เขียน</label>
          <input type="text" className="form-control" value={author}/>
        </div>
        <br/>
        <input type="submit" value="บันทึก" className='btn btn-primary' />
      </form>
    </div>
  );
}

export default FormComponent