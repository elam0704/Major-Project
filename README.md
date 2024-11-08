### elam0704_9103_tut6
# Major Project

## Instructions
 1. Press the Spacebar to start the game.
 2.	Press the S key to catch the left dropping block when it reaches the first yellow line.
 3.	Press the D key to catch the middle dropping block when it reaches the first yellow line.
 4.	Press the F key to catch the right dropping block when it reaches the first yellow line.
 5.	Each successful catch earns 100 points, and each miss will lose 50 points.
 6.	You can proceed to the next level regardless of your score.

## Chosen Method – User Input
###### In my approach, I focus on creating an interactive experience by using key inputs and selecting only a few main elements from Mondrian's artwork. Specifically, I've chosen to incorporate the yellow lines and the three larger rectangles as the main animated features. My approach to the artwork is significantly different from the other group members, where their design primarily involves changes in component sizes, colours, and reveal elements at different times, my approach introduces a game-based interaction. Instead of drawing the full piece, I’ve simplified the design by adapting only key elements to avoid visual overload.

###### I've always been a fan of rhythm games, like *Magic Tiles* and *Taiko no Tatsujin: Pop Tap Beat*, which inspire my concept. With influences from both these games and Mondrian's work, I aim to create a rhythm game where blocks drop from the three main elements in the centre, challenging the user to catch them in time.

![Taiko no Tatsujin: Pop Tap Beat](assets/Taiko.PNG)
![Magic Tiles](assets/MagicTiles.PNG)

## Technical Explanation
###### Most of the group code is changed for my design, as my idea has shifted while thinking about the structure of the game. However, I remain the concept of for loops and arrays for most the components introduced later in the code.

#### Components
###### Poping Circles and Squares are achieved through calling analyser.getLevel() inside drawCircle() and drawSquare() for  a popping effect.

#### Highlighting Key Press
###### The highlighting key press is for user feedback. This is achieved through setting a true statement for hitLine when s, d, f are pressed in keyPressed(). 

#### Scoring System
###### Score increase –  hitBlock() checks if user catches the dropping block within the height of 0.86 and 0.88 (proportion of the window size), they will be awarded 100 points for each catch.
###### Score deduct – In dropBlock(), the miss point was set to 0.9467 and score is reduced by 50 points.

#### Dropping blocks
###### The animated dropping block is achieved through a class where it defines the position, size, colour and speed. In terms of the interaction, once the user catches the dropping block within the hit range, it will disappear achieved by hide() at the end of the code. The dropping block has to disappear if user have caught the block, this is to prevent the clock from continuing to fall past the hit range, which would trigger a missed condition and reduce the score inaccurately.
