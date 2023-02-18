/**
 * PostSummaryItem.js that implements a function of the same name. 
 * The function should render as shown here on the right. 
 * The function should accept an argument called post that represents
 * a summary of a suggested post. 
 * 
 * The function should return an HTML string that renders as shown above. 
 * The data in the post contains properties that describe each of the posts
 * such as topic, userName, time, title, and image. An example post object is shown below.
 */

const PostSummaryItem = (post) => {
    return (`

    <a href="#" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-10">
                <span class="wd-fg-color-gray"> ${post.topic} </span><br />
                    <b> ${post.userName} </b><i class="bi bi-check-circle-fill"></i>
                <span class="wd-fg-color-gray"> - ${post.time} </span><br />
                    <b> ${post.title} </b>
            </div>
        
            <div class="col-2">
                <img src="${post.image}" class="wd-content-img float-end">
            </div>
        </div>
    </a>

    `);
}

export default PostSummaryItem;
