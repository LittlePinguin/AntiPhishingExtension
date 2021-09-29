chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const re = new RegExp('Votre adresse a été choisie', 'Félicitation', 'gagné', 
    'argent', 'deal', 'incroyable', 'meilleur prix', 'identité', 'mot de passe', 'carte banquaire',
    'RIB', 'offre', 'offre limitée', 'gratuite', 'gratuit', 'remise', 'promotion', 'soldes', 
    "chiffre d'affaires", 'vous avez été choisie', 'améliorez', "gagner de l'argent", 'gains', 'profits', 
    'pas de frais', 'sans frais', 'pour seulement', 'pas cher', 'coupon de réduction', 'coupon', 'dés maintenant',
    "dés aujourd'hui", "n'hésitez plus", 'remboursé', 'essai gratuit', 'téléchargez', 'remboursement', 'facilité', 
    'payez', 'inscription gratuite', 'cadeau', 'chèque', 'sans frais', 'vente privée', 'exceptionnel', 'autorisation',
    'riche', 'extra', 'opportunité', 'profit', 'potentiel', 'revenus', 'votre propre patron', 'millions', 'milliers',
    'prime', 'marketing', 'consultez', 'sans effort', 'performances', 'poids', 'maigrir', 'rides', 'calvitie', 'anxiété',
    'Paypal', 'Visa', 'Mastercard', 'Lots', 'spécialement pour vous', 'facture', 'cliquez ici', '100%', 'adhésion')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({
        count: matches?.length != null ? "Attention ! ça peut etre de l'hameçonnage" : 'OK'
    })
})