# Flow3-Week2
Ugens opgaver er indelt i mapper efter hvilken dag de er givet for.
Opgaven om nested routes fra mandag er lavet i projektet "react-router-getting-started".

**Gennemgang af læringsmål:**

**Mandag:**

1) Kunne forklare om behovet for og begrebet routing i en SPA
- Routing giver mulighed for i en SPA i forskellige dele med en route, altså en url, til hver del. Det betyder at hvis man vil linke folk til en bestemt del af ens side, så kan man det.

2) Hvordan virker react router.
- Routing fungere på den måde at du har en Router rundt om alt indholdet i din SPA. I den router har man en eller flere swithes, som indeholder de individuelle routes der hver har en unik path. Når pathen i urlen stemmer overnes med en route i switchen bliver det eller de componenter der er i routen mounted.

3) I egen kode vise eksempler på brug af react router og subroutes med parametre
- Se de to projekter fra mandag.

**Tirsdag** 

1) Kunne forklare begreberne Same Origin Policy samt CORS i forbindelse med REST/SPA
- SPO og CORS handler om hvem der har adgang til at bruge ting fra din side/endpoints. Som udgangspunkt har en side lov til at bruge ting fra en anden side med samme origin. Hvis sider har forskellige origins kan man bruge CORS headers til at specificere hvem der har adgang til inholdet og i hvilket omfang osv. Se opgaven fra tirsdag for eksempel.

2) Kunne forklare og demonstrere håndtering af brugerpasswords i en moderne web-applikation
- Den måde vi har valgt at håndtere passwords er at vi hasher dem med BCrypt før vi putter dem i databasen, når brugeren bliver oprettet. Når brugeren skal logge ind bruger vi også BCrypt til at verificere at det indtastede password stemmer overens med den hashværdi vi har i databasen. Se opgaven fra tirsdag for eksempel.

**Onsdag**

 1) Kunne forklare konceptuelt om Stateless Authentication med Json Web Tokens.
 - JWT er en måde at sørge for at en bruger ikke skal logge ind hver gang han sender en request. Tokenen består af en header, et payload og en signature. Headeren indeholde information om hvilken hashing algoritme man har brugt til at generere signaturen. Payload indeholde information om brugeren der er logged ind, fx navn og roles osv. Signaturen er headeren og payloaden lagt sammen og hashed. Den sørger for at man kan se om information i header eller payload er blevet ændret. Hvis noget er blevet ændret vil signature-værdien ikke stemme overens med headere+payload længere.
 
 2) Kunne implementere og forklare en JWT-baseret sikkerhedsløsning baseret på et udleveret startprojekt (Klient og Server-side)
 - Vi har ikke hørt så meget om hvordan JWT fungere serverside udover at den bliver generet når folk logger ind med en valid bruger og at vi så, i vores tilfælde, gemmer den i local storage i klientens browser. Tokenen har så en bestemt levetid, hvorefter man bliver nødt til at logge ind igen. Når brugeren logger ud sletter vi tokenen fra hans local storage, men der er et sikkerhedsproblem i forbindelse med at tokenen, hvis nogen har kunnet tage den fra local storage, stadig er gyldig i resten af sin levetid, selvom brugeren er logged ud og tokenen er væk fra local storage. 
 
 **Torsdag**
 
  1) Kunne foretage externe kald fra egen backend til anden server (Momondo Arkitekturen)
  - Se endpointet i jokeResource i projektet "jokeFetcher-momondo-demo" for eksempel.
