// config.js — Classement mondial (Supabase, projet « Cascade Tap »).
//
// • Tant que la clé contient "XXXX", le jeu reste en mode LOCAL (par appareil).
// • Renseigne ta clé "anon public" pour activer le classement MONDIAL + saisons.
//   Supabase → ton projet → Project Settings → API :
//     - "Project URL"  -> url
//     - "anon public"  -> key
//
// ⚠️ N'utilise QUE la clé "anon public" (jamais la "service_role").
// Ce fichier va dans le même dossier que index.html (repo GitHub / build Capacitor).

window.ATC = {
  url: "https://rlgzadiyhjmfmztopfdu.supabase.co",   // projet Cascade Tap
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZ3phZGl5aGptZm16dG9wZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MDQ0MDYsImV4cCI6MjEwNTA4MDQwNn0.TWlRhqAkPLFmEIJu63dlTqPQqe2ExhY566fWSDldC2M"
};

// --- Publicités (AdMob) ---
// En web/aperçu : pubs en MODE DÉMO (placeholder). Les vraies pubs ne
// fonctionnent que dans le build Capacitor (plugin @capacitor-community/admob).
// AdMob impose une app + des blocs pub PAR application : crée une nouvelle
// app "Squawk" dans AdMob et colle ici tes IDs (interstitiel + récompensé).
// Laisse les IDs de test tant que l'app n'est pas validée.
window.ATC_ADS = {
  interstitial: "ca-app-pub-3940256099942544/1033173712", // ID de TEST (à remplacer)
  rewarded:     "ca-app-pub-3940256099942544/5224354917"  // ID de TEST (à remplacer)
};

