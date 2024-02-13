$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });



  $(document).ready(function () {
    $(".container1")
      .mouseenter(function () {
        $(".card1").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card1").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });

  function changepage()
  {
    window.location="feelings.html"
  }