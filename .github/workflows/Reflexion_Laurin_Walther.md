# Reflexion 

**Grundaufbau Pipeline**

- Zuerst wird definiert wann die Pipeline aktiviert wird
- Danach sollten die Jobs nacheinander ausgeführt werden
  - Für mich macht es mehr Sinn das Linting zuerst und dann das Testing auszuführen
- Am Ende wird das Pseudo Deplyoment ausgeführt

**Erklärung der Begriffe**

- Trigger -> on: [push, pull_request] -> wann die Pipeline aktiviert wird
- Jobs -> welche Jobs ausgeführt werden -> unterteilt in Lint, Test und Deployment
- Steps -> welche Schritte in den Jobs ausgeführt werden -> z.B Checkout vom Code
- Actions -> Aktionen die Ausgeführt werden und schon entwickelt sind -> z.B. actions/checkout@v2
- Runs -> Befehl der ausgeführt wird -> z.B. npm install



    