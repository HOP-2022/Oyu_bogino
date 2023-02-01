import {React , useState} from 'react'
import axios from 'axios'
import Header from "../component/Header"
import Footer from "../component/Footer"

export const Singup = () => {
  const styles = {
    all:{
      marginLeft:"40vw",
      height:"53vh",
      marginTop:"7vh"
    },
    tit:{
      color: "#02B589",
      fontSize: "32px",
      marginLeft:"7vw",
      fontFamily:'Ubuntu',
    },
    textGr:{
      color: "#02B589",
      borderBottom:"1px solid #02B589",
      fontFamily:'Ubuntu',
    },
    text:{
      marginLeft:"2vw",
      fontFamily:'Ubuntu',
    },
    input:{
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      border:"none",
      width: "18vw",
      height: "44px",
      borderRadius: "100px",
      fontSize:"20px",
      paddingLeft:"2vw",
      marginBottom:"2vh",
      fontFamily:'Ubuntu',
    },
    button:{
      height:"4vh",
      width:"20vw",
      border:"none",
      backgroundColor:"#02B589",
      color:"white",
      borderRadius:"2vw",
      fontSize:20,
      marginTop:"2vh",
      fontFamily:'Ubuntu',
  },
  checkbox:{
      display:"flex",
      alignItems:"center",
      width:"20vw"
  },
  mart:{
      color:"black" ,
      borderBottom:"1px solid black" ,
      width:"8vw" ,
      marginLeft:"7vw",
      fontFamily:'Ubuntu',
  },
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async () => {
    await axios
      .post("http://localhost:8000/", {email:email , password:password})
      .then((response) => {
        console.log(response.data.user)
      })
      .catch((error) => {
        console.log(error)
        console.log("err")
      });
      setEmail("")
      setPassword("")
    };

  return (
    <div>
    <Header/>
        <div style={styles.all}>

            <div>
            <p style={styles.text}>Цахим хаяг</p>
            <input type="text" placeholder='email' style={styles.input} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <div>
            <p style={styles.text}>Нууц үг</p>
            <input type="text" placeholder='password' style={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

        <div>
        <button onClick={Signup}>Submit</button> 
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Singup;