
document.body.addEventListener('keydown',function(event){
    console.log(event)
    let startBox = document.getElementById('starter').style.display='none'
    let header = document.getElementById('heading').style.display='flex' 
    let ascii = document.getElementById('ascii').style.display='flex'
    let infos = document.getElementById('infos').style.display='flex'
    let keyCode =document.getElementById('keyCode').innerHTML=event.which
    let key = document.getElementById('key').innerHTML=event.key
    let location = document.getElementById('location').innerHTML=event.location
    let which = document.getElementById('which').innerHTML=event.which
    let code = document.getElementById('code').innerHTML=event.code
})




