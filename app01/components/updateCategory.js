"use client" ; 
import React,{ useState } from 'react'; 
import {TextField, Box, Button, Modal, Typography } from '@mui/material'; 
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined'; 
const style = { 
 position: 'absolute', 
 top: '50%', 
 left: '50%', 
 transform: 'translate(-50%, -50%)', 
 width: 550, 
 height: 400, 
 maxHeight: 450, 
 bgcolor: 'background.paper',
 border: '2px solid #000', 
 boxShadow: 24, 
 color: '#000', 
 borderRadius: '20px', 
 padding: '40px 30px 60px', 
 textAlign: 'center', 
 }; 
function updateCategory(props) { 
 
 
 const id = props.categories.id; 
 const [open, setOpen] = React.useState(false); 
 const handleOpen = () => setOpen(true); 
 const handleClose = () => setOpen(false); 
 const [inputs, setInputs] = useState(props.categories); 
 const handleChange=(e)=>{ 
 const name = e.target.name; 
 const value = e.target.value; 
 setInputs(values => ({...values, [name]: value})) 
 } 
 
 const handlesave=async()=>{ 
 
 const res = await (await
fetch('https://api.escuelajs.co/api/v1/categories/' + id, { 
 method: 'PUT', 
 body: JSON.stringify(inputs), 
 headers: { 
 'Content-Type': 'application/json'
 } 
 })).json() 
 if (res) { 
 console.log('successfully updated!') 
 
 handleClose() 
 
 } 
 else { 
 console.log(res); 
 } 
 } 
 
 return ( 
 <>
 <span onClick={handleOpen}
 style={{ cursor: 'pointer'}}>
 <NoteAltOutlinedIcon color='success' /> 
 </span>
 <Modal
 open={open}
 onClose={handleClose}
 aria-labelledby="modal-modal-title"
 aria-describedby="modal-modal-description"
 >
 <Box sx={style}>
 <Typography id="modal-modal-title" variant="h6" component="h2">
 Update Category 
 </Typography>
 <hr/>
 
 <div className="mb-4">
 <TextField variant="outlined" value={inputs.name} name="name"
label="Name" onChange={handleChange}/>
 </div>
 <div className="mb-4">
 <TextField variant="outlined" value={inputs.image} name="image"
label="Image" onChange={handleChange}/>
 </div>
 <hr/>
 <div className="mb-3">
 <Button type="button" className="btn btn-success"
onClick={handlesave}>Update</Button>
 <Button type="button" className="btn btn-secondary"
onClick={handleClose}>Close</Button>
 </div>
 
 </Box>
 </Modal>
 </>
 ) 
} 
export default updateCategory 
