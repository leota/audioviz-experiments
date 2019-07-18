let isPlaying = false;
let playingNote;

function setup() {
    createCanvas(640, 480);
    toneSetup();
}

function draw() {
    background(0);
    if (isPlaying && playingNote) {
        ellipse(playingNote.midi * 5, 200, 80, 80);
    }
}

function keyPressed() {
    if (keyCode === 32) { // Spacebar
        if (!isPlaying) {
            Tone.context.resume().then(() => {
                Tone.Transport.start('+0.1')
            });
        } else {
            Tone.context.resume().then(() => {
                Tone.Transport.stop()
            });
        }
        isPlaying = !isPlaying;
    }
}

function toneSetup() {
    loadMidi();
}

function loadMidi() {
    const synth = new Tone.PolySynth(8).toMaster()

    MidiConvert.load('midi/bwv-850.mid', function (midi) {
        console.log(midi)

        // make sure you set the tempo before you schedule the events
        Tone.Transport.bpm.value = midi.header.bpm

        // pass in the note events from one of the tracks as the second argument to Tone.Part 
        const midiPart = new Tone.Part(function (time, note) {

            // use the events to play the synth
            synth.triggerAttackRelease(note.name, note.duration, time, note.velocity);
            // set playing note
            playingNote = note;

        }, midi.tracks[0].notes).start()
    })
}

