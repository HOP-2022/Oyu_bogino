import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {Logo} from "../img/logoBogino"
import "../assent/Font.css"

export const Header = () => {
    const styles = {
        text:{
            color:"#02B589",
            fontSize:20,
            marginLeft:"70vw",
            border:"none",
            backgroundColor:"none",
            fontFamily:'Ubuntu',
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
            textDecoration:"none",
            fontFamily:'Ubuntu',
        },
        Header:{
            width:"100vw",
            height:"15vh",
            display:"flex",
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
    <div style={styles.Header}>
        <Link to="/" onClick={useLocation().pathname === "/"}><button style={styles.text} >Хэрхэн ажилладаж вэ?</button></Link>
        <Link to="/Login" onClick={useLocation().pathname === "/Login"}><button style={styles.button} >Нэвтрэх</button></Link>
        <Link to="/History" onClick={useLocation().pathname === "/History"}><button style={styles.button} >History</button></Link>
    </div>
    <div style={styles.logo}><Logo/></div>
    </div>
  )
}

export default Header;
