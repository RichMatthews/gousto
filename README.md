## Gousto test

# How to use solution
`npm i`

`npm run start`

new window:
`npm run watch`

# Explaining solution

I focussed heavily on the JavaScript functionality side of things rather than CSS. I made sure it's set out as per the designs
as this is how I would code something normally into production. If I had an issue or concern with a design I would collaborate
with the Product Owner and UX, clearly this wasn't available in this scenario.

I wasn't sure what it meant by including colours in the brief considering the design didn't have any but I just made the selected
category red just to include one :).

I didn't use redux (even though I considered it). The reason there is some redux in the codebase is because I imported the boilerplate from another of my projects that I use as a base for all react/redux projects.
The reason I didn't use redux was because I didn't think there was any complicated state management and therefore wasn't necessary.
In my opinion redux is great at what it does but it has a time and a place and using it outside those boundaries can add to complexity, sometimes React state is fine :).

However, if this app was to get any bigger I would start using Redux as I believe it is better to implement it before you get too far down the line and then you either need to build again from the beginning or spend hours trying to integrate it.
I created 2 other components called Products and Categories. I kept these as presentational, stateless components as I believed it was best for these components just to take data given to them and render it. It worked well.

# Testing
`npm run test`

I have written unit tests for the Menu component. Some of the tests probably should belong in the other components but I ran out of time when refactoring.
