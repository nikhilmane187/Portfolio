document.addEventListener('DOMContentLoaded', function () {
    const recipeList = document.getElementById('recipe-list');

    // Hard-coded recipes (in a real app, you would fetch this from a database or API)
    const recipes = [
        {
            name: 'Spaghetti Bolognese',
            ingredients: ['500g ground beef', '1 onion', '2 cloves garlic', '1 can tomato sauce', 'Spaghetti'],
            instructions: 'Cook ground beef, onion, and garlic. Add tomato sauce. Serve over cooked spaghetti.'
        },
        {
            name: 'Chicken Stir-Fry',
            ingredients: ['300g chicken breast', '1 bell pepper', '1 cup broccoli florets', 'Soy sauce', 'Rice'],
            instructions: 'Stir-fry chicken and vegetables. Add soy sauce. Serve over cooked rice.'
        },
        {
            name: 'Classic Chocolate Chip Cookies',
            ingredients: ['1 cup unsalted butter, softened', '1 cup granulated sugar', '1 cup packed brown sugar', '2 large eggs', '1 teaspoon vanilla extract', '3 cups all-purpose flour', '1 teaspoon baking soda', '1/2 teaspoon baking powder', '1/2 teaspoon salt', '2 cups chocolate chips'],
            instructions: '1. Preheat the oven to 350°F (180°C). Line baking sheets with parchment paper.\n\n2. In a large bowl, cream together softened butter, granulated sugar, and brown sugar until smooth and creamy.\n\n3. Add eggs one at a time, beating well after each addition. Stir in vanilla extract.\n\n4. In a separate bowl, whisk together flour, baking soda, baking powder, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.\n\n5. Fold in the chocolate chips until evenly distributed in the cookie dough.\n\n6. Drop rounded tablespoons of dough onto the prepared baking sheets, leaving some space between each cookie.\n\n7. Bake in the preheated oven for 10-12 minutes or until the edges are golden but the centers are still soft.\n\n8. Allow the cookies to cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely.'
        },        
        // Add more recipes as needed
    ];

    // Display recipes
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const nameElement = document.createElement('h2');
        nameElement.textContent = recipe.name;

        const ingredientsElement = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsElement.appendChild(li);
        });

        const instructionsElement = document.createElement('p');
        instructionsElement.textContent = 'Instructions: ' + recipe.instructions;

        recipeElement.appendChild(nameElement);
        recipeElement.appendChild(ingredientsElement);
        recipeElement.appendChild(instructionsElement);

        recipeList.appendChild(recipeElement);
    });
});
