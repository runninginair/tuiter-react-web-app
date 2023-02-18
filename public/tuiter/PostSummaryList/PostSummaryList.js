import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
            ${
                post.map(aPost => {
                    return(PostSummaryItem(aPost));
                }).join('')
            }
    `);
}
export default PostSummaryList;


// import NavigationItem from "./NavigationItem.js";
// import Items from "./items.js";

// const NavigationList = () => {
//     return (`
//             ${
//                 Items.map(item => {
//                     return(NavigationItem(item));
//                 }).join('')
//             }
//     `);
// }
// export default NavigationList;