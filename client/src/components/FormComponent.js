import React, { useState, useEffect } from 'react';
import { authenticate, getUsername } from '../services/authorize';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormComponent = (props) => {
	const [state, setState] = useState({
		title: '',
		author: getUsername(),
	});
	const { title, author } = state;
	
	const [content, setContent] = useState('');

	// กำหนดค่าให้ State
	const inputValue = name => event => {
		setState({ ...state, [name]: event.target.value });
	};


	const submitForm = event => {
		event.preventDefault();
		// console.table(state);
		const api_url = `${process.env.REACT_APP_API}/create`;
		axios
			.post(api_url, { title, content, author })
			.then(res => {
				Swal.fire('สำเร็จ!', res.data.message, 'success');
				setState({ ...state, title: '', author: '' });
				setContent('');
			})
			.catch(err => {
				Swal.fire({
					icon: 'error',
					title: err.response.data.message,
				});
			});

		// console.log(`API URL: ${process.env.REACT_APP_API}`);
	};

	useEffect(() => {
		!getUsername() && props.history.push('/');
	}, []);

	return (
		<div className='container p-5'>
			<NavbarComponent />
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
				<input type='submit' value='บันทึก' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default FormComponent;
