const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  grid:{spacing:20,length:3,colour:"#ccc",snap:true},
  zoom:{controls:true,wheel:true,startScale:1.0,maxScale:3,minScale:0.3,scaleSpeed:1.2},
  move:{scrollbars:true,drag:true,wheel:true}
});

function runCode(){
  const code=Blockly.JavaScript.workspaceToCode(workspace);
  try{eval(code);}
  catch(e){alert("Error: "+e);}
}

function saveFile(){
  const xml=Blockly.Xml.workspaceToDom(workspace);
  const text=Blockly.Xml.domToText(xml);
  const blob=new Blob([text]);
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="project.mnc";
  a.click();
}

function loadFile(){
  const input=document.createElement("input");
  input.type="file";
  input.onchange=e=>{
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.onload=()=>{
      const xml=Blockly.Xml.textToDom(reader.result);
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml,workspace);
    };
    reader.readAsText(file);
  };
  input.click();
}