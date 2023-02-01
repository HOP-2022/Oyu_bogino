import React from 'react'
import "../assent/Font.css"

export const Footer = () => {
  const styles = {
    black:{
      color:"black",
      fontFamily:'Ubuntu',
    },
    white:{
      color:"grey",
      marginBottom:"-2vh",
      marginLeft:"-8vw",
      fontFamily:'Ubuntu',
    },
    Footer:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100vw",
      height:"10vh",
    }
  }
  return (
    <div style={styles.Footer}>
      <p style={styles.black}>Made with ♥️ by Nest Academy</p>
      <p style={styles.white}>@boginoo.io 2022</p>
    </div>
  )
}


export default Footer;