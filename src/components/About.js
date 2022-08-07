import React from 'react'
export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    // const[mode , setMode] = useState("DarkMode")
    // const toggleMode = ()=>{
    //     if(myStyle.color==="black" && myStyle.backgroundColor==="white"){
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:'3px solid aliceblue',
    //             borderRadius:'10px'
    //         })
    //         setMode("NormalMode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setMode("DarkMode")
    //     }
        
    // }
    let myStyle = {
        backgroundColor:props.mode==="dark"?"#3f6d91":"white",
        color:props.mode==="dark"?"white":"black"
    }
  return (
    <>
    <div className="container" style={myStyle}>
        <h1>About</h1>
    <p className="my-2">
     <p>Hello</p>
    </p>
  </div>
  {/* <div className="container">
  <button className="btn btn-light btn-outline-dark" onClick={toggleMode}>{mode}</button> </div>*/}
  </>


  )
}
