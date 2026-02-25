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

function saveWorkspace() {
  const data = Blockly.serialization.workspaces.save(workspace);
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  let name = document.getElementById("projectName").value.trim();
  if (!name) {
    name = "새 프로젝트";
  }
  a.download = name + ".mint";  a.click();
  showToast("프로젝트가 저장되었습니다!", 2500);
  console.log("저장 완료")
}

function loadWorkspace(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = JSON.parse(e.target.result);
    workspace.clear();
    Blockly.serialization.workspaces.load(data, workspace);
  };
  reader.readAsText(file);
  document.getElementById("projectName").value =
  file.name.replace(/\.mint$/i, "");
  showToast("프로젝트가 로드되었습니다.", 2500);
  document.title = `MintCoding Editor - ${document.getElementById("projectName").value.trim()}`;
}

// Ctrl + S 저장
window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveWorkspace();
  }
});

function showToast(message, time) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, time);
}
