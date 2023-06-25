(function()
{
   "use strict";

   let discorso = new SpeechSynthesisUtterance();
   let voci = [];
   let selezionaVocale = document.querySelector("select");

   window.speechSynthesis.addEventListener('voiceschanged', function()
   {
       voci = window.speechSynthesis.getVoices();
       discorso.voice = voci[0];

       voci.forEach((voce, i) => (selezionaVocale.options[i] = new Option(voce.name, i)));
   });

   selezionaVocale.addEventListener('change', function()
   {
       discorso.voice = voci[selezionaVocale.value];
   });

   document.querySelector("button").addEventListener("click", function()
   {
       discorso.text = document.querySelector("textarea").value;
       window.speechSynthesis.speak(discorso);
   });
}());