// MENU TOGGLE
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      settingsClose = document.getElementById('settings-close'),
      main = document.getElementById('bg-shadow'),
      settingsToggle = document.getElementById('nav-settings'),
      settingsMenu = document.getElementById('settings-menu')

const removeMenu = ()=>{
    navMenu.classList.remove('show-menu');
    main.classList.remove('bg-shadow');
    settingsMenu.classList.remove('show-settings');

}

const showMenu = ()=>{
    navMenu.classList.add('show-menu')
    main.classList.add('bg-shadow')
}

const showSettings = ()=>{
    settingsMenu.classList.add('show-settings')
    main.classList.add('bg-shadow')
}

const removeSettings = ()=>{
    settingsMenu.classList.remove('show-settings');
    main.classList.remove('bg-shadow')
}

if (navToggle){
    navToggle.addEventListener('click', showMenu)
}

if (navClose){
    navClose.addEventListener('click', removeMenu)
}

settingsClose.addEventListener('click', removeSettings)

// SHOW SETTINGS MENU
settingsToggle.addEventListener('click', showSettings)

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')


navLink.forEach(n=> n.addEventListener('click', removeMenu))


// REMOVE MENU WITH SURROUNDING COMPONENTS

document.getElementById('main')
        .addEventListener('click',removeMenu) 

// ACCORDION SKILLS

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills (){
    let itemClass = this.parentNode.className


    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
    
}

skillsHeader.forEach((ele)=>{
    ele.addEventListener('click', toggleSkills)
})
    
// QUALIFICATION TABS
 
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click',()=>modal(i))
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

// PORTFOLIO SWIPER
// var swiper = new Swiper(".mySwiper", {
//     cssMode: true,
//     loop: true,
//     navigation: {
//       nextEl: "#swiper-next",
//       prevEl: "#swiper-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//     mousewheel: true,
//     keyboard: true,
//   });

// PORFOLIO 

const portfolio_tabs = document.querySelectorAll(".portfolio__tabs-title"),
      portfolio_cards = document.querySelectorAll(".portfolio__content")

      portfolio_tabs.forEach((portfolio_tab,i)=>{
        const tab_type = portfolio_tab.getAttribute('data-portfolio-category')
        portfolio_tab.addEventListener('click',()=>{
            portfolio_tabs.forEach(portfolio_title=>{
                portfolio_title.classList.remove("portfolio__tabs-title-active")
            })

            portfolio_tab.classList.add("portfolio__tabs-title-active")

            // filter the portfolio card section
            portfolio_cards.forEach(portfolio_card=>{
                const app_type = portfolio_card.getAttribute('data-app-type')
                if (tab_type === 'all') {
                    return portfolio_card.classList.add('portfolio__content-active')}
                if (tab_type === app_type) {portfolio_card.classList.add('portfolio__content-active')}
                else{
                    {portfolio_card.classList.remove('portfolio__content-active')}
                }
            })

        })
      })

// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);


// SCROLL SECTIONS ACTIVE
const sections = document.querySelectorAll('.section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    const navLink = document.querySelectorAll('.nav__link')
    navLink.forEach(n=> n.classList.remove('show-menu'))
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive);

// DARK LIGHT THEME MODE
const darkThemeButton = document.getElementById('dark')
const lightThemeButton = document.getElementById('light')

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if (selectedTheme === 'dark'){
        lightThemeButton.classList.remove('theme-mode-active')
        darkThemeButton.classList.add('theme-mode-active')
    }
}

// Activate / deactivate the theme manually with the button

darkThemeButton.addEventListener('click', () => {
    // Add the dark 
    document.body.classList.add(darkTheme)
    lightThemeButton.classList.remove('theme-mode-active')
    darkThemeButton.classList.add('theme-mode-active')

    // save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
})

lightThemeButton.addEventListener('click', () => {
    // Remove the dark 
    document.body.classList.remove(darkTheme)
    lightThemeButton.classList.add('theme-mode-active')
    darkThemeButton.classList.remove('theme-mode-active')

    // save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
})


// THEME COLOR
let currentThemeColor = 'color-blue-theme'
const themeColors = document.querySelectorAll('.theme-color')
const selectedColor = localStorage.getItem('selected-color')
var sheet = document.styleSheets[0];

function setColor(color){
    switch (color) {
        case 'color-blue-theme':

            
            break;
    
        default:
            break;
    }
}


if(selectedColor){
    document.documentElement.style.setProperty('--hue-color', convertToColorCode(selectedColor));
}

function convertToColorCode(color){
    // set the active theme with a check sign
    themeColors.forEach(themeColor=>{
        if (themeColor.getAttribute('data-theme-color') === selectedColor){
            themeColor.classList.add('theme-color-icon-active')
        } else{
            themeColor.classList.remove('theme-color-icon-active')
        }
    })
    switch (color) {
        case 'color-blue-theme':
            return 250
            break;
        case 'color-red-theme':
            return 3
            break;
        case 'color-purple-theme':
            return 290
            break;
        case 'color-yellow-theme':
            return 31
            break;
        case 'color-green-theme':
            return 150
            break;   
        default:
            return 150
            break;
    }
}
themeColors.forEach(themeColor =>{
    const color = themeColor.getAttribute('data-theme-color')
    const colorCode = convertToColorCode(color)
  
    themeColor.addEventListener('click',()=>{

        themeColors.forEach(themeCol=>{
            if (themeCol.getAttribute('data-theme-color') === color){
                themeCol.classList.add('theme-color-icon-active')
            } else{
                themeCol.classList.remove('theme-color-icon-active')
            }
        })

        document.documentElement.style.setProperty('--hue-color', colorCode);
        localStorage.setItem('selected-color',color)
    })
})


// SCROLL BEHAVIOUR
const scrollSmooth = document.getElementById("scroll-smooth"),
      scrollSection = document.getElementById("scroll-smooth")
const scrollBehaviours = document.querySelectorAll('.settings__scroll-content'),
      mainContainer = document.getElementById("main")


scrollBehaviours.forEach(behaviour =>{
    behaviour.addEventListener('click', ()=>{

        const data = behaviour.getAttribute('data-scroll')
        scrollBehaviours.forEach(behaviour=> behaviour.classList.remove('settings__scroll-active'))
        if (data === 'section'){
            mainContainer.classList.add('main__container');
        }else{
            mainContainer.classList.remove('main__container');
        }
        behaviour.classList.add('settings__scroll-active')
    })
})


// SEND MAIL

    //update this with your js_form selector
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "c0aldhlakcbjpexf3vj3of4e" // sent after you sign up
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.textContent='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = 'Message from potential client';
        var name = document.getElementById('form-name').value;
        var email = document.getElementById('form-email').value;
        var msg =  document.getElementById('form-message').value;
        var message = `Name: ${name} \n Email: ${email} \n Message: ${msg}`;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });


// TYPING ANIMATION
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { solid var(--first-color)}";
        document.body.appendChild(css);
    };








