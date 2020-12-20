import React, { Component } from 'react';
import axios from  'axios';

class Imageupload extends Component
 { state={

   selectedFile:null
 }
    fileSelectHandler=event=>{
      this.setState({
        selectedFile:event.target.files[0]
      })
  console.log(event.target.files[0]);
 }

fileUploadHandler=()=>
{
  const data=new FormData();
  this.setState({loading:true})
  data.append('image',this.state.selectedFile,this.state.selectedFile.name)
  const instance=axios.create({headers:{'Content-Type': 'application/json','x-access-token':'6961d7333843f1a7c280ffda57c5f3'}});
  instance.post('http://uploadproject-env.eba-pezpkcpz.us-east-2.elasticbeanstalk.com/api/upload',data).then((resp)=>{
  console.log(resp);
  this.setState({loading:false,
    message:resp.data.message})

  })

}
loadigShowMmsg()
{
  if (this.state.loading)
  {
    return<p>loading....</p>
  }
  else {
    return <p>{this.state.message}</p>

  }
}
   render()
   { const {resp}=this.state
     return(
       <div>
       <input type='file' onChange={this.fileSelectHandler}/>
       <button color="danger"  onClick={this.fileUploadHandler}>Submit</button>
       <p>{this.loadigShowMmsg()}</p>
       </div>
     );
   }
}
export default  Imageupload;
