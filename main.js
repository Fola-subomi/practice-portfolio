function toggleDropdown(){
    let navbarToggle=Document.getElementById('navbar-toggle')
    if(navbarToggle.className==='Topnav'){
        navbarToggle+=' responsive';
    }else{
        navbarToggle.className == 'navbar-toggle';
    }
}