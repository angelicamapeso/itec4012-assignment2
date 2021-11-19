# ITEC 4012, Assignment 2: IKEA Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was created purely for educational purposes.

## Design Document

The website I chose for this assignment was [ikea.ca](https://www.ikea.com/ca/en/).

From this website, I decided to recreate the following two pages:

- **Home** page, route: `/`
- **Cart** page, route: `/cart`

I picked [ikea.ca](https://www.ikea.com/ca/en/) because it had a variety of elements that all followed a similar style. For example, there were a varied number of button styles and image-text pairings. Most of this variety is found on the **Home** page. I then picked the **Cart** page because it had an interesting display of recommended products that I wanted to try and recreate.

### Components

I created components based on repeated elements throughout each page. Additionally, if an element seemed to be more complex, I also split this out into its own component.

#### TopBanner, MainNavigation and Footer

I created these components because each of them are present on both the **Home** page and **Cart** page. The `TopBanner` is the black banner before the `MainNavigation` and the `Footer` is located at the bottom of the page. I split the `TopBanner` and `MainNavigation` because each had complex styling depending on the breakpoint and it seems that the `TopBanner` might be a temporary element for additional links. Therefore, splitting it to its own component would allow it to be more easily removed from the page if need be.

#### Search

Located on the `MainNavigation`, `Search` is its own component because its markup is more involved (it requires a form, label and input field) and I didn't want its structure to clutter up the structure of the main navigation. Additionally, a working search would have a more complicated functionality, so moving it to its own component would separate out those functions.

#### LinkWrapper, Card

These are both "container" elements in the sense that they're meant to have children to wrap around.

I created the `LinkWrapper` component because I noticed that a variety of components changed their styling on being hovered, and act as links to different pages. Therefore, I wanted a wrapper that would be able to set the destination of that component and ensure that the cursor is always a "pointer" on hovering.

The `Card` component is more complex as it contains different layouts for combining images and text together (image on top with text in a coloured container, text overlaying the image, only text in a coloured container). I created this to tackle the variety of "card-like" elements that dealt with images and text.

#### ProductCard, RoomCard

I created the `ProductCard` and `RoomCard` because they these elements were more specific than a general `Card` had a specific layout.

The `ProductCard` toggles between two different furniture images on hover and contains various information on a product (ex. price, name, description).

The `RoomCard` displays a `DotButton` on hover that highlights a piece of furniture within the image.

#### Button, DotButton

The `Button` and `DotButton` components were made to handle the various button elements on the page. Specifically, the `Button` handles two different types of buttons: displaying an icon and displaying text. It also contains visual styling of different background colours and their hover states. The `DotButton` was created as a separate component to handle the animated dots overlaying furniture images. I created an entirely seperate component for the `DotButton` ecause it was fairly different from the `Button` component; it didn't contain any text and had unique transitions.

#### Carousel, AccordionMenu

These are complex components that have a state and handle hiding/showing their child content.

The `Carousel` component is the more complex of the two and features an optional scrollbar and buttons for viewing different pages of the carousel. It also has a prop for setting the total number of carousel pages depending on the current breakpoint. I created this component as there were many carousel elements within the **Home** page and **Cart** page. Since each carousel contains different kinds of content, I ensured that the `Carousel` element adapted to the widths of its children.

The `AccordionMenu` displays a list of text vertically and was created to handle the mobile changes to links in the `Footer` component. This stores a state on whether or not the content is expanded. Optionally, it has a prop to turn the 'accordion feature' off and plainly display the content.
