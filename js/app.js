let workspace;

function initBlockly(){

workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  grid:{spacing:20,length:3,colour:"#ccc",snap:true},
  zoom:{controls:true,wheel:true,startScale:1.0,maxScale:3,minScale:0.3,scaleSpeed:1.2},
  move:{scrollbars:true,drag:true,wheel:true}
});
}

async function runCode(){
  const code=Blockly.JavaScript.workspaceToCode(workspace);
  try{
    await eval("(async()=>{" + code + "})()");
  }
  catch(e){
    alert("Error: "+e);
  }
}
