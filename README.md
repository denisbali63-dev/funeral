# Bali Funeral — Repository

Questo branch (enhance/pwa-and-images) contiene una serie di miglioramenti per rendere il sito più robusto, veloce e compatibile con GitHub Pages e PWA.

Modifiche applicate in questo branch

- Correzione dell'HTML malformato (meta chiusure, JSON-LD valido).
- Miglioramenti a `index.html`: aggiunta di `<base href="/">`, collegamento a `manifest.json`, preload CSS/JS, registro del service worker (`sw.js`) e supporto `<noscript>`.
- Aggiunto `sw.js` (service worker) per caching di base.
- Aggiunta `404.html` (redirect a `/`) per supporto SPA su GitHub Pages.
- Aggiunta `.nojekyll` per evitare il processamento Jekyll.
- Aggiornato `manifest.json` per usare il percorso assoluto dell'icona (`/logo.jpeg`).

Cosa manca (azioni consigliate)

1. Ottimizzazione immagini (non effettuata automaticamente in questo commit):
   - Consiglio: comprimere i JPEG a qualità 85% (o 75% se vuoi più risparmio) usando strumenti come `jpegoptim`, `mozjpeg`, `ImageMagick` o `pngquant` per PNG.
   - Esempi di comandi locali:
     - `jpegoptim --max=85 monument.png`
     - `jpegoptim --max=85 casket.jpeg`
     - `pngquant --quality=65-80 monument.png --output monument.min.png`
     - `convert img.jpg -strip -interlace Plane -quality 85 img.optim.jpg` (ImageMagick)
   - Dopo l'ottimizzazione, sostituisci i file nella root del repo o crea versioni `*.min.jpg` e aggiorna i riferimenti (se necessari).

2. Verifiche post-deploy su GitHub Pages
   - Settings → Pages: assicurati che la source sia `main`/root o il branch desiderato.
   - Se usi un dominio personalizzato (CNAME presente), verifica i record DNS (A/CNAME) come da documentazione GitHub Pages.
   - Apri DevTools:
     - Network: controlla che `main.886c6bae.js`, `main.28b5fb0d.css`, `logo.jpeg` e le immagini ritornino 200.
     - Console: controlla eventuali errori JS.
     - Application → Service Workers: verifica che `sw.js` sia registrato.

Come procedere per integrare su `main`

- Revisiona i file presenti nel branch `enhance/pwa-and-images`. Quando sei pronto, crea una Pull Request verso `main` e verifica le modifiche su GitHub Pages dopo il merge.

Se vuoi che io:
- Esegua l'ottimizzazione immagini automaticamente e sostituisca i file nel branch (nota: l'ambiente qui non modifica le immagini; posso creare versioni minificate solo se fornisci i file ottimizzati o vuoi che aggiunga file `*.min` vuoti come segnaposto), oppure
- Ti aiuti a creare la Pull Request tramite API (posso mostrarti i comandi `gh` o istruzioni per crearlo manualmente), fammi sapere.

Link utili

- Branch: https://github.com/denisbali63-dev/funeral/tree/enhance/pwa-and-images
- Index (ultima versione): https://github.com/denisbali63-dev/funeral/blob/enhance/pwa-and-images/index.html
- Service worker: https://github.com/denisbali63-dev/funeral/blob/enhance/pwa-and-images/sw.js

---

Se vuoi che proceda ora a:
- ottimizzare le immagini (ho bisogno che mi confermi come vuoi procedere: sovrascrivere o aggiungere `*.min`),
- aprire io la Pull Request,
- oppure lasciare tutto sul branch per la tua revisione,

rispondi con la tua scelta e la applicherò.