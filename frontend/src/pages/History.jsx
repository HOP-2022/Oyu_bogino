import { React, useState, useEffect } from "react";
import Header from "../component/Header"
import Footer from "../component/Footer"
import axios from "axios"

const styles = {
  green: {
    backgroundColor: "#02B589",
    width: "183px",
    height: "44px",
    borderRadius: "100px",
    fontSize: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px",
    borderColor: "#02B589",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"4vh",
    marginLeft:"-110vw",
  },
  Logo: {
    width: "184px",
    height: "118px",
  },
  row: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
  },
  input: {
    width: "581px",
    height: "44px",
    backgroundColor: "white",
    border: "1px solid #F0F0F0",
    boxShadow: "opx 1px 5px rgba(0, 0, 0, 0.16)",
    borderRadius: "100px",
  },
  grey: {
    color: "grey",
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
  },
  new: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  black: {
    height: "10vh",
    width: "30vw",
    color: "black",
    fontSize: "15px",
    position:"relative",
    border:"1px solid black",
    display:"flex",
    flexWrap:"wrap",
  },
  history: {
    color: "#02B589",
    fontSize: "32px",
    fontHeight: "37px",
    marginLeft:"50vw",
    marginTop:"3vh",
    marginBottom:"3vh",
  },
  greenunderline: {
    textDecoration: "underline",
    color: "#02B589",
    border: "0px solid black",
    backgroundColor: "white",
    shadow: "null",
  },
  new2: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  links: {
    height: "200px",
    width: "100px",
  },
};


const LinkComponent = ({link, short}) => {
  return (
    <div style={styles.new}>
            <div style={styles.grey}>Өгөгдсөн холбоос:
             <div style={styles.black}>{link}</div>
            </div>
            <div style={styles.grey}>Богино холбоос:
              <div style={styles.links}>
                <div style={styles.height}>{short}</div>
                <button>Хуулж авах</button>
              </div>
            </div>
          </div>
  ) 
}

export const History = () => {
  const [history, setHistory] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setHistory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={styles.all}>
      <Header/>
      <div style={styles.main}>
        <div style={styles.row}>
          <input
            style={styles.input}
            placeholder="https://www.web-huudas.mn"
            type="link"
          />
          <button type="submit" style={styles.green}>
            богиносгох
          </button>
        </div>
        <div style={styles.new2}>
          <div style={styles.history}>Түүх</div>
          {history && history.map((item,index)=> {
            return <LinkComponent link={item.link} short={item.short} key={index}/>
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default History