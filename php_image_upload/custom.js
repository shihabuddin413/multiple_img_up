let fileInput = document.getElementById('fileInput');
let real_sl = document.getElementById('selectedFile');
let selectedList = document.getElementById('selectedList');



console.log(fileInput);

fileInput.addEventListener('click', ()=>{
    console.log('label clicked');
})

real_sl.addEventListener('change', ()=>{
    console.log(real_sl.value);
    let array = [];
    push("Kiwi");
    // fileInput.textContent = ` ${real_sl.value}`;
    template = `<tr><td>${real_sl.value}</td></tr>`;
    selectedList.innerHTML += template
})