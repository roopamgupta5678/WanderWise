import { destinations } from '../data/destinationsData';

/**
 * Find destinations based on user preferences
 * @param budget - 'low', 'medium', or 'high'
 * @param continent - continent preference or 'any'
 * @param season - 'spring', 'summer', 'fall', or 'winter'
 * @param interest - primary interest category
 */
export const findDestinations = (
  budget: string,
  continent: string,
  season: string,
  interest: string
) => {
  // Convert season to bestSeason format (capitalize first letter)
  const formattedSeason = season.charAt(0).toUpperCase() + season.slice(1);
  
  // Filter destinations based on criteria
  let results = destinations.filter(destination => {
    // Budget check (allow for some flexibility)
    const budgetMatch = budget === destination.budget ||
      (budget === 'medium' && (destination.budget === 'low' || destination.budget === 'high'));
    
    // Continent check
    const continentMatch = continent === 'any' || destination.continent === continent;
    
    // Season check
    const seasonMatch = destination.bestSeason === formattedSeason ||
      // For winter/summer in opposite hemispheres
      (formattedSeason === 'Winter' && destination.bestSeason === 'Summer' && 
       (destination.continent === 'south-america' || destination.continent === 'oceania' || destination.continent === 'africa')) ||
      (formattedSeason === 'Summer' && destination.bestSeason === 'Winter' && 
       (destination.continent === 'south-america' || destination.continent === 'oceania' || destination.continent === 'africa'));
    
    // Interest check
    const interestMatch = destination.interests && destination.interests.includes(interest);
    
    // Weight factors differently - interest and budget are more important than season
    if (continentMatch && (budgetMatch || seasonMatch) && interestMatch) {
      return true;
    }
    
    // If very few results, relax criteria
    return (continentMatch && budgetMatch && interestMatch) || 
           (continentMatch && interestMatch) ||
           (budgetMatch && interestMatch);
  });
  
  // Sort results by relevance (simplified scoring)
  results = results.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    
    // Budget match
    if (a.budget === budget) scoreA += 3;
    if (b.budget === budget) scoreB += 3;
    
    // Season match
    if (a.bestSeason === formattedSeason) scoreA += 2;
    if (b.bestSeason === formattedSeason) scoreB += 2;
    
    // Interest match (assuming interests is an array)
    if (a.interests && a.interests.includes(interest)) scoreA += 5;
    if (b.interests && b.interests.includes(interest)) scoreB += 5;
    
    // Rating as tiebreaker
    if (scoreA === scoreB) {
      return b.rating - a.rating;
    }
    
    return scoreB - scoreA;
  });
  
  // Return top 3 results
  return results.slice(0, 3);
};