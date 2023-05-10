## PayeTonKawa App


# Documentation du projet PayeTonKawa

## Résumé

Le projet PayeTonKawa est une application mobile React Native créée avec Expo. Il comporte divers composants et fonctionnalités, notamment une fonction de recherche, une caméra, un lecteur de code-barres et une gestion des produits.

## Structure du projet

Le projet est organisé en plusieurs dossiers principaux :

app: Contient le fichier principal App.js et le dossier navigation pour la gestion de la navigation

assets: Contient les images et les polices utilisées dans l'application

components: Contient tous les composants utilisés dans l'application

constants: Contient les fichiers liés aux constantes et aux thèmes de l'application

hooks: Contient un hook personnalisé pour effectuer des requêtes HTTP

styles: Contient les fichiers de style pour les différents composants

utils: Contient un fichier utilitaire pour vérifier les URLs d'image

### Dossier app

Le dossier app contient les sous-dossiers et fichiers suivants:

authentication: Contient les composants liés à l'authentification, y compris les écrans de connexion et d'inscription.

products: Contient les composants liés aux produits, comme la liste des produits, les détails du produit, etc.

search: Contient les composants liés à la recherche, tels que l'écran de recherche et les résultats de recherche.

started: Contient les composants liés à l'écran de démarrage de l'application, comme StartedScreen.

Fichiers complémentaires: Ces fichiers peuvent inclure des fichiers de configuration, des fichiers d'entrée, etc. pour aider à gérer et à organiser l'application.

### Dossier assets

Le dossier assets contient les images et les polices utilisées dans l'application. Les images sont stockées dans le dossier images et les polices dans le dossier fonts.

### Dossier components

Ce dossier contient les composants suivants :

authentication: Contient les composants liés à l'authentification de l'utilisateur.

common: Contient des composants réutilisables à travers l'application.

Home: Composant pour afficher la page d'accueil de l'application

ProductDetails: Composant pour afficher les détails d'un produit

Search: Composant pour effectuer des recherches de produits

StartedScreen: Composant pour afficher l'écran de démarrage de l'application

### Dossier constants

Ce dossier contient les fichiers liés aux constantes et aux thèmes de l'application :

images.js: Exporte les images importées à partir du dossier assets/images

index.js: Exporte toutes les constantes, icônes, thèmes et images

theme.js: Contient les couleurs, les polices, les tailles et les ombres utilisées dans l'application

### Dossier hooks
Ce dossier contient un hook personnalisé pour effectuer des requêtes HTTP :

useFetch.js: Utilise Axios pour effectuer des requêtes GET et gérer les erreurs, les données et l'état de chargement

### Dossier styles
Ce dossier contient les fichiers de style pour les différents composants :

search.js: Fichier de style pour le composant Search

### Dossier utils
Ce dossier contient un fichier utilitaire pour vérifier les URLs d'image :

utils.js: Contient la fonction checkImageURL pour vérifier si une URL est une URL d'image valide

## Fichiers à la racine du projet

app.json: Contient la configuration de l'application Expo, y compris les autorisations pour Android, la prise en charge des tablettes pour iOS et les dépendances du projet. Ce fichier est utilisé pour définir des configurations spécifiques à la plateforme et gérer les aspects généraux de l'application.

babel.config.js: Contient la configuration de Babel pour le projet, y compris les presets et les plugins nécessaires

index.js: Fichier d'entrée qui importe expo-router/entry

package-lock.json: Généré automatiquement par npm, contient des informations sur les versions exactes des dépendances du projet

package.json: Contient les dépendances, les scripts et les métadonnées du projet

## Récapitulatif

Le projet PayeTonKawa est une application mobile React Native qui utilise divers composants, fonctionnalités et dépendances pour offrir une expérience utilisateur complète. Les dossiers app, assets, components, constants, hooks, styles, et utils travaillent ensemble pour créer cette application, avec des fichiers de configuration supplémentaires à la racine du projet pour gérer les dépendances, la configuration de Babel, et l'application Expo.
