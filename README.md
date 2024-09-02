# Små övningar i React Router

## Övning 1: Grundläggande routing
1. **Skapa en enkel React-applikation** och installera React Router (`npm install react-router-dom`).
2. **Skapa tre komponenter**: `Home`, `About`, och `Contact`.
3. **Använd React Router** för att skapa en navigationsmeny med länkar till dessa sidor.
4. **Implementera routning** så att när du klickar på en länk, visas rätt komponent på sidan.

## Övning 2: Nested routes (inbäddade routes)
1. **Skapa en komponent** som heter `Dashboard`.
2. **Skapa två underkomponenter** som heter `Stats` och `Settings`.
3. **Använd nested routing** för att göra det möjligt att visa `Stats` och `Settings` som delkomponenter i `Dashboard`. Använd länkar för att navigera mellan dem.

## Övning 3: Redirect och 404-sida
1. **Skapa en komponent** som heter `NotFound` och visa ett meddelande som säger att sidan inte hittades.
2. **Lägg till en route** som matchar alla ospecificerade URL:er och visa `NotFound`-komponenten.
3. **Använd `<Navigate>`-komponenten** för att skapa en omdirigering från `/old-home` till `/home`.

## Övning 4: Skyddade rutter (Protected Routes)
1. **Skapa en state** i din applikation som håller koll på om användaren är inloggad eller inte.
2. **Skapa en skyddad komponent** som bara visar innehåll om användaren är inloggad. Om inte, omdirigera användaren till en inloggningssida.
3. **Implementera skyddade rutter** genom att använda den skyddade komponenten för att skydda vissa rutter.

## Övning 5: Dynamisk routing med parametrar
1. **Skapa en ny komponent** som heter `UserProfile`.
2. **Lägg till en route** för `UserProfile` med en dynamisk parameter, t.ex. `/user/:id`.
Extra:
3. **Använd `useParams`-hooken** för att hämta användar-ID:t från URL:en och visa det i `UserProfile`-komponenten.

## Övning 6: Använda `NavLink` för aktiv länkstil
1. **Skapa tre komponenter**: `Home`, `Services`, och `Contact`.
2. **Använd `NavLink` istället för `Link`** för att skapa en navigationsmeny där den aktuellt aktiva länken markeras med en speciell stil.
3. **Lägg till en CSS-klass** för att göra den aktiva länken tydlig (t.ex. fetstil eller en annan färg).

## Övning 7: Använda Outlet för layout med delad navigering
1. **Skapa en komponent** som heter Layout som innehåller en gemensam navigeringsmeny.
2. **Använd Outlet-komponenten** från React Router för att rendera barnkomponenterna inom Layout-komponenten.
3. **Definiera rutter** för sidorna `Home`, `About`, och `Contact`, alla inbäddade under Layout, så att de delar samma layout (t.ex. samma navigering och sidhuvud).

## Övning 8: Flerstegsformulär med inbäddade routes
* **Skapa en komponent** som heter Signup som fungerar som en övergripande komponent för ett flerstegsformulär.
* **Skapa tre delkomponenter:** `Step1`, `Step2`, och `Step3`, som representerar olika steg i formuläret (t.ex. Personlig Information, Kontouppgifter, och Sammanfattning).
* **Använd inbäddade routes** för att visa respektive steg inuti Signup-komponenten. Lägg till navigeringsknappar (**Nästa**, **Tillbaka**) för att flytta mellan stegen.
* Se till att bara en delkomponent visas åt gången och att användaren kan navigera fram och tillbaka mellan stegen utan att lämna Signup-komponenten.

