# Squawk — tour de contrôle

Jeu de contrôle aérien (HTML5/canvas, `index.html` autonome). Ce dépôt sert à
la fois de **bêta web (GitHub Pages)** et de **base au build iPhone (Capacitor/Xcode)**.

Contenu :
- `index.html` — le jeu (source unique).
- `config.js` — clés Supabase (classement) + IDs pubs. Reste en mode local/démo tant que `XXXX`.
- `atc_leaderboard.sql` — table du classement (à exécuter dans Supabase).
- `capacitor.config.json`, `package.json` — packaging iOS.

---

## A) Lien de test pour tes testeurs (GitHub Pages — gratuit)

1. Crée un dépôt **public** (compte jonathanbse84), ex. `squawk`.
2. Ajoute **`index.html`** et **`config.js`** à la racine (Add file → Upload files → Commit).
3. **Settings → Pages** → *Deploy from a branch* → `main` → `/ (root)` → Save.
4. Lien testeurs (1–2 min) : `https://jonathanbse84.github.io/squawk/`

Mise à jour du jeu : remplace `index.html`, Pages se rafraîchit tout seul.

---

## B) Installer sur iPhone via Xcode (Capacitor)

> À faire sur un **Mac** avec **Xcode** et **Node.js** installés.

Depuis le dossier du projet (celui qui contient `index.html`, `package.json`) :

```bash
npm install            # installe Capacitor
npm run copy           # copie index.html + config.js dans www/
npx cap add ios        # cree le projet iOS (dossier ios/)
npm run sync           # copie le web dans iOS (pod install inclus)
npx cap open ios       # ouvre Xcode
```

Dans **Xcode** (cible **App**) :
1. **Signing & Capabilities** -> coche *Automatically manage signing* -> **Team = Groupe BSE**.
   Bundle Identifier : `com.groupebse.squawk` (il apparait tout seul).
2. **General -> Deployment Info** : orientation **Paysage** (le radar est en paysage).
3. Branche ton iPhone en USB, selectionne-le en haut, **Run** (fleche).
   Premiere fois sur le tel : *Reglages -> General -> VPN et gestion de l'appareil -> faire confiance*.
4. Pour l'App Store : *Any iOS Device (arm64)* -> **Product -> Archive -> Distribute -> App Store Connect**, puis TestFlight (comme Bloop Drop).

A chaque modif du jeu : `npm run sync` puis relance dans Xcode.

**Conseil** : fais ce **premier build SANS AdMob** (les pubs sont en mode demo dans le jeu). Une fois que ca tourne sur ton iPhone, on passe aux vraies pubs.

---

## C) Classement mondial (Supabase, gratuit — projet Cascade Tap)

1. Supabase -> Cascade Tap -> **SQL Editor** -> colle `atc_leaderboard.sql` -> **Run** (ne touche a rien de Bloop Drop).
2. Project Settings -> **API** -> copie *Project URL* + *anon public* dans `config.js`.
3. Push -> classement mondial + saisons (reset mensuel) actifs. Tant que `XXXX` : classement local.

---

## D) Vraies pubs AdMob (phase 2, apres le 1er build iPhone)

AdMob impose une **app + des blocs pub par application** -> cree une app **Squawk** dans AdMob
(ne reutilise pas ceux de Bloop Drop) et mets tes IDs dans `config.js` (`window.ATC_ADS`).

```bash
npm i @capacitor-community/admob@6
npm run sync
```
Puis dans `ios/App/App/Info.plist` : `GADApplicationIdentifier`, `SKAdNetworkItems`,
et `NSUserTrackingUsageDescription` (comme Bloop Drop). On branchera ensuite les appels
AdMob (interstitiel + recompense) dans le jeu — dis-moi quand tu en es la.
