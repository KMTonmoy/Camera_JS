const webcamELement = document.getElementById("cam")
const canvasElement = document.getElementById("canvas")
const cam = new Webcam(webcamELement, "user", canvasElement)
cam.start()


function takeCap(){
    const pic = Webcam.snap()
    document.querySelector('a').href = pic
}