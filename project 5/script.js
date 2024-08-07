var arr =[
    {
        dp:"https://media.licdn.com/dms/image/v2/D5603AQER-zPh066QNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720261472037?e=1728518400&v=beta&t=GXlNr-l68VrNWNmOIM_4R6DgAcd9p2az8L2dLBZ2Lg0",story:"https://i0.wp.com/live.staticflickr.com/4762/39699055175_5876c32612_b.jpg?resize=1024%2C689&ssl=1"},
        {dp:"https://media.licdn.com/dms/image/v2/D4D03AQGFl-cLqzybFw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722845608311?e=1728518400&v=beta&t=_yg8BgkhmhCTYhaqjJjvk5V4d6IcHSTt3MAkMD7gz_Y",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PGHCEJEBpsJwghwSf6Gl-b0hVj-4WZ2ZlA&s"},
        {dp:"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg",story:"https://t4.ftcdn.net/jpg/02/92/76/21/360_F_292762118_dmWqwlN9lDmhqCHKmUYmZW6F7LaUWc80.jpg"},
        {dp:"https://media.istockphoto.com/id/1167768487/photo/indian-businessman-wearing-white-elegant-shirt-standing-over-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=_Z82yRj8KM22ma6iiwzjM_h0VIYfx-zJ4wPLX2MNsv4=",story:"https://media.istockphoto.com/id/1205742814/photo/young-indian-man-wearing-denim-shirt-standing-over-isolated-yellow-background-asking-to-be.jpg?s=612x612&w=0&k=20&c=arwE1RG8Vi5SHf9TY5XAst87hzZbLtERiLR9sNydetA="},
];
var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,i){
       clutter += `<div class="story"><img id="${i}" src="${elem.dp}"></div>`
})
stories.innerHTML= clutter
stories.addEventListener("click",function(dets){
      var value = arr[dets.target.id].story
      document.querySelector("#full-screen").style.display = "block"
      document.querySelector("#full-screen").style.backgroundImage =`url(${value})`

});