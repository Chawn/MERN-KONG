import React, { useState } from 'react';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import Swal from 'sweetalert2'
const FormComponent = () => {
	const [state, setState] = useState({
		title: '',
		content: '',
		author: '',
	});

	const { title, content, author } = state;

	// กำหนดค่าให้ State
	const inputValue=name=>event=> {
    setState({...state, [name]:event.target.value});
	};

  const submitForm = event => {
    event.preventDefault();
    // console.table(state);
    const api_url  = `${process.env.REACT_APP_API}/create`;
    axios
    .post(api_url, {title, content, author})
    .then(res => {
      Swal.fire(
        'สำเร็จ!',
        res.data.message,
        'success'
      )
      setState({...state, title:"", content:"", author:""})
      
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: err.response.data.message,
      })
    });
    
    // console.log(`API URL: ${process.env.REACT_APP_API}`);
  };
  
	return (
		<div className='container p-5'>
      <NavbarComponent/>
			<h1>เขียนบทความ</h1>
			<form action='' onSubmit={submitForm}>
				<div className='form-group'>
					<label htmlFor=''>ชื่อบทความ</label>
					<input
						type='text'
						className='form-control'
						value={title}
						onChange={inputValue('title')}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor=''>บทความ</label>
					<textarea
						className='form-control'
						value={content}
						onChange={inputValue('content')}
					></textarea>
				</div>
				<div className='form-group'>
					<label htmlFor=''>ผู้เขียน</label>
					<input
						type='text'
						className='form-control'
						value={author}
						onChange={inputValue('author')}
					/>
				</div>
				<br />
				<input type='submit' value='บันทึก' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default FormComponent;
