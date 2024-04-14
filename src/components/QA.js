import React from 'react'
import { Accordion, Button, Row  } from 'react-bootstrap'
import { question } from './data'

 const QA=({data ,deleteItem})=> {
    const dataLocal =JSON.parse(localStorage.getItem("items"))
    const onDeleteItem=(ID)=>{
        if(localStorage.getItem("items") !=null){
            const index = question.findIndex((item)=>item.id ===ID)
            question.splice(index,1)
            deleteItem(question)
        }
    }
  return (
    <Row>

    <Accordion className='py-4' defaultActiveKey="0" flush>
        {
            localStorage.getItem("items") !=null ? (dataLocal.map((item ,index)=>{
                return(<Accordion.Item key={index} eventKey={item.id}>

            <Accordion.Header>  السؤال :- {item.q}</Accordion.Header>
            <Accordion.Body className='text-end'>
            <div> الأجابه : {item.a}</div>
            <Button onClick={()=> onDeleteItem(item.id)} className='my-2'>حذف</Button>
            </Accordion.Body>
        </Accordion.Item>)
            })) : <h2> لايوجد أسئله الآن</h2>

            
        }
    </Accordion>
    </Row>
  )
}

export default QA
