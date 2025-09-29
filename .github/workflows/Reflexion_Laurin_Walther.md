# Reflexion 

**Grundaufbau Pipeline**

- Zuerst wird definiert wann die Pipeline aktiviert wird
- In den Jobs werden die einzelnen Schritte definiert
  - Zuerst wird der Code ausgecheckt
  - Danach werden die Abhängigkeiten installiert
  - Dann wird das Linting und Testing ausgeführt
  - Am Ende wird das Pseudo Deployment ausgeführt

**Begründung der Schritte**

- Code checkout -> um den Code aus dem Repository zu bekommen
- Abhängigkeiten installieren -> um die benötigten Pakete zu bekommen
- Linting -> um den Code auf Fehler zu überprüfen
- Testing -> um zu überprüfen ob der Code funktioniert
- Deployment -> um den Code zu deployen
- Diese Abfolge gewählt weil sie logisch nacheinander folgen

**Erklärung der Begriffe**

- Trigger -> on: [push, pull_request] -> wann die Pipeline aktiviert wird
- Jobs -> welche Jobs ausgeführt werden -> unterteilt in Lint, Test und Deployment
- Steps -> welche Schritte in den Jobs ausgeführt werden -> z.B Checkout vom Code
- Actions -> Aktionen die Ausgeführt werden und schon entwickelt sind -> z.B. actions/checkout@v2
- Runs -> Befehl der ausgeführt wird -> z.B. npm install

**Erklärung meiner Schritte**

- npm ci -> clean install um die Abängigkeiten zu installieren
- npm run lint -> Linting um den Code zu überprüfen
- npm run test -> Tests ausführen um zu überprüfen ob alles funktioniert
- checkout -> Code aus dem Repository auschecken
- uses -> Aktion die ausgeführt wird
- name -> Name des Schrittes
- run -> Befehl der ausgeführt wird
- env -> Umgebungsvariablen die gesetzt werden
- if -> Bedingung wann der Schritt ausgeführt wird

**Optimierung**
Man könnte noch mehrere Optimierungen machen, im Moment ist die Pipeline noch recht simpel gestaltet

- Caching 
- Parallele Jobs
- Fehlerhandling mit If
- Notifikationen bei Fehlern



    