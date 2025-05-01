const main = document.getElementById('main');
const dragDrop = document.getElementById('drag-drop');
const draggedFile = document.getElementById('dragged-file');
const fileInfo = document.getElementById('file-info');
const submitBtn = document.getElementById('submit-btn');
const selectFileBtn = document.getElementById('select-file-btn');

let selectedFile = null;

selectFileBtn.addEventListener('click',function(e){
draggedFile.click();
});
draggedFile.addEventListener('change',function(e){
    handledFile(e.target.files[0]);
});
function handledFile(file){
    if(file && (file.type === 'application/pdf' || file.type === 'image/jpeg')){
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
        alert(`Submitted File ${selectedFile.name}`);
    }
});


dragDrop.addEventListener('dragover', function(e){
    e.preventDefault();
    dragDrop.classList.add('drag-over');
});
dragDrop.addEventListener('dragleave', function(e){
    e.preventDefault();
    dragDrop.classList.remove('drag-over');
});
dragDrop.addEventListener('drop',function(e){
    e.preventDefault();
    dragDrop.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    handledFile(file);
});