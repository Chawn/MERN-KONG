import React from 'react'

const FormComponent = () => {
  return (
    <div className="container p-5">
      <h1>เขียนบทความ</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="">ชื่อบทความ</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">บทความ</label>
          <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="">ผู้เขียน</label>
          <input type="text" className="form-control" />
        </div>
        <br/>
        <input type="submit" value="บันทึก" className='btn btn-primary' />
      </form>
    </div>
  );
}

export default FormComponent