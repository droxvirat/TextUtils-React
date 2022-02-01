import React, {useState} from 'react';

export default function Textform(props) {
const handleUpClick= ()=>{
  // console.log("Uppercase was clicked:" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("converted to uppercase!", "success");
}

const handleLoClick= ()=>{
  // console.log("Lowercase was clicked:" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase!", "success");
}

const handleCopy= ()=>{
  // console.log("i m copy" + text);
  var text= document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("text copied!", "success");
}

const handleExtraSpaces =  ()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("removed extra spaces!", "success");
}

const handleClearText= ()=>{
  // console.log("Cleartext was clicked:" + text);
  let newText = '';
  setText(newText)
  props.showAlert("text cleared!", "success");
}

const handleOnChange= (event)=>{
  // console.log("On change");
  setText(event.target.value);
}
const [text, setText] = useState('');
return <>
          <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className= "mb-4" >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0e1228':'white' , 
            color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowecase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>clear text</button>
          </div>;
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
          </div>
        </>
}
