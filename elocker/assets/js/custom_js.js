
let staff;
let locker;
// range slider for staff
$(document).ready(function () {
    $(".range #range_slider_staff").ionRangeSlider({
        min: 0,
        max: 100,
        type: "single",
        hide_min_max: true,
        grid: true,
        grid_num: 5,
        skin:"round",
        onChange: function (data) {
            staff = data.from;
        },
    });
  
    $(".range #range_slider_locker").ionRangeSlider({
        min: 0,
        max: 100,
        type: "single",
        grid: true,
        grid_num: 5,
        hide_min_max: true,
       skin:"round",
        onChange: function (data) {
            locker = data.from;
        },
       
    });
    $(".range .irs-bar").css({
        'background':'#04b2f4',
        'height':'7px'
    });
    $('.irs--round .irs-handle').css({
        'top': '28px',
        'width': '20px',
        'height': '20px',
        'border':'1px solid #04b2f4'
    });
     $(".range .irs--round .irs-line ").css({
    'height':'6px',
        'background-color':'#fff'
    });
    $(".range .irs-single").css("background","#04b2f4");
    $(".range .irs-handle>i:first-child").css("background","#04b2f4");
    $(".range .irs-single:before").css("background","#04b2f4");
    $(".range .irs-grid-pol").css("display","none");
    $(".range .irs-single").css("display","none");
  

    // for header toggle
    jQuery(document).ready(function(){
    $(".toggleMenu").click(function(){
        $(this).toggleClass("active");
        $("header .inner nav").slideToggle();
        $("header .book_demo").slideToggle();
    });
})
});
// fixed value
const normal_locker = 250;
const smart_locker = 450;
const upgrade_normallocker = 150;
const square_space_perlocker = 0.064;
const emp_required = 83 / 100;
// inputs get
var hours_save_textnode = document.querySelector(".cost_saving .saving_cal .hours_saved")
var annualsaving_textnode = document.querySelector(".cost_saving .saving_cal .annual_saving");
var locker_purchase_textnode = document.querySelector(".cost_saving .saving_cal .locker_purchase_saving");
var sapce_saving_textnode = document.querySelector(".cost_saving .saving_cal .sapce_saving");
let btn = document.querySelector(".office_locker .bottom #btn");
//  function
btn.addEventListener("click", calculate);
function  performCalculations(employees, rent_pa, salary_pa,lockerneed,staff_present){
    let locker_soucring_notsmart = employees * (lockerneed);
    let locker_sourcing_smart = locker_soucring_notsmart * (staff_present);
    let locker_saved = locker_soucring_notsmart - locker_sourcing_smart;
    let square_space_saved = Math.round(locker_saved * square_space_perlocker);
    sapce_saving_textnode.innerHTML = square_space_saved;
    let saved_rent_pa = locker_saved * square_space_perlocker * rent_pa;
    let etf_saving_pa = (salary_pa * locker_soucring_notsmart * (emp_required / 1000)) * 0.94;
    let saas_smartlocker_pa = 18 * locker_sourcing_smart;
    let saving_buy_smartlocker = Math.round(locker_soucring_notsmart * normal_locker - locker_sourcing_smart * smart_locker);
    hours_save_textnode.innerHTML = saving_buy_smartlocker;
    let saving_oldlocker_smartlocker = Math.round(locker_soucring_notsmart * normal_locker - locker_sourcing_smart * upgrade_normallocker);
    annualsaving_textnode.innerHTML = saving_oldlocker_smartlocker;
    let opex_saving_pa = Math.round(saved_rent_pa + etf_saving_pa - saas_smartlocker_pa);
    locker_purchase_textnode.innerHTML = opex_saving_pa;
}
function calculate() {
    let employees = document.getElementById("employees").value;
    let rent_pa = document.getElementById("rent").value;
    let salary_pa = document.getElementById("salary").value;
    let lockerneed = locker / 100;
    let staff_present = staff / 100;
    if(employees==""){
        alert("pls enter number of employees");
    }
    else if(rent_pa==""){
        alert("pls enter office rent");
    }
    else if(salary_pa==""){
        alert("pls enter admin staff salary");

    }
    else if(isNaN(locker)){
        alert("pls select how many % staff need a locker");
    }
    else if(isNaN(staff)){
        alert("pls select how many % staff will be in the office");

    }
    else{
    performCalculations(employees, rent_pa, salary_pa,lockerneed,staff_present);
    }
}
