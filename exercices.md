# Exercice : Améliorer l'API de la liste de recettes

## Objectif
Cet exercice est un test d'entretien visant à évaluer les compétences du candidat en développement backend. L'objectif est d'améliorer l'API de la liste de recettes en ajoutant des fonctionnalités de filtrage, de tri et de pagination.


## Étapes à suivre

### Étape 1 : Lancer le serveur node et react
- Se servir du package.json pour lancer le serveur node ainsi que le serveur de dev React

### Étape 2 : Intégration
- Modifier l'intégration pour avoir le rendu  des recettes comme demandé
- Utiliser Material-UI Icons pour les icones: https://mui.com/material-ui/material-icons/

### Étape 3 : Implémenter la pagination
- Utiliser les paramètres `page` et `limit` sur /recipes pour ajouter la pagination

### Étape 4 : Implémenter le tri
- Utiliser les paramètres `sortBy` et `order` pour trier sur les propriétés suivantes:
  - `createdAt` (ascendant ou descendant)
  - `duration` (ascendant ou descendant)

### Étape 5 : Ajouter des fonctionnalités de filtrage
- Utiliser les paramètres décrites dans README.md pour filtrer par :
  - Niveau de difficulté (`beginner`, `intermediate`, `advanced`)
  - Ingrédients (Récupérer la liste des ingrédients disponible via l'api /ingredients et implémenter une liste pour sélectionner l'ingrédient pour récupérer uniquement les recettes utilisant cet ingrédient)


