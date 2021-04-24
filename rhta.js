var synth = window.speechSynthesis;
const voice = document.querySelector(".voice");
const stop = document.querySelector(".stop");
const voice2text = document.querySelector(".voice2text");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
const recorder = new SpeechRecognition();
var voices=[];

var count=0;

function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if ( aname < bname ) return -1;
        else if ( aname == bname ) return 0;
        else return +1;
    });
    
    var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    for(i = 0; i < voices.length ; i++){
    var option = document.createElement('option');
    if(voices[i].name.includes('Greek')) {
    var option = document.createElement('option');
    option.textContent = 'Default-Greek  Male';
    
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
    }}
    for(i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      if(voices[i].name.includes('Greek')) {
        option.textContent += ' -- DEFAULT';
      }

      
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
  }
  


//TI THA LEEI ARXH
const rhto = new SpeechSynthesisUtterance()

let arrayrhto=['Ερχόμαστε από μια σκοτεινή άβυσσο, καταλήγουμε σε μια σκοτεινή άβυσσο. Το μεταξύ φωτεινό διάστημα το λέμε Ζωή.', 
'Δεν είναι τίποτα να πεθάνεις. Είναι τρομακτικό να μη ζεις', 
'Η μεγαλύτερη ευτυχία στη ζωή είναι η διαπίστωση ότι μας αγαπούν γι’ αυτό που είμαστε, ή μάλλον, παρά το γεγονός ότι είμαστε αυτό που είμαστε', 
 'Το να ζεις μόνο δεν είναι αρκετό, είπε η πεταλούδα. Πρέπει να έχεις λιακάδα, ελευθερία και ένα μικρό λουλούδι',
 'Αν κατέληξες να έχεις μια βαρετή και μίζερη ζωή επειδή άκουσες τη μαμά σου, το μπαμπά σου, το δάσκαλό σου, τον παπά ή κάποιον τύπο στην τηλεόραση που σου είπαν τι να κάνεις, τότε σου αξίζει.',
 'Έχω αστοχήσει σε πάνω από 9.000 σουτ στην καριέρα μου. Έχω ηττηθεί σε σχεδόν 300 παιχνίδια. 26 σουτ που θα χάριζαν τη νίκη, δε μπήκαν ποτέ. Απέτυχα ξανά και ξανά στη ζωή μου. Γι’ αυτό και πέτυχα',
 'Η ζωή κάθε ανθρώπου, ειπωμένη αληθινά, είναι ένα μυθιστόρημα.',
'Υπάρχει κάτι που είναι εξίσου αναπόφευκτο με το θάνατο. Και αυτό είναι η ζωή.',
'Η ζωή σε περιγελά όταν είσαι δυστυχισμένος. Η ζωή σου χαμογελά όταν είσαι ευτυχισμένος. Αλλά η ζωή σου υποκλίνεται όταν κάνεις άλλους ευτυχισμένους.',
'Η ζωή μοιάζει να είναι μια γρήγορη εναλλαγή από πολυάσχολα τίποτα.',
'Υπάρχουν πάντα κάποιοι άνθρωποι που απαιτούν τα πάντα από τη ζωή και όμως δε μπορούν να συμβιβαστούν με την ηλιθιότητα και τη σκληρότητά της.',
'Οι περισσότεροι άνθρωποι είναι άλλοι άνθρωποι. Οι σκέψεις τους είναι οι απόψεις κάποιου άλλου, η ζωή τους μια μίμηση, τα πάθη τους ένα ρητό.',
'Το να ζεις είναι το πιο σπάνιο πράγμα στον κόσμο. Οι περισσότεροι άνθρωποι απλά υπάρχουν, αυτό είναι όλο.',
'Η ζωή ενός ανθρώπου είναι ενδιαφέρουσα κυρίως όταν έχει αποτύχει. Γιατί αυτό σημαίνει ότι προσπάθησε να ξεπεράσει τον εαυτό του.',

'Αγάπα τη ζωή που ζεις. Ζήσε τη ζωή που αγαπάς.',

'Κι αν δε μπορείς να κάμεις τη ζωή σου όπως την θέλεις, τούτο προσπάθησε τουλάχιστον όσο μπορείς: μην την εξευτελίζεις μες την πολλή συνάφεια του κόσμου, μες τις πολλές κινήσεις και ομιλίες.'

]

function myOracle (){
let max=arrayrhto.length-1;
let min=0;
let oracle=Math.floor(Math.random()*(max-min) + min);
return rhto.text=arrayrhto[oracle] 
}
//LEKSEIS KLEIDIA
  //hello
  var hello=['γεια σου', 'γεια σας', 'γεια', 'καλημέρα', 'καλησπερα', 'γεια χαρά']
  var fine=[ 'είμαι καλά', 'πολύ ωραία', 'καλά είμαι', 'όλα καλά']
  var bad=['δεν είμαι καλά', 'προβλήματα', 'όχι και τόσο καλά', 'δεν είμαι και τόσο καλά', 'καθόλου καλά', 'όχι καλά', 'απαίσια', 'χάλια', 'στεναχωριέμαι', 'στεναχωρημένος', 'στεναχωρημένη']


  


  
//grafei auto pou leei o xrhsths
function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

//grafei auta pou tha pei to chatbot kai prosthetei koumpia epiloghs
function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  
  return chatContainer1;
}



//Psaxnei lekseis kleidia se auta pou tha pei o xrhsths kai analoga dialegei ti tha pei to chatbot. Prepei na metaferw kapoia keimena sto kommati tou programmatos 'ti tha leei arxh'

function botVoice(message) {
    
    const speech = new SpeechSynthesisUtterance();
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        speech.voice = voices[i];
        break;
      }
    }
    if (containsOR(message.toLowerCase(), hello)) {
        speech.text = "Γεια σας. Τι κάνετε?";
        speakToMe(speech)
    
    }else if (containsOR(message.toLowerCase(),bad)) {
      speech.text = "Πείτε μου το πρόβλημά σας. Ίσως μπορώ να βοηθήσω. Ρωτήστε και θα σας απαντήσω!";
      speakToMe(speech)

    }else if (containsOR(message.toLowerCase(),fine)) {
      speech.text = "Πολύ ωραία! Μπορώ να κάνω τη μέρα σας καλύτερη.Ρωτήστε και θα σας απαντήσω! ";
      speakToMe(speech)
      ;
    
      }else{
        speech.text = myOracle()
          speakToMe(speech)
      }
    
}

//ftiaxnei fwnh
    function speakToMe(speech){
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
    
    }

//psaxnei lekseis kleidia me or
function containsOR(target, pattern){
  console.log(target)
  var value = 0;
  pattern.forEach(function(word){
    value = value + target.includes(word);
  });
  if (value>0){
    value=1
  }
  console.log(value)
  return value;
  //return (value === 1)
}

recorder.onstart = () => {
  console.log('Voice activated');
};

//trexei olo to script otan stamathsei o xrhsths na milaei. Katevazei th selida sto telos
recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
  window.scrollTo(0,document.body.scrollHeight);
};

//koumpi gia fwnh
voice.addEventListener('click', () =>{
  recorder.start();
  setTimeout(function(){ recorder.stop(); }, 10000);
});

//koumpi gia na stamataei na milaei
stop.addEventListener('click', () =>{
  synth.cancel();

});

  
