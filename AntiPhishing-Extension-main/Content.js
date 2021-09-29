chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const re = new RegExp('Votre adresse a été choisie', 'i')
    const w1 = "offre", w2 = "Votre adresse a été choisie", w3 = "incroyable", w4 = "gratuit"
    // const matches = document.documentElement.innerHTML.match(re)
    const test = document.documentElement.innerHTML.search(w1|w2|w3|w4)
    sendResponse({
        // count: matches?.length != null ? "Attention ! ça peut etre de l'hameçonnage" : 'OK'
        count: test != -1 ? "Attention ! ça peut etre de l'hameçonnage" : 'OK'
    })
})

// 'Félicitation',  'gi', 'gagné',  'gi',  
// 'argent',  'gi',  'deal',  'gi',  'incroyable',  'gi',  'meilleur prix',  'gi',  'identité',  'gi',  
// 'mot de passe',  'gi',  'carte banquaire',  'gi', 'offre',  'gi', 'gratuit',  'gi', "chiffre d'affaires",  'gi',  
// 'vous avez été choisie',  'gi',  'améliorez',  'gi',  "gagner de l'argent",  'gi',  'gains',  'gi',  'profits',  'gi',  
// 'pas de frais',  'gi',  'sans frais',  'gi',  'pour seulement',  'gi',  'pas cher',  'gi', 'dés maintenant',  'gi', 
// "dés aujourd'hui",  'gi',  "n'hésitez plus",  'gi', 'essai gratuit',  'gi',  'téléchargez',  'gi',  'remboursement',  'gi',  
// 'facilité',  'gi', 'payez',  'gi',  'inscription gratuite',  'gi',  'cadeau',  'gi', 'vente privée',  'gi',  'exceptionnel',  'gi',
// 'riche',  'gi',  'extra',  'gi',  'opportunité',  'gi',  'profit',  'gi',  'potentiel',  'gi',  'revenus',  'gi',  
// 'votre propre patron',  'gi', 'prime',  'gi', 'sans effort',  'gi',  'performances',  'gi',  'poids',  'gi',  'maigrir',  'gi',
// 'rides',  'gi',  'calvitie',  'gi',  'anxiété',  'gi', 'lots',  'gi',  'spécialement pour vous',  'gi', 'cliquez ici',  'gi', 
// '100%',  'gi',  'adhésion',  'gi'