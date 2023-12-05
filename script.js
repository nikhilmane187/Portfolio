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
