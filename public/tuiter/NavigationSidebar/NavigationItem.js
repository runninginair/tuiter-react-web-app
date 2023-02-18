const NavigationItem = (item) => {

    return (`
            <a href="${item.href}" class="list-group-item list-group-item-action border-0">
                <div class="row">
                    <div class="col-2">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="col">
                        <span class="d-none d-xl-inline-block d-xxl-inline-block"> ${item.title} </span>
                    </div>
                </div>
            </a>
    `);
}
export default NavigationItem;