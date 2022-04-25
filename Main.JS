Webcam.set
(
    {
        width:400,
        height:400,
        image_format:'png',
        png_quality:90 
    }
);
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takephoto()
{
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML="<img id='captured_photo' src='"+data_uri+"'/>";
   });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uP43OmQsL/model.json",modelloaded);
function modelloaded()
{
    console.log("modelloaded");
}
function check()
{
    img=document.getElementById("captured_photo");
    classifier.classify(img,gotresult);
}
function gotresult(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_objectname").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
