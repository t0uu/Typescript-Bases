(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max = 10,
    }
    // Las enum lo que hacen es manejar una forma de usar números.
    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel)
})()