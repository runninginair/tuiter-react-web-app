import NavigationItem from "./NavigationItem.js";
import Items from "./items.js";

const NavigationList = () => {
    return (`
            ${
                Items.map(item => {
                    return(NavigationItem(item));
                }).join('')
            }
    `);
}
export default NavigationList;