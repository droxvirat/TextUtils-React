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
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , 
            color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowecase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>clear text</button>
          </div>;
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Mintues read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in above box to preview"}</p>
          </div>
        </>
}
