import React, { useState } from 'react';

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

	return (
		<div className='container p-5'>
			<pre>{JSON.stringify(state)}</pre>
			<h1>เขียนบทความ</h1>
			<form action=''>
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
