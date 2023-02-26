const PostItem = (post) => {

    // let isLiked = (post.isLiked ? `` : `<span class="wd-fg-color-gray">${post.topic}</span><br />`)

    return (`

<div class="container mt-2 me-2 p-0">
<div class="row">
    <div class="col-1 mt-1">
        <img class="wd-avater-style" src=${post.avater}>
    </div>

    <div class="col-auto">

        <div>
            <span class="wd-author-font">${post.userName}</span>
            <span class="${post.isSubscribed ? `wd-color-gold` : ``}">
                <i class="fa fa-check-circle"></i>
            </span>
            <span class="wd-handle-font-2 wd-fg-color-smoke">@${post.handle} • ${post.time}</span>
            <i class="fa-solid fa-ellipsis float-right wd-fg-color-smoke"></i>
        </div>

        <div class="wd-main-content-style wd-fg-color-wht">
            <p>${post.content1}</p>
        </div>

        <div class="wd-img-content-style wd-post-border wd-rounded-corners">
            <img class="wd-img-style wd-rounded-corners" src=${post.image}>
            <span>
                ${post.title == "" ? `` : `<p class="pt-2 ps-3 pe-3 wd-fg-color-wht"><b>${post.title}</b></p>`}
                ${post.content2 == "" ? `` : `<p class="pt-0 ps-3 pe-3 pb-2">${post.content2}</p>`}
            </span>
        </div>

        <div class="row pt-2">
            <div class="col">
                <i class="fa fa-comment"></i>
                <span>${post.comments}</span>
            </div>

            <div class="col">
                <i class="fas fa-retweet"></i>
                <span>${post.retweet}</span>
            </div>

            <div class="col ${post.isLiked ? `wd-liked-style` : ``}">
                <i class="fa fa-heart"></i>
                <span>${post.liked}</span>
            </div>

            <div class="col">
                <i class="fas fa-upload"></i>
            </div>

            <div class="wd-float-done"></div><br />
        </div>
    </div>

</div>
</div>

    `);
}

export default PostItem;


/**

        <div class="wd-border-style">
            <div class="wd-bookmark-padding-left wd-bookmark-padding-top wd-float-left">
                <img class="wd-rounded-diameter-48px" src=${post.avater} height="48px" width="48px"/>
            </div>

            <div class="wd-main-padding">

                <div class="wd-bookmark-padding-top">
                    <span class="wd-author-font">${post.userName}</span>
                    <span class="wd-handle-font-2">@${post.handle} • ${post.date}</span>
                </div>

                <div class="wd-main-content-style">${post.content1}</div>

                <div class="wd-img-content-style wd-border-style wd-rounded-all-corners">
                    <img class="wd-img-style wd-rounded-top-corners" src=${post.image}/>

                    <p class="wd-title-style"><b>${post.title}</b></p>
                    <p class="wd-text-style">${post.content2}</p>
                </div>

                <div>
                <div class="wd-float-left">
                    <i class="fa fa-comment"></i>
            </div>

            <div class="wd-float-left">
                <span class="wd-style-to-icon">${post.comments}</span>
            </div>

            <div class="wd-float-left">
                <!-- Icon retweet -->
                <i class="fas fa-retweet"></i>
            </div>

            <div class="wd-float-left">
                <span class="wd-style-to-icon">${post.forwarded}</span>
            </div>

            <div class="wd-float-left">
                <!-- Icon-Liked -->
                <i class="fa fa-heart"></i>
            </div>

            <div class="wd-float-left">
                <span class="wd-style-to-icon2">${post.liked}</span>
            </div>

            <div class="wd-float-left">
                <!-- Icon-share-upload-->
                <i class="fas fa-upload"></i>
            </div>

            <div class="wd-float-done"></div><br />
            </div>
            <div class="wd-float-done"></div>
        </div>
    </div>

 */
