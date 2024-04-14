import React from 'react'
import { useState } from 'react'
import { Row , Form,Button, Col } from 'react-bootstrap'
import { question } from './data'

 function FormInput({onAdd , notify}) {        
    const[qu,setQu]= useState('')
    const[an,setAn]= useState('')
    const addNewItem =()=>{
        if(qu ===" "||an ===""){
            notify("برجاء ادخال البيانات" ,"Error")
            return;
        }
        question.push({id: Math.ceil(Math.random()*100 ), q :qu ,a:an})
        setAn('')
        setQu('')
        onAdd();

    }
  return (
    <Row className='my-3'>
            <Col sm="5">
                <Form.Control  className='my-3 py-2' value={qu} onChange={(e)=>setQu(e.target.value)} type="text" placeholder="اخل السؤال" />
            </Col>
            <Col sm="5">
                <Form.Control  className='my-3 py-2' value={an} onChange={(e)=>setAn(e.target.value)} type="text" placeholder="اخل الأجابه" />
            </Col>
            <Col sm="2">
                <Button   onClick={addNewItem} className='w-100 my-3 py-2' variant="primary" type="submit">
                    الأضافه
                </Button>
            </Col>
    </Row>
  )
}
export default FormInput