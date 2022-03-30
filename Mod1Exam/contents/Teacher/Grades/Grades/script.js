let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
function addRow () {
  document.querySelector('#content').insertAdjacentHTML(
    'afterbegin',
        `<div class="row">
        <i class='bx bx-edit' ></i>
        <input type="button" value="Remove" onclick="removeRow(this)" class="remove"/>
        <input type="text". name="module" value="" placeholder="Module" class="mod"/>
        <input type="text". name="gradeitem" value="" placeholder="Grade Item" class="itm"/>
        <input type="text". name="gradeweight" value="" placeholder="Grade Weight %" class="wgt"/>
        <input type="text" name="feedback" value="" placeholder="Feedback" class="fb"/>
        </div>`   
  )
}

function removeRow (input) {
  input.parentNode.remove()
}
function confirm() {
    alert("Student's Grade has been Updated!");
}

