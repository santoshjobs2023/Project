let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterplay");
let progresBar=document.getElementById("progressbar");
let gif=document.getElementById("gif");
let mastersongname=document.getElementById("mastersongname");
let songitem= Array.from(document.getElementsByClassName("songItem"));
let songItemplay=document.getElementById("songItemplay");
// let Genre=document.getElementById("Genre");
// let Album=document.getElementById("Album");
// let Artist=document.getElementById("Artist");


let songs =[
        {songName:"Aaj dil shaayarana", filePath:"songs//1.mp3", coverPath:"covers/1.jpg"},
        {songName:"Ab mujhme raat din", filePath:"songs//2.mp3", coverPath:"covers/2.jpg"},
        {songName:"High rated gabru", filePath:"songs//3.mp3", coverPath:"covers/3.jpg"},
        {songName:"Aang laga de", filePath:"songs//4.mp3", coverPath:"covers/4.jpg"},
        {songName:"Ae watan", filePath:"songs//5.mp3", coverPath:"covers/5.jpg"},
        {songName:"Ashique banaya aapne", filePath:"songs//6.mp3", coverPath:"covers/6.jpg"},
        {songName:"Aao raja", filePath:"songs//7.mp3", coverPath:"covers/7.jpg"},
        {songName:"Aaj phir", filePath:"songs//8.mp3", coverPath:"covers/8.jpg"},
        {songName:"Chamak chalo", filePath:"songs//9.mp3", coverPath:"covers/9.jpg"},
        {songName:"Kabhi jo badal barse", filePath:"songs//10.mp3", coverPath:"covers/10.jpg"},
]
songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songName;
})
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progresBar.value=progress;
})
progresBar.addEventListener('change',()=>{
    audioElement.currentTime =  progresBar.value *audioElement.duration/100;
})

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
       element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;  
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       })
       
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Genre.addEventListener('click',()=>{
//     window.location.href = "http://127.0.0.1:5500/spotfy/spotify_genere.html";
// })