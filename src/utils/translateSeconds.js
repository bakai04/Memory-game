function translateSeconds(seconds) {
    return  String(Math.floor((seconds/60)%60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")
}

export default translateSeconds;