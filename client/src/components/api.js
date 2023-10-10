import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez cette URL par l'URL de l'API Winamaz
        const response = await axios.get(
          'https://api.rawg.io/api/games/{id}/suggested', // Utilisez l'endpoint de recherche
          {
            
              "id": 0,
              "slug": "string",
              "name": "string",
              "name_original": "string",
              "description": "string",
              "metacritic": 0,
              "metacritic_platforms": [
                {
                  "metascore": 0,
                  "url": "string"
                }
              ],
              "released": "2023-10-08",
              "tba": true,
              "updated": "2023-10-08T21:37:40Z",
              "background_image_additional": "string",
              "website": "https://www.instant-gaming.com/fr/",
              "rating": 0,
              "rating_top": 0,
              "ratings": {},
              "reactions": {},
              "added": 0,
              "added_by_status": {},
              "playtime": 0,
              "screenshots_count": 0,
              "movies_count": 0,
              "creators_count": 0,
              "achievements_count": 0,
              "parent_achievements_count": "string",
              "reddit_url": "string",
              "reddit_name": "string",
              "reddit_description": "string",
              "reddit_count": 0,
              "twitch_count": "string",
              "youtube_count": "string",
              "reviews_text_count": "string",
              "ratings_count": 0,
              "suggestions_count": 0,
              "alternative_names": [
                "string"
              ],
              "metacritic_url": "string",
              "parents_count": 0,
              "additions_count": 0,
              "game_series_count": 0,
              "esrb_rating": {
                "id": 0,
                "slug": "everyone",
                "name": "Everyone"
              },
              "platforms": [
                {
                  "platform": {
                    "id": 0,
                    "slug": "string",
                    "name": "string"
                  },
                  "released_at": "string",
                  "requirements": {
                    "minimum": "string",
                    "recommended": "string"
                  }
                }
              ]
            }
          
        );
        setProducts(response.data.content.example);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.link}>
              <h3>Nom du produit : {product.name}</h3>
              <p>Prix : {product.price} €</p>
              <p>Réduction : {product.discount}%</p>
              <p>Date : {product.date}</p>
              <p>
                Lien d'affiliation : <a href={product.link}>Acheter maintenant</a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
