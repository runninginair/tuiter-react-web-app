/** 
 * Implement the NavigationSideBar using javascript object is recommended
 * but not required though.
 */ 

const NavigationSidebar = () => {
    return (`
        <div class="list-group">

            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
    
            <!-- continue rest of list, e.g., Home, Explore, Notifications, Messages, etc. -->

            <a href="../home.html" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row">
                    <div class="col-2">
                        <i class="fa-solid fa-home"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Home </span>
                    </div>
                </div>
            </a>

            <a href="../explore/index.html" class="list-group-item list-group-item-action border-0 btn-hovered mb-2">
                <div class="row">
                    <div class="col-2">
                        <i class="fa-solid fa-hashtag"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Explore </span>
                    </div>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                        <i class="fa-regular fa-bell"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Notifications </span>
                    </div>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Messages </span>
                    </div>
                </div>
            </a>

            <a href="../bookmarks/index.html" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Bookmarks </span>
                    </div>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                        <i class="fa-solid fa-fire"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Top Articles </span>
                    </div>
                </div>
            </a>

            <a href="../profile.html" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> Profile </span>
                    </div>
                </div>
            </a>

            <a href="../navigation.html" class="list-group-item list-group-item-action border-0 mb-2">
                <div class="row wd-left-bar-style">
                    <div class="col-2">
                            <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> More </span>
                    </div>
                </div>
            </a><br />

            <!-- comment out -->
            <!-- comment out 
                <button class="btn btn-primary override-bs">Tweet</button><br /> -->

                
        </div>

        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
