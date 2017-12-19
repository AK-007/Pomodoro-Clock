$(document).ready(function()
                 {
  var circum=2*Math.PI*112;
  $(".progress").css('stroke-dasharray',circum);
  $(".progress").css('stroke-dashoffset',circum);
  var sessionlen=25;
  var breaklen=5;
  var second=0;
  var minute=25;
  var pause=true;
  var timer;
  $(".minutes").text(sessionlen);
  $(".seconds").text("00");
  $(".operator1").click(function()
                       {
    if(pause===true)
      {
       if(breaklen>1)breaklen--;
       $(".break").text(breaklen);
       $('.minutes').text(sessionlen);
       $('.seconds').text('00');
       $('.label').text('Session');
        $('.progress').css('stroke','#4FEDFF');
       $('.progress').css('animation-duration',sessionlen*60+'s');
        $target = $('#main');
    $target.removeClass('progress');
    setTimeout("$target.addClass('progress');",10);
        second=0;
        minute=sessionlen;
      }
    });
  $(".operator2").click(function()
                       {
    if(pause===true)
      {
        if(breaklen<10)breaklen++;
        $(".break").text(breaklen);
        $('.minutes').text(sessionlen);
        $('.seconds').text('00');
        $('.label').text('Session');
        $('.progress').css('stroke','#4FEDFF');
        $('.progress').css('animation-duration',sessionlen*60+'s');
        $target = $('#main');
    $target.removeClass('progress');
    setTimeout("$target.addClass('progress');",10);
        second=0;
        minute=sessionlen;
      }
  });
  $(".operator3").click(function()
                       {
    if(pause===true)
      {
        if(sessionlen>1)sessionlen--;
        $(".session").text(sessionlen);
        $('.minutes').text(sessionlen);
        $('.seconds').text('00');
        $('.label').text('Session');
        $('.progress').css('stroke','#4FEDFF');
        $('.progress').css('animation-duration',sessionlen*60+'s');
        $target = $('#main');
    $target.removeClass('progress');
    setTimeout("$target.addClass('progress');",10);
        second=0;
        minute=sessionlen;
      }
  });
  $(".operator4").click(function()
                       {
    if(pause===true)
      {
        if(sessionlen<30)sessionlen++;
        $(".session").text(sessionlen);
        $('.minutes').text(sessionlen);
        $('.seconds').text('00');
        $('.label').text('Session');
        $('.progress').css('stroke','#4FEDFF');
        $('.progress').css('animation-duration',sessionlen*60+'s');
        $target = $('#main');
    $target.removeClass('progress');
    setTimeout("$target.addClass('progress');",10);
        second=0;
        minute=sessionlen;
      }
  });
  
  //countdown
  function countdown()
  {
    if(minute===0 && second===0)
      {
        if($('.label').text()=='Session')
          {
            $('.minutes').text(breaklen);
            $('.seconds').text('00');
            $('.label').text('Break!');
            $('.progress').css('stroke','#F73B16');
            $('.progress').css('animation-duration',breaklen*60+'s');
            $target = $('#main');
            $target.removeClass('progress');
            setTimeout("$target.addClass('progress');",10);
            minute=breaklen;
          }
        else if($('.label').text()=='Break!')
          {
            $('.minutes').text(sessionlen);
            $('.seconds').text('00');
            $('.label').text('Session');
            $('.progress').css('stroke','#4FEDFF');
            $('.progress').css('animation-duration',sessionlen*60+'s');
            $target = $('#main');
            $target.removeClass('progress');
            setTimeout("$target.addClass('progress');",10);
            minute=sessionlen;
          }
      }
    else
      {
        if(second===0)
          {
            second=60;minute--;
          }
        second--;
        $('.minutes').text(minute);
        if(second<10)
          { 
            $('.seconds').text("0"+second);
          }
        else
          {
            $('.seconds').text(second);
          }
      }
  }
  //start-click
  $(".fa-play-circle").click(function()
                            {
    if(pause===true)
      {
        timer=setInterval(countdown,1000);
        $('.progress').css('animation-play-state','running');
      }
      pause=false;
    
  });
  //pause-click
  $('.fa-pause-circle').click(function()
                             {
    if(pause===false)
      {
        clearInterval(timer);
        $('.progress').css('animation-play-state','paused');
      }
    pause=true;
  });
  //reset-click
  $('.fa-repeat').click(function(){
    clearTimeout(timer);
    second=0;
    minute=sessionlen;
    $('.label').text('Session');
    $(".minutes").text(sessionlen);
    $(".seconds").text("00");
    if(pause===false)pause=true;
    $(".fa-play-circle").click();
    $('.progress').css('stroke','#4FEDFF');
    $('.progress').css('animation-duration',sessionlen*60+'s');
    $target = $('#main');
    $target.removeClass('progress');
    setTimeout("$target.addClass('progress');",10);
  });
});