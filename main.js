var dog=0;
var cat=0;
var cow=0;
var tiger=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jL2O6_mZr/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r=  Math.floor(Math.random()*255)+1;
        random_number_g=  Math.floor(Math.random()*255)+1;
        random_number_b=  Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I Can Hear- "+ results[0].label;
        document.getElementById("result_label").style.color= "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("detected").innerHTML= "Detected Dog- "+dog+" Detected Cat- "+cat+" Detected Cow- "+cow+" Detected Tiger- "+tiger;

        img= document.getElementById("animal");

        if(results[0].label=="Barking"){
            img.src= "dog.png";
            dog= dog+1;
        }
        else if(results[0].label=="Meowing"){
            img.src= "cat.png";
            cat= cat+1;
        }
        else if(results[0].label=="Mooing"){
            img.src= "cow.png";
            cow= cow+1;
        }
        else if(results[0].label=="Roaring"){
            img.src= "tiger.png";
            tiger= tiger+1;
        }
        else{
            img.src= "pngwing.com.png";
        }


    }
}