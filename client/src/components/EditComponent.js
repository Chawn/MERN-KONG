import React, { useState, useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditComponent = props => {
	const [state, setState] = useState({
		title: '',
		author: '',
		slug: '',
	});
	
	const { title, author, slug  } = state;
	
	const [content, setContent] = useState('');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
			.then(res => {
				// setBlog(res.data.data);
				const { title, content, author, slug } = res.data.data;
				setState({ ...state, title, author, slug });
				setContent(content);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const showUpdateForm = () => (
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
				<ReactQuill
						value={content}
						onChange={setContent}
						theme='snow'
						className='pb-5 mb-3'
						placeholder='เขียนบทความ'
					/>
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
			<input type='submit' value='อัพเดทข้อมูล' className='btn btn-primary' />
		</form>
	)

	// กำหนดค่าให้ State
	const inputValue = name => event => {
		setState({ ...state, [name]: event.target.value });
	};

	const submitForm = event => {
		event.preventDefault();
		const api_url  = `${process.env.REACT_APP_API}/blog/${slug}`;
		axios
		.put(api_url, {title, content, author})
		.then(res => {
		  Swal.fire(
		    'สำเร็จ!',
		    res.data.message,
		    'success'
		  )
			const { title, content, author, slug } = res.data.data;
			setState({ ...state, title, content, author, slug });
		})
		.catch(err => {
		  Swal.fire({
		    icon: 'error',
		    title: err.response.data.message,
		  })
		});
		console.log(`API URL: ${process.env.REACT_APP_API}`);
	};

	return (
		<div className='container p-5'>
			<NavbarComponent />
			<h1>แก้ไขบทความ</h1>
			{ showUpdateForm() }
			<code>
				<pre>{JSON.stringify(state, null, 2)}</pre>
			</code>
		</div>
	);
};

export default EditComponent;
