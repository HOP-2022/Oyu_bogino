import {React, useState} from "react";
import axios from 'axios'
import './assent/Font.css'
import Link from './component/Link'
import Header from "./component/Header";
import Footer from "./component/Footer";

 const App = () => {

  const [link, setLink] = useState("");
  const [short, setShort] = useState("");
  const [res1, setRes1] = useState();
  const [res2 , setRes2] = useState();
  


  const create = async () => {
    await axios
      .post("http://localhost:8000/", {link : link , short : short})
      .then((response) => {
        setRes1(response.data.data.link);
        setRes2(response.data.data.short);
      })
      .catch((error) => {
        console.log(error); 
      });
      setLink("")
      setShort("")
    };
  
    const styles = {
        input:{
            width:"35vw",
            height:"4vh",
            border: "1px solid #F0F0F0",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
            borderRadius:"100px",
            fontSize:20,
            paddingLeft:"2vw"
        },
        button:{
            height:"4vh",
            width:"8vw",
            border:"none",
            backgroundColor:"#02B589",
            color:"white",
            borderRadius:"2vw",
            marginLeft:"1vw",
            fontSize:20,
            fontFamily:'Ubuntu',
        },
        al:{
            height:"20vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        logo:{
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          },
    }


  return (
    <div>
      <Header/>
    <div style={styles.al}>
        <input  style={styles.input} type="text" 
        placeholder='https://www.web-huudas.mn' 
        value={link}
        onChange={(e)=>{setLink(e.target.value)}}/>

        <button type="submit" 
        style={styles.button} 
        onClick={create}>
        Богиносгох</button> 
    </div>
        <Link short={res2} link={res1}/>
        <Footer/>
    </div>
  )
}

export default App ;



