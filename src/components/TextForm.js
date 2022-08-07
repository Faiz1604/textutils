import React,{useState} from 'react'
export default function TextForm(props) {
  // const countWordWithoutSpace = (text)=>{
  //   const countArray = text.split(" ")
  //   if(countArray[countArray.length-1]===""){
  //     return countArray.length-1
  //   }
  //   else{
  //     return countArray.length
  //   }
  // }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const toAnalyseCount = ()=>{
    let textArray = text.split(" ")
    let textObj = {}
    for(let x of textArray){
        if (x in textObj){
        
    
            textObj[x]+=1
        }
        else{
            textObj[x]=1;
        }
    }
    setMax(textArray[0])
    for(let count in textObj){
        if (textObj[textArray[0]] < textObj[count] && count.length > 3){
           setMax(count)
           setMaxCount(textObj[count])
        }
        else{
          setMax(textArray[0])
          setMaxCount(textObj[textArray[0]])
        }
    }
    props.showAlert("Maximum repeated word counted","success")
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied","success")
  }
  const removeExtraspaces = ()=>{
    setText(text.replace(/\s+/g,' '));
 }
  const clear = ()=>{
    setText("")
    setMaxCount("...")
    setMax("...")
    props.showAlert("Text cleared","success")
  }
let [text,setText] = useState("")
let [max,setMax] = useState("...")
let [maxCount,setMaxCount] = useState("...")
return (
<>

  <div className="container">
    <div className="mb-3">
      <h2 className="my-3" style = {{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h2>
      <textarea className={`form-control mb-3`} id="myBox" rows="5"value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==="dark"?"#042743":"white", color:props.mode==="dark"?"white":"black"}}></textarea>
      <button disabled ={text.length===0} className="btn btn-primary mx-3 my-3" onClick = {handleUpClick}>convert to uppercase</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-3 my-3" onClick = {toAnalyseCount}>Count maximum repeated word </button>
      <button disabled ={text.length===0} className="btn btn-primary mx-3 my-3" onClick = {handleCopy}>Copy Text </button>
      <button disabled = {text.length===0 } className = "btn btn-primary mx-3" onClick ={removeExtraspaces}> Remove Extra Spaces</button>
      <button disabled ={text.length===0} className="btn btn-primary my-3 mx-3" onClick={clear}>Clear</button>
    </div>
  </div>
  <div className= {`container`} style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Text Summary</h1>
    <p> Number Of Words : {text.split(/\s+/g).filter((element)=>{return element.length!==0}).length}, Total Characters : {text.length}</p>
    <p className="mb-3">Reading Time : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mins</p>
    <p>most repeated word is {max} {maxCount} times</p>
    <h2 className="mb-3">Preview</h2><hr />
    <p>{text.length>0?text:"Nothing to Preview!"}</p>
  </div>
  
</>
)
}