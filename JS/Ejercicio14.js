let a= $("a");

a.click(function(event){
    event.preventDefault();
    console.log(a.attr("href"));
    }
);