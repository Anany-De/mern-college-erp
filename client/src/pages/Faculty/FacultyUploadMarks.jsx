import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {DataGrid} from '@material-ui/data-grid'

import styled from 'styled-components'
import FacultyNavbar from '../../components/FacultyNavbar'

import {Person,CalendarToday,Search,Class} from '@material-ui/icons'

const Container = styled.div` 
width:100%;
box-sizing:border-box;
background-color: rgb(255, 255, 255);
display:flex;
flex-direction:column;
border-left: 1px solid rgba(0, 0, 0, 0.158);
height: 100vh;
`
const Heading = styled.h1` 
font:400 2rem;
padding:0.5vmax; 
box-sizing:border-box;
color:#0077b6;
transition: all 0.5s;
margin: 2rem;
text-align: center;
border-bottom:1px solid #0077b6;
`
const Form = styled.form` 
width:100%;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
padding: 3vmax;
background-color: white;
`

const FormItemContainer  = styled.div` 
display:flex;
justify-content:center;
width: 100%;
`
const FormItem = styled.div` 
display: flex;
align-items: center;
margin: 2rem;
>input{
    padding:1vmax 4vmax;
    padding-right:1vmax;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    font: 300 0.9vmax;
    outline: none;
}
>select{
    padding:1vmax 4vmax;
    padding-right:1vmax;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 4px;
    font: 300 0.9vmax;
    outline: none;
}
>svg{
    position:absolute;
    transform:translateX(1vmax);
    font-size:1.6vmax; 
    color:rgba(0,0,0,0.623)
}
`

const Button = styled.button` 
    border-radius: 10px;
    border:none;
    background-color: #0077b6;
    font: 400 1vmax;
    color: white;
    text-decoration: none;
    padding: 0.5vmax;
    width: 30%;
    margin: 4vmax;
    text-align: center;
    cursor:pointer;
`


const FacultyUploadMarks = () => {

    const columns = [
        {field:"id",headerName:"No.",flex:0.2},
        {field:"code",headerName:"Registration Number",flex:0.5},
        {field:"name",headerName:"Name",flex:0.5},
        {field:"year",headerName:"Marks",flex:0.3,type:"number",sortable:false,
        renderCell:(params) => {
            return(
                <>
                <input type="text" style={{outline:"none",border:"none"}} placeholder="Enter marks"/>
                </>
            )
        }},
    ]

    const subjects = [
        {no:1,code:12345,name:"Shifon Shaikh",email:"abc123@gmail.com",marks:""},
        {no:2,code:12345,name:"Rahul Yadav",email:"abc123@gmail.com",marks:""},
        {no:3,code:12345,name:"Disha Patani",email:"abc123@gmail.com",marks:""},
        {no:4,code:12345,name:"Rakesh Mali",email:"abc123@gmail.com",marks:""},
        {no:5,code:12345,name:"Raj Aryan",email:"abc123@gmail.com",marks:""},
    ]

    const rows = [];
    subjects.forEach((item) => {
        rows.push({
            id:item.no,
            code:item.code,
            name:item.name,
            total:item.marks
        })
    })


  return (
    <>
    <FacultyNavbar/>
    <Container>
        <Form>
            <Heading>Upload Marks</Heading>
            <FormItemContainer>
            <FormItem>
                <Class/>
                <select>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </FormItem>
            <FormItem>
                <Class/>
                <select>
                    <option>Unit Test 1</option>
                    <option>Unit Test 2</option>
                    <option>Semester</option>
                </select>
            </FormItem>

            </FormItemContainer>
            <FormItemContainer>
            <FormItem>
                <Person/>
                <select>
                    <option>C.S.E</option>
                    <option>E.C.E</option>
                    <option>I.T</option>
                    <option>Civil</option>
                    <option>Mechanical</option>
                </select>
            </FormItem>
            <FormItem>
                <CalendarToday/>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </FormItem>
           
            </FormItemContainer>
            <Button type="submit">
                Search
            </Button>
        </Form>
        <DataGrid rows={rows} columns={columns} pageSize={5} disableSelectionOnClick autoHeight/>
    </Container>
    </>
  )
}

export default FacultyUploadMarks