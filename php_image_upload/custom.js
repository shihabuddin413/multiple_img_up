let fileInput = document.getElementById('fileInput');
let real_sl = document.getElementById('selectedFile');
let selectedList = document.getElementById('selectedList');



console.log(fileInput);

fileInput.addEventListener('click', ()=>{
    console.log('label clicked');
})

real_sl.addEventListener('change', ()=>{
    template = `<tr><td>${real_sl.value}</td></tr>`;
    selectedList.innerHTML += template
})
