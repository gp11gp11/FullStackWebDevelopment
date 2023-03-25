$("h1").addClass("big-title margin-50");

$("h1").text("bye");

$("button").html("<em>Hey</em>");

$("img").attr("src"); // To get value of attribute

$("a").attr("href", "https://www.yahoo.com/");//  changing the value of attribute

//adding eventlistener
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(evemt){
    // console.log(event.key);
    $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color", "purple");
});

// Adding and removing element using jQuery

$("h1").before("<button>new</button>");

$("h1").after("<button>new</button>");

$("h1").prepend("<button>new</button>");

$("h1").append("<button>new</button>");

$("button").remove();
