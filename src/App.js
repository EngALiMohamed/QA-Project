import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/formInput";
import QA from "./components/QA";
import { question } from "./components/data";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = (message , type) =>{
    if(type === "Success")
      toast.success(message)
      if(type === "Error")
      toast.error(message)
  }
  const [data ,setData]=useState(question)
  const addItem=()=>{
    notify("تم الأضافه بنجاح" ,"Success")
    localStorage.setItem("items",JSON.stringify([...question]))
    setData([...question])
  }
  const deleteAll=()=>{
    notify("تم حذف الكل بنجاح" ,"Success")
    localStorage.removeItem("items")
    question.splice(0,question.length)
    setData([])
  }
  const deleteItem=()=>{
    notify(" تم الحذف بنجاح" ,"Success")

    localStorage.setItem("items",JSON.stringify([...question]))
    setData([...question])
    if(question.length <= 0){
      deleteAll();
    }
  }
  return (
    <div className="text-center">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-4">سؤال وجواب</div>
          </Col>
          <Col sm="8" >
              <FormInput onAdd={addItem} notify={notify}/>
              <QA data={data} deleteItem={deleteItem}/>
              {
                localStorage.getItem("items") !=null ? (<Button onClick={deleteAll}>حذف الكل</Button>) : null
              }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
