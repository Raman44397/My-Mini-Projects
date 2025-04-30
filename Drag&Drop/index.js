const main = document.getElementById('main');
const dragDrop = document.getElementById('drag-drop');
const dragedFile = document.getElementById('draged-file');
const fileInfo = document.getElementById('file-info');
const submitBtn = document.getElementById('submit-btn');
const selectFileBtn = document.getElementById('select-file-btn');

let selectedFile = null;

selectFileBtn.addEventListener('click',function(e){
    dragedFile.click();
});
dragedFile.addEventListener('change',function(e){
    handledFile(e.target.files[0]);
});
function handledFile(file){
    if(file && file.type === 'application/pdf'){
        selectedFile = file;
        fileInfo.textContent = `Selected File : ${file.name}`;
        submitBtn.disabled = false;
    }else{
        fileInfo.textContent = `Please select a valid pdf file.`;
        submitBtn.disabled = true;
    }
}


submitBtn.addEventListener('click', function(){
    if(selectedFile){
        alert(`Submited File ${selectedFile.name}`);
    }
});