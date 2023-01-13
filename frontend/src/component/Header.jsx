import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Header = () => {
    const styles = {
        text:{
            color:"#02B589",
            fontSize:20,
            marginLeft:"70vw"
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
        },
        but:{
            height:"4vh",
            width:"8vw",
            border:"none",
            backgroundColor:"#02B589",
            color:"white",
            borderRadius:"2vw",
            marginLeft:"1vw",
            fontSize:20,
            textDecoration:"none",
        },
        Header:{
            width:"100vw",
            height:"15vh",
            display:"flex",
            alignItems:"center",
        }
    }
  return (
    <div style={styles.Header}>
        <p style={styles.text}>Хэрхэн ажилладаж вэ?</p>
        <Link to="../pages/Login.jsx" onClick={useLocation().pathname === "/Header" ? styles.button : styles.but}><button>Нэвтрэх</button></Link>
        <Link to="../pages/History.jsx" onClick={useLocation().pathname === "/History" ? styles.button : styles.but}><button>History</button></Link>
    </div>
  )
}

export default Header;
