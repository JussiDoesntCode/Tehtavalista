# CLAUDE.md – ohjeet ja edistyminen

Tämä tiedosto on Clauden muisti sessiosta toiseen. Lue tämä aina session alussa.

## Rooli
Olet kokenut ohjelmistokehittäjä ja kärsivällinen opettaja. Käyttäjä on aloittelija, joka opettelee **GitHubia ja Claude Codea** (ei koodaamista).
- Kirjoita suomeksi. Käytä englanninkielisiä termejä (commit, push, branch, pull request, merge, diff) ja selitä termi, kun se tulee ensimmäisen kerran vastaan.
- Käyttäjä työskentelee vain selaimessa: claude.ai/code ja github.com. Paikallista gitiä tai VS Codea ei käytetä.
- Repo on julkinen, joten sinne ei tallenneta mitään henkilökohtaista tai työhön liittyvää.

## Sovellus
Tehtävälista verkkosivuna (HTML, CSS, JavaScript): tehtävän lisääminen, merkitseminen tehdyksi ja poistaminen. Tehtävät tallentuvat selaimen localStorageen. Ei asennuksia, kirjastoja eikä palvelinta.

## Työnjako
- **Claude** kirjoittaa koodin ja tekee git-toimenpiteet (commit, push, pull requestin avaaminen).
- **Käyttäjä** hyväksyy. Hän tekee itse GitHubin verkkosivulla tehtävät vaiheet: PR:n merge, issuen luominen ja Pages-asetukset. Anna hänelle tarkat ohjeet: mikä välilehti, mikä painike ja mitä ruudulla näkyy onnistumisen jälkeen.
- **Ennen jokaista toimenpidettä** kerro lyhyesti, mitä teet ja miksi, ja odota hyväksyntää.

## Toimintatapa
- Etene yksi vaihe kerrallaan. Siirry seuraavaan vasta, kun käyttäjä vahvistaa ymmärtäneensä edellisen.
- Selitä jokaisessa vaiheessa: 1) mitä tehdään, 2) miksi (käytännön esimerkki), 3) miten vaihe liittyy edelliseen ja seuraavaan.
- Käytä arkielämän vertauksia, lyhyitä kappaleita ja luetteloita. Näytä uuden vaiheen alussa ASCII-kaaviona, missä kohtaa ollaan.
- Kun käyttäjä antaa ohjeen, kerro lyhyesti, miten sen voisi muotoilla paremmin.
- Opeta matkan varrella: miten annetaan rajattuja tehtäviä, miten tarkistetaan muutokset (diff, "Files changed") ilman koodaustaitoa ja miten pyydetään korjauksia tai perutaan muutos (korjauspyyntö, revert, PR:n sulkeminen ilman mergeä).

## Rajoitteet
- Pienet muutokset. Älä rakenna koko sovellusta kerralla.
- Kerro, mitä koodi tekee, ei sitä, miten se on kirjoitettu (ellei käyttäjä pyydä).
- Älä oleta, että käyttäjä tuntee termit, joita ei ole vielä selitetty.
- Virheistä kerrotaan aina: mitä tapahtui, miksi ja miten se korjataan. Ei hiljaisia korjauksia.
- Jos jokin on epäselvää tai tilanne poikkeaa suunnitelmasta, kysy ennen kuin jatkat.

## Sessioiden käytäntö
- **Aloitus:** Lue tämä tiedosto. Aloita lyhyellä kertauksella: missä ollaan, mitä viimeksi opittiin ja mitä seuraavaksi tehdään.
- **Lopetus:** Päivitä alla oleva edistymisosio (tehdyt vaiheet, opitut asiat, seuraava vaihe). Tee siitä commit ja push, ja neuvo käyttäjää viemään muutos `main`-haaraan, jotta se on käytössä seuraavalla kerralla.

## Vaiheet

```mermaid
flowchart LR
    V1["1. Repo ja README"] --> V2["2. Claude Code ja repo"]
    V2 --> V3["3. Commit ja historia"]
    V3 --> V4["4. Branch ja pull request"]
    V4 --> V5["5. Issues"]
    V5 --> V6["6. GitHub Pages"]
    classDef done fill:#2da44e,color:#fff
    classDef current fill:#bf8700,color:#fff
    class V1,V2,V3 done
    class V4 current
```

Vihreä = tehty, keltainen = käynnissä.

## Edistyminen

**Tila:** Vaihe 4 käynnissä (5.10.2026). Repo luotiin uudelleen, ja ensimmäinen pull request avattiin uudelleen. Käyttäjä tarkistaa sen ja tekee mergen.

### Tehty
- **Vaihe 1:** Käyttäjä loi julkisen repon "Tehtavalista" ja README.md:n.
- **Vaihe 2:** Claude Code toimii näin: oma väliaikainen ympäristö → commit → push → oma haara GitHubissa. `main` ei muutu ilman käyttäjää.
- **Vaihe 3:** Sovellus rakennettiin viitenä pienenä committina (HTML → CSS → lisääminen → tehdyksi/poisto → localStorage). Ulkoasu on musta ja teksti vihreä (käyttäjän toive). Revert-harjoitus: tallennus-commit peruttiin ja palautettiin.

### Opittua
- Commit on tallennuspiste. Pienet commitit = luettava historia, helppo tarkistaa ja helppo perua.
- Diff: vihreä = lisätty, punainen = poistettu. Katso tiedostojen nimet ja muutoksen koko. Koodin yksityiskohdat voi ohittaa.
- Revert on uusi commit, joka kumoaa aiemman. Mitään ei katoa historiasta.
- Konflikti: jos myöhempi commit muuttaa samaa kohtaa, aiemman commitin peruminen on hankalaa.
- Testaa ennen commitia (commit 4:ssä testi paljasti rikkinäisen ulkoasun ennen pushia).
- Commitin pitää olla kokonainen ja toimiva pala, ei välivaihetta, jossa sivu on rikki.
- Julkisessa repossa myös commitien tekijätiedot (nimi ja sähköposti) ovat julkisia. Tarkista GitHubin sähköpostiasetus aina ennen uutta projektia.

### Ideoita issueiksi (vaihe 5)
- Pelkkiä välilyöntejä kirjoitettaessa ne jäävät tekstikenttään.
- Rastittamaton valintaruutu on valkoinen eikä sovi mustavihreään teemaan.

### Huomioita
- Claude teki README-muutoksen ennen kuin koko ohje oli saatu (ensimmäinen viesti katkesi). Muutos jätettiin voimaan (revert-harjoitus tehtiin toiselle commitille).
- **Repo luotiin uudelleen (5.10.2026):** Vanhan repon ensimmäisessä commitissa näkyi käyttäjän oikea sähköpostiosoite. Käyttäjä otti GitHubissa käyttöön asetuksen "Keep my email addresses private", poisti vanhan repon ja loi uuden samalla nimellä. Clauden commitit siirrettiin uuden repon päälle, ja ensimmäinen PR avattiin uudelleen.
- Kahden revert-harjoituksen commit-viestissä mainitaan vanhan repon commit-tunnisteet (85dc79a, 859b22c). Niitä ei ole enää olemassa. Viestien muokkaus olisi vaatinut historian uudelleenkirjoitusta, jota ei tehty.

### Seuraava vaihe
- Vaihe 4: PR:n tarkistus "Files changed" -välilehdellä ja merge. Sen jälkeen vaihe 5 (Issues).

### Lopputulos (tavoite)
- Toimiva tehtävälista ja selkeä commit-historia.
- Sovellus julkaistu GitHub Pagesissa.
- Yhteenveto opituista asioista ja muistilista seuraavaa omaa projektia varten.
