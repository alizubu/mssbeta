let shapes = [
    {
        d: "M1694.17,69.11c-21.15,46.26-57.31,104.06-118,123-36,11.22-57.7,1.67-115-2-89.29-5.71-118,12.26-213,21-104.64,9.63-124.51-7.14-234-8-98.87-.77-238-1.86-366,60-154.3,74.55-131.59,162.75-270,216-133.46,51.34-315.11,31.11-364-60-39.85-74.25,18.49-176.94,35-206C234-112.21,1335,19.57,1694.17,69.11Z"
    },
    {
        d: "M1737.24,215.24c-34.74,37.5-67.35,51.35-91,57-57.8,13.8-91.82-14.3-144,6-33.08,12.86-45.33,34.24-67,56-70.1,70.36-173.64,79.18-242,85-177.57,15.11-211.26-83.88-316-64-186.56,35.39-153.7,363.51-372,456-142.82,60.5-344.26-.55-439-129-108-146.45-65.7-364.73,4-474C255.28-81.85,922.75-57.54,1737.24,215.24Z"
    },
    {
        d: "M2103.58,312.15c-177.1,79.56-276.61,94.56-336,90-5.83-.45-22.23-1.93-45-2,0,0-102.23-.34-186,31-132.83,49.68-105.49,192.42-235,261-99.66,52.76-150.92-13.18-271,25-135.26,43-179.58,161.4-273,288-150.43,203.84-432.33,434.57-571,387-193.12-66.25-291.42-735-15-1087C478.21-85.35,1271.73-118.86,2103.58,312.15Z"
    }
]

var morph = anime({
    targets: '.morph-path',
    d: [
        {value: shapes[0].d},
        {value: shapes[2].d}
    ],
    delay: 0,
    duration: 2000,
    autoplay: false,
    loop: false,
    complete: (anim) => {
      console.log(anim.reversed);
      if (anim.reversed) {
        document.querySelector(".navigation").classList.toggle("open");
        morph.completed = false;
        morph.progress = 0;
        morph.reverse();
      } else {
        document.querySelector(".navigation nav").classList.toggle("open")
        document.querySelectorAll(".navigation nav ul li").forEach((el) => {
          const pageColor = {
            "Team": "hsl(136, 63%, 40%,0.65)",
            "Partners": "hsla(185,37%,35%,0.65)",
            "News": "hsla(141, 64%, 25%,0.65)",
            "Contact": "hsla(170,100%,35%,0.65)"
          }
          el.addEventListener("mouseover", (e) => {
            document.querySelector(".morph-path").style.fill = pageColor[el.getAttribute("data-item")];
          })

          el.addEventListener("click", (e) => {
            document.querySelector(".navigation nav").classList.toggle("open");
            document.querySelector(".navigation").classList.toggle("open");
            morph.reverse();
          })
        }) 
      }
    }
});



  //Page cursors function

(function($) { "use strict";
    
  //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
  
  //Navigation

  var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }();

  
  //Switch light/dark
  
  $("#switch").on('click', function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $("#switch").removeClass("switched");
    }
    else {
      $("body").addClass("light");
      $("#switch").addClass("switched");
    }
  });

   $(document).ready(function() {           
    $("a")
      .each(function(i) {
      if (i != 0) {
        $("#hover-audio")
        .clone()
        .attr("id", "hover-audio" + i)
        .appendTo($(this).parent());
      }
      $(this).data("beeper", i);
    }).mouseenter(function() {
      $("#hover-audio" + $(this).data("beeper"))[0].play();
      });
      $("#hover-audio").attr("id", "hover-audio");  

      document.getElementById("menu-button").addEventListener('click', function(e) {
      document.getElementById("link").play();
      });    
      document.getElementById("switch").addEventListener('click', function(e) {
      document.getElementById("link").play();
      });    
      document.getElementById("portfolio").addEventListener('click', function(e) {
      document.getElementById("link").play();
      });      
     });        
              
})(jQuery);