# Crystal Collector Game

## Overview

The Crystal Collector is an interactive, browser-based game where players collect randomly assigned crystals to match a target score without exceeding it. This game utilizes JavaScript, jQuery, Bootstrap, HTML, and CSS to create a dynamic and visually appealing experience.

## How to Play

1. **Objective:** Match the total score to the randomly generated target number without going over.
2. Click on any of the four crystals to add their hidden values to your total score.
3. Each crystal has a different hidden value that resets every game.
4. If your total score matches the target number, you win!
5. If your total score exceeds the target number, you lose and the game restarts.
6. The game will track your wins and losses.
7. Background music will start upon the first crystal click.

## Technologies Used

- **HTML5**: Provides the game structure and layout.
- **CSS3**: Handles styling and responsiveness.
- **Bootstrap 4**: Ensures a clean, mobile-responsive design.
- **JavaScript (ES6)**: Core logic and game mechanics.
- **jQuery**: Simplifies DOM manipulation and event handling.
- **Audio/Video Elements**: Background music and dynamic visual experience.

## Features

- **Dynamic Target Number**: A new random number is assigned at the start of each game.
- **Randomized Crystal Values**: Each crystal gets a new hidden value each game session.
- **Live Score Tracking**: Updates the total score dynamically.
- **Win/Loss Counter**: Keeps track of how many games you've won and lost.
- **Interactive UI**: Clickable crystals wrapped inside button elements to improve usability.
- **Mobile Compatibility**: Designed to be playable on both desktop and mobile devices.
- **Auto-Playing Background Music**: Music starts when the user interacts with the game.

## Algorithms & Methods

### **Random Number Generation**

- `targetNumber = Math.floor(Math.random()*101) + 19;`
  - Ensures a target score between 19 and 120.
- `crystal[i].attr("data-value", Math.floor(Math.random()*12)+2);`
  - Assigns each crystal a random value between 2 and 13.

### **Event Handling & DOM Manipulation**

- Uses jQuery's `.on("click", function() { ... })` to detect crystal clicks.
- Updates the total score dynamically using:
  ```js
  score += parseInt($(this).attr("data-value"));
  $("#score").html(score);
  ```
- Triggers background music only on the first interaction:
  ```js
  if (audio.paused) {
    audio.play();
  }
  ```

### **Game Logic**

- The game resets when the player wins or loses:
  ```js
  if (score == targetNumber) {
    wins++;
    initialize();
  } else if (score > targetNumber) {
    loss++;
    initialize();
  }
  ```
- Win/loss counters are stored and updated dynamically.

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/crystal-collector.git
   ```
2. Navigate to the project folder:
   ```sh
   cd crystal-collector
   ```
3. Open `index.html` in a browser.

## Future Enhancements

- Replace crystal images with transparent-background PNGs for better visuals.
- Improve mobile responsiveness to prevent UI overflow.
- Add animations and sound effects for better engagement.
- Implement a difficulty mode with increasing target numbers and limited clicks.

## Contributing

If you'd like to contribute, feel free to submit a pull request with improvements or optimizations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
