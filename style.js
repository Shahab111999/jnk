function openPage(pageName, elmnt, color,textCol) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    elmnt.style.color = textCol;
    console.log("this",this);
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  


      $(document).on('ready', function() {
        $(".vertical-center-4").slick({
          dots: true,
          vertical: true,
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 2
        });
        $(".vertical-center-3").slick({
          dots: true,
          vertical: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
        $(".vertical-center-2").slick({
          dots: true,
          vertical: true,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2
        });
        $(".vertical-center").slick({
          dots: true,
          vertical: true,
          centerMode: true,
        });
        $(".vertical").slick({
          dots: true,
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
        $(".regular").slick({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
        $(".center").slick({
          dots: true,
          infinite: true,
          centerMode: true,
          slidesToShow: 5,
          slidesToScroll: 3
        });
        $(".variable").slick({
          dots: true,
          infinite: true,
          variableWidth: true
        });
        $(".lazy").slick({
          lazyLoad: 'ondemand', // ondemand progressive anticipated
          infinite: true
        });
        
  $('.once-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    
  });
  
      });
 
 