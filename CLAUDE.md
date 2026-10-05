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
    class V1,V2,V3,V4,V5 done
    class V6 current
```

Vihreä = tehty, keltainen = käynnissä.

## Edistyminen

**Tila:** Vaihe 6 käynnissä (5.10.2026). Sovellus on julkaistu GitHub Pagesissa osoitteessa https://jussidoesntcode.github.io/Tehtavalista/ ja toimii. Jäljellä on vaiheen 6 kertaus sekä loppuyhteenveto ja muistilista.

### Tehty
- **Vaihe 1:** Käyttäjä loi julkisen repon "Tehtavalista" ja README.md:n.
- **Vaihe 2:** Claude Code toimii näin: oma väliaikainen ympäristö → commit → push → oma haara GitHubissa. `main` ei muutu ilman käyttäjää.
- **Vaihe 3:** Sovellus rakennettiin viitenä pienenä committina (HTML → CSS → lisääminen → tehdyksi/poisto → localStorage). Ulkoasu on musta ja teksti vihreä (käyttäjän toive). Revert-harjoitus: tallennus-commit peruttiin ja palautettiin.
- **Vaihe 4:** PR #1 tarkistettiin "Files changed" -välilehdellä ja mergettiin. Tarkistuksessa löytyi käyttäjän sähköpostiosoite vanhasta commitista, joten repo luotiin uudelleen (ks. Huomioita). Merge-commit, Delete branch ja Revert-painike käytiin läpi.
- **Vaihe 5:** Käyttäjä loi issuen #2 (välilyönnit jäävät kenttään) mallilla nyt / pitäisi / valmis kun. Tehtävänanto "Korjaa issue #2" → PR #3, jossa "Fixes #2" → merge → issue sulkeutui automaattisesti.
- **Vaihe 6:** Käyttäjä otti Pagesin käyttöön (Settings → Pages → Deploy from a branch → main, / (root)). Pages-valikkoa ei löytynyt vasemmasta valikosta, mutta suora linkki .../settings/pages toimi. Sovellus toimii julkaistussa osoitteessa.

### Opittua
- Commit on tallennuspiste. Pienet commitit = luettava historia, helppo tarkistaa ja helppo perua.
- Diff: vihreä = lisätty, punainen = poistettu. Katso tiedostojen nimet ja muutoksen koko. Koodin yksityiskohdat voi ohittaa.
- Revert on uusi commit, joka kumoaa aiemman. Mitään ei katoa historiasta.
- Konflikti: jos myöhempi commit muuttaa samaa kohtaa, aiemman commitin peruminen on hankalaa.
- Testaa ennen commitia (commit 4:ssä testi paljasti rikkinäisen ulkoasun ennen pushia).
- Commitin pitää olla kokonainen ja toimiva pala, ei välivaihetta, jossa sivu on rikki.
- Julkisessa repossa myös commitien tekijätiedot (nimi ja sähköposti) ovat julkisia. Tarkista GitHubin sähköpostiasetus aina ennen uutta projektia.
- Haara ja PR antavat pysähtymiskohdan ennen mergeä. Ennen mergeä korjataan (uusi commit samaan haaraan) tai hylätään (Close pull request). Mergen jälkeen perutaan (Revert).
- Kun PR on mergetty, haara poistetaan. Uusi työ = uusi haara ajantasaisesta mainista = uusi PR.
- Issue = mitä tehdään, haara + commitit + PR = miten. "Fixes #N" PR:n kuvauksessa sulkee issuen automaattisesti mergen yhteydessä. Issuet ja PR:t jakavat saman numerosarjan.
- Hyvin kirjoitettu issue riittää tehtävänannoksi: "Korjaa issue #N".
- GitHub Pages julkaisee main-haaran. Siksi keskeneräinen työ pidetään haaroissa.
- localStorage on selainkohtainen: tehtävät näkyvät vain omassa selaimessa.
- CLAUDE.md on hyvä pohjatieto myös Claude Chatille, kunhan se on ajan tasalla ja mergetty mainiin.

### Ideoita issueiksi
- Rastittamaton valintaruutu on valkoinen eikä sovi mustavihreään teemaan. (Ei vielä issueta, käyttäjä halusi siirtyä vaiheeseen 6.)
- ~~Välilyönnit jäävät tekstikenttään~~ → korjattu (issue #2, PR #3).

### Huomioita
- Claude teki README-muutoksen ennen kuin koko ohje oli saatu (ensimmäinen viesti katkesi). Muutos jätettiin voimaan (revert-harjoitus tehtiin toiselle commitille).
- **Repo luotiin uudelleen (5.10.2026):** Vanhan repon ensimmäisessä commitissa näkyi käyttäjän oikea sähköpostiosoite. Käyttäjä otti GitHubissa käyttöön asetuksen "Keep my email addresses private", poisti vanhan repon ja loi uuden samalla nimellä. Clauden commitit siirrettiin uuden repon päälle, ja ensimmäinen PR avattiin uudelleen.
- Kahden revert-harjoituksen commit-viestissä mainitaan vanhan repon commit-tunnisteet (85dc79a, 859b22c). Niitä ei ole enää olemassa. Viestien muokkaus olisi vaatinut historian uudelleenkirjoitusta, jota ei tehty.

### Seuraava vaihe
- Vaiheen 6 lyhyt kertaus ja ymmärryksen varmistus.
- Loppuyhteenveto opituista asioista ja muistilista seuraavaa omaa projektia varten.

### Lopputulos (tavoite)
- Toimiva tehtävälista ja selkeä commit-historia.
- Sovellus julkaistu GitHub Pagesissa.
- Yhteenveto opituista asioista ja muistilista seuraavaa omaa projektia varten.
