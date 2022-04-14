## Dynamisk Webbutveckling - Laboration1

En skoluppgift där jag skapar ett API med NodeJs och Express. I mitt API så kan man skapa, läsa, uppdatera samt ta bort produkter.
Dessa funktioner nyttjas även sedan i mitt frontend.

### Uppfyllda kriterier för godkänt

1. [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
   - Endpoints implementerade i /server/api.js
2. [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
   - Filen finnes i /api.rest
3. [x] Datan som API:et hanterar sparas lokalt i serverfilen
   - OBS ersatt med krav 2 från kriterier för väl godkänt
4. [x] APIét ska svara med 404 om datan saknas.
   - GET, PUT & DELETE svarar 404 om produkten saknas
5. [x] Git & GitHub har använts
   - Repositoryt finnes på https://github.com/OliviaIsberg/DynamiskWebbutveckling-Laboration-1
6. [x] Projektmappen innehåller en README.md fil
   - Du läser den redan!
7. [x] Uppgiften lämnas in i tid!
   - =)

### Uppfyllda kriterier för väl godkänt

1. [x] Alla punkter för godkänt är uppfyllda
   - Se ovan
2. [x] All data skall vara sparad i en JSON-fil istället för i serverfilen
   - All data sparas i /server/data.json
3. [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
   - POST, PUT & DELETE uppdaterar /server/data.json
4. [x] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
   - Gränsnittet hostas utav express-servern på http://localhost:3000/
5. [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
   - Endpoint implementerad i /server/api.js

### Starta projektet

```
git clone https://github.com/OliviaIsberg/DynamiskWebbutveckling-Laboration-1
cd DynamiskWebbutveckling-Laboration-1
npm install
npm start
```

Testa APIt med medföljande fil "api.rest" eller genom att surfa till http://localhost:3000/
