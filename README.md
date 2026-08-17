# Take Home Interview Exercise

## Introduction

**COMPLETION TIME:** 2 hours

Below are specifications for the style and behavior of the `mockup.png` in this same directory. The task is to recreate that mockup with the specified behavior below. You can use any framework that is comfortable for you or... no framework at all! (React is preferred as that is what our tech stack is based on). The goal is to present a functioning application to our developers and be prepared to answer any questions we may have about your approach and potentially how this application can be extended in its functionality.

**IMPORTANT:** If you are using a framework, please use a scaffolding tool to build out your project such as [Create React App](https://create-react-app.dev/) or [Vite](https://vitejs.dev/) to ensure you spend the 2 hours developing the requested functionality instead of configuring a build system for the project.

## Style Specifications

There is a convenience css file to set up some initial global styles for the app.

Things to Ignore:
* Icons in actions as top
* Determing if a button should be disabled based on the stat value
* Varying font colors within a card

### General Layout
* Global actions at the top - "Add Character", "Attack all characters"
* Background: #182432
* Content Container - 80% with a max width of 1500px (mockup is off center, but it should be centered on the page)

### Card Layout
* Should be rows of 3 cards
* Each card should have a fluid width based on the container's size
* All cards should be the same width regardless of whether or not they are the only card in the row
* Even spacing between cards
* Left edge cards should line up with top global actions
* Each card, regardless of height, should be the same height as other cards in the row

* Bonus:
    * Screen width 900px and down - display 2 cards per row
    * Screen Width 580px and down - display 1 card per row

### Card:
* Background: #283243
* Curved edges with 1px border all the way around
    * Border: 1px #4F5E74
    * 4px Rounded Corners
* 20px horizontal and vertical padding between cards
* Randomized header images (based on images provided)
* Content - Health, Attack, and Defense Trackers with +/- buttons aligned to right

### Card Contents:
* 16px left/right padding
* 20px top/bottom padding
* Bonus: Align to bottom of card

### Button Increment
* Border radius: 2px
* Background: #4CAF50
* Background Hover: #419A45

### Button Decrement
* Border radius: 2px
* Background: #F95359
* Background Hover: #ED3C39

## Behavior Specifications

**NOTE**: Stat values can go below zero

### Stats:
* Health: Plus (+) button should increase health by 1 for corresponding character
* Health: Minus (-) button should decrease health by 1 for corresponding character
* Attack: Plus (+) button should increase attack by 1 for corresponding character
* Attack: Minus (-) button should decrease attack by 1 for corresponding character
* Defense: Plus (+) button should increase defense by 1 for corresponding character
* Defense: Minus (-) button should decrease defense by 1 for corresponding character

* Bonus: Add 'x' to top right of character card that removes the character from the list

### Global Actions:
* **Add Character**: Should add a character to list with all stats set to zero. Image for character should be randomized based on the 3 provided
* **Attack all characters**: Set all characters Health stat to zero
