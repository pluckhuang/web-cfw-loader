let deDE = {
  "pageTitle"    : "Nintendo Switch Payload Lader",
  "pageSubtitle" : "Fusee Launcher portiert zu JavaScript mit der Hilfe von WebUSB.",
  "dangerUpload"   :"Aus irgendeinem Grund funktionieren hochgeladene Payloads nicht. Wir versuchen zurzeit dies zu reparieren.",
  "dangerDanger"   :"Es wurde einigermaßen getestet. Auch wenn bisher keine Fehler gefunden wurden, bin ich nicht schuldig, falls es zu Problemen kommt!",
  "warningWindows" :"Dies funktioniert nicht auf Windows durch Probleme mit Chrome und WebUSB (und wahrscheinlich anderen Gründen!)",
  "warningBrowser" :"Dies funktioniert bisher mit keinem Browser AUßER Chrome! Das liegt daran, dass die anderen Browser WebUSB nicht supporten!",
  "warningLinux"   :"In Linux können Sie einen 'Zugriff abgelehnt' Fehler bekommen! Falls Sie dieses Problem haben, können Sie eine Datei unter: <code>/etc/udev/rules.d/50-switch.rules</code>mit dem folgenden Inhalt:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>erstellen.",
  "warningTested"  :"Tests ergeben, dass es zurzeit auf Linux, OSX, Android (unrooted) und Chromebooks funktioniert. Ihr Ergebnis kann variieren.",
  "labelInstructions" :"Anleitung:",
  "liRCM"          :"Setzen Sie die Switch in den RCM und verbinden Sie es mit ihrem Gerät.",
  "liSelect"       :"Wählen Sie entweder einer der vorliegenden Payloads oder laden Sie Ihr eigenes Payload hoch.",
  "liPress"        :'Drücken Sie: "Payload senden"',
  "liAPX"          :'Auf dem Erlaubnisbildschirm müssen Sie "APX" auswählen und zustimmen.',
  "liLaunch"       :"Falls alles richtig läuft, sollte das Payload gesendet sein!",
  "h1SetupDelivery" :"Konfiguration des Payloadversandes",
  "h4SelectPayload" :"Wähle ein Payload:",
  "optionInstantV5" :"Boote die CFW direkt (5.0.x)",
  "optionInstantV4" :"Boote die CFW direkt (4.0.x)",
  "optionHekateV5"  :"Hekate für 5.0.x Switches",
  "optionHekateV4"  :"Hekate für 4.0.x Switches",
  "optionFusee"     :"(Re)Switched Test Payload (fusee)",
  "optionUpload"    :"Eigenes Payload hochladen",
  "h4GetByteArray"  :"Erhalte das Payload Byte-Array (nicht senden)",
  "goButton"        :"Sende das Payload!",
  "clearlogsbutton" :"Protokoll leeren",
  "disclaimer1" :'Der Quellcode kann hier gefunden werden: <a href="https://github.com/ElijahZAwesome/web-cfw-loader/">GitHub</a> (oder indem man sich den Quellcode direkt ankuckt, da kein Backend existiert!).',
  "disclaimer2" :'Portiert von <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Danke an ktemkin und ReSwitched, aber auch <br><a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">Atlas44 und seine Webseite</a>, als einen Startpunkt für dieses Projekt.',
  "disclaimer4" :'Zuletzt danke an <a href="https://github.com/falquinho">falquinho</a> für sein Bootstraplayout und Übersetzung in Portugiesisch, <a href="https://github.com/Filo97">Filo97</a> für die italienische Übersetzung, <a href="https://github.com/tumGER"> tumGER </a>für seine deutsche Übersetzung und <a href="https://github.com/lordfriky">Lord_Friky</a> für die spanisch Übersetzung!.'
}
