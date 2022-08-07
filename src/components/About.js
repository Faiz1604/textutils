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
        Why is the About Us Page Important?
        The About Us page is an important part of your website. It’s not just about you, it’s about your business too! It is the first one to be noticed by your visitors.

        Many web designers consider creating an About Us page a challenge because there are so many things that need to be included in it.

        You need to share information about your team members, their education, experience, and other details such as location and contact information.

        There are many different ways to design an about us page for your business or personal site. Some people prefer a minimalistic style, and some like more complex designs with animations and videos.

        The main idea is to create a unique design that will match your brand image and give an interesting experience to users who visit your site.
    </p>
  </div>
  {/* <div className="container">
  <button className="btn btn-light btn-outline-dark" onClick={toggleMode}>{mode}</button> </div>*/}
  </>


  )
}
