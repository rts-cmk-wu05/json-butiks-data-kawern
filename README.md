![JSON logo](assets/json_logo-555px.png)

JSON står for JavaScript Object Notation. Det er en struktureret syntaks til dataobjekter.

JSON er et format til dataudveksling, som er let at læse og skrive.

JSON objekter minder på mange måder om arrays. Et JSON objekt har _nøgler_ og _værdier_. Nøgler og værdier er adskilt af et enkelt kolon.

```json
"nøgle": "værdi"
```

Hvis der er flere nøgle-værdi sæt i et JSON objekt skal de adskilles af et enkelt komma.

```json
"nøgle": "værdi",
"nøgle2": "værdi2",
"nøgle3": "værdi3"
```

Alle nøgle-værdi sæt, som tilhører et enkelt objekt, skal præsenteres i krølleparentes.

```json
{
    "nøgle": "værdi",
    "nøgle2": "værdi2",
    "nøgle3": "værdi3"
}
```

Hvis der er flere objekter i et JSON objekt, skal disse adskilles af et enkelt komma. Udover komma-adskillelsen, skal hele objektet præsenteres i firkantede parenteser. Vi kalder et JSON objekt med flere objekter for en _samling_.

```json
[{
    "nøgle": "værdi",
    "nøgle2": "værdi2",
    "nøgle3": "værdi3"
},
{
    "nøgle": "værdi",
    "nøgle2": "værdi2",
    "nøgle3": "værdi3"
},
{
    "nøgle": "værdi",
    "nøgle2": "værdi2",
    "nøgle3": "værdi3"
}]
```

>## Øvelse 1
>Lav et JSON objekt, der beskriver dig. Det kan indeholde ting som alder, køn, øjenfarve, fornavn, mellemnavne, efternavn, strømpefarve osv. Brug filen [migselv.json](migselv.json), som ligger i dette repository.

# Datatyper
En JSON værdi kan være en streng (`string`), tal (`number`), `array`, objekt (`object`), `boolean` eller `null`.

```json
[{
    "string": "Dette er en streng.",
    "number": 1234,
    "number": 123.4,
    "array": ["apples", "oranges", "strawberries"],
    "object": { "objectStuff": "Object content." },
    "JSONisAwesome": true,
    "TimeForABreak": false,
    "IFinallyGetJSON": null
}]
```

>## Øvelse 2
>Ret dit JSON objekt fra før til, så du bruger de forskellige datatyper.

# Nesting

JSON objekter understøtter _nesting_. Det vil sige, du kan have objekter inde i objekter. Der er ingen teoretisk grænse for hvor dybe objekter du kan lave, men forskellige sprog har begræsninger. For eksempel kan PHP klare 512 lag. Men hvis dit JSON objekt har så mange lag, skal du muligvis overveje, om din struktur er god.

Et nested JSON objekt kan se således ud:

```json
[{
    "make": "Toyota",
    "models": [{
        "name": "Yaris"
    },{
        "name": "Carina"
    }]
},{
    "make": "Ford",
    "models": [{
        "name": "Mondeo"
    },{
        "name": "Fiesta"
    }]
}]
```

Eller således:

```json
[{
    "name": {
        "family": "Emilius",
        "first": "Brian"
    },
    "contact": {
        "email": "be@rts.dk",
        "github": "https://github.com/BrianEmilius"
    }
}]
```

>## Øvelse 3
>Lav JSON objektet om dig selv om, så det benytter nesting, der hvor det giver mening.

>## Opgave
>Du skal nu lave dit eget JSON objekt, som repræsenterer et katalog over varene i en forretning.
>Sådan et katalog indeholder nøgler som for eksempel varenummer, varenavn, pris, antal, beskrivelse, lagerbeholdning, billede, og så videre.
>Du skal planlægge din samling ved at gøre brug af så mange af de forskellige datatyper, nesting, arrays, m.m. som du kan.
>Emnet er: Brians Ostebutik.

___
### Tips 
Du kan læse om JSON på hjemmesiden [json.org](http://json.org).

Hvis du vil kontrollere om dit JSON objekt er korrekt formateret, kan du bruge validatoren [jsonlint.com](https://jsonlint.com).

Mangler du inspiration til typer af oste, navne, beskrivelser og så videre, [så tag et kig her](http://lmgtfy.com/?q=oste).