class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="d-none-below-laptop-mini">
      <nav class="nav">
        <div class="nav-brand-container">
          <div class="nav-brand">eshop</div>
        </div>
        <div class="nav-content">
          <div class="row align-items-center">
            <div class="col-4">
              <ui class="list list-inline list-items-spaced">
                <li>
                  <a class="nav-link" href="/products.html"> Men </a>
                </li>
                <li>
                  <a class="nav-link nav-link-active" href="/products.html"> Women </a>
                </li>
              </ui>
            </div>
            <div class="col-4">
              <form novalidate>
                <label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search"
                      aria-describedby="inputGroupPrepend"
                    />
                    <!-- <button class="btn btn-primary">Search</button> -->
                  </div>
                </label>
              </form>
            </div>
            <div class="col-4">
              <ui class="list list-inline justify-content-flex-end">
                <li>
                  <a class="btn btn-icon" href="/cart.html">
                    <div class="badge-container">
                      <i class="fas fa-shopping-cart fa-2x"></i>
                      <span class="badge badge-top-right">10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div class="dropdown" data-dropdown>
                    <button class="btn btn-icon" data-dropdown-trigger>
                      <i
                        class="far fa-user-circle fa-2x"
                        aria-hidden="true"
                        data-dropdown-trigger
                      ></i>
                    </button>
                    <div class="dropdown-menu">
                      <ul class="list list-items-gapped align-items-stretch">
                        <li>
                          <a class="nav-link" href="/index.html"> Home </a>
                        </li>
                        <li>
                          <a
                            class="nav-link nav-link-active"
                            href="/wishlist.html"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li>
                          <button class="btn btn-primary-outlined is-100">Logout</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <li>
                    <button class="btn btn-primary" onclick="enigma.openModal('#auth-modal')">Join</button>
                  </li>
                </li>
              </ui>
              <!-- <button class="btn btn-icon">
                <div class="badge-container">
                  <i class="fas fa-shopping-cart fa-2x"></i>
                  <span class="badge badge-top-right">10</span>
                </div>
              </button>

              <div class="dropdown" data-dropdown>
                <button class="btn btn-icon" data-dropdown-trigger>
                  <i
                    class="far fa-user-circle fa-2x"
                    aria-hidden="true"
                    data-dropdown-trigger
                  ></i>
                </button>
                <div class="dropdown-menu">
                  <ul class="list align-items-stretch">
                    <li>
                      <a class="nav-link" href="/index.html"> Home </a>
                    </li>
                    <li>
                      <a
                        class="nav-link nav-link-active"
                        href="/wishlist.html"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <button class="btn btn-primary-oulined is-100">Logout</button>
                    </li>
                  </ul>
                </div>
              </div>

              <button class="btn btn-primary" onclick="enigma.openModal('#auth-modal')">Join</button> -->
            </div>
          </div>
        </div>
      </nav>
    </header>
    <header class="d-none-above-laptop-mini">
      <nav class="nav">
        <div class="nav-brand-container">
          <button
            class="btn btn-icon"
            onclick="enigma.toggleSidebar('#sidebar')"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="nav-brand">eshop</div>
        </div>
        <div class="nav-content justify-content-flex-end">
          <ui class="list list-inline">
            <li>
              <a class="btn btn-icon" href="#">
                <i class="fas fa-search fa-2x"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon" href="/cart.html">
                <div class="badge-container">
                  <i class="fas fa-shopping-cart fa-2x"></i>
                  <span class="badge badge-top-right">10</span>
                </div>
              </a>
            </li>
            <li>
              <div class="dropdown" data-dropdown>
                <button class="btn btn-icon" data-dropdown-trigger>
                  <i
                    class="far fa-user-circle fa-2x"
                    aria-hidden="true"
                    data-dropdown-trigger
                  ></i>
                </button>
                <div class="dropdown-menu">
                  <ul class="list list-items-gapped align-items-stretch">
                    <li>
                      <a class="nav-link" href="/index.html"> Home </a>
                    </li>
                    <li>
                      <a
                        class="nav-link nav-link-active"
                        href="/wishlist.html"
                      >
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <button class="btn btn-primary-outlined is-100">Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
              <li>
                <button class="btn btn-primary" onclick="enigma.openModal('#auth-modal')">Join</button>
              </li>
            </li>
          </ui> 
        </div>
      </nav>
    </header>    
    `;
  }

  isLinkActive(attrValue, linkName) {
    return attrValue === linkName ? "nav-link-active" : "";
  }

  hideSidebarTrigger(attrValue) {
    return attrValue === "home" ? "d-none" : "";
  }
}

class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const activeNav = this.attributes.active.value;
    this.innerHTML = `
      <section class="sidebar pb-16 pi-16">
        <h5>Getting Started</h5>
        <nav class="nav mbs-16">
          <ul class="list">
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "usage"
              )}" href="/docs/usage.html">Usage</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "typography"
              )}" href="/docs/typography.html">Typography</a>
            </li>
          </ul>
        </nav>
        <hr />
        <h5>Components</h5>
        <nav class="nav mbs-16">
          <ul class="list">
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "avatars"
              )}" href="/docs/avatars.html">Avatars</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "badges"
              )}" href="/docs/badges.html">Badge</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "cards"
              )}" href="/docs/cards.html">Cards</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "alerts"
              )}" href="/docs/alerts.html">Alerts</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "lists"
              )}" href="/docs/lists.html">Lists</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "buttons"
              )}" href="/docs/buttons.html">Buttons</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "responsive-images"
              )}" href="/docs/responsive-images.html">Responsive Images</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "form-elements"
              )}" href="/docs/form-elements.html">Form Elements</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "navigation"
              )}" href="/docs/navigation.html">Navigation</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "modal"
              )}" href="/docs/modal.html">Modal</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "toast"
              )}" href="/docs/toast.html">Toast</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "rating-system"
              )}" href="/docs/rating-system.html">Rating System</a>
            </li>
            <li>
              <a class="nav-link ${this.isLinkActive(
                activeNav,
                "grid-system"
              )}" href="/docs/grid-system.html">Grid System</a>
            </li>
          </ul>
        </nav>
      </section>
      `;
  }

  isLinkActive(attrValue, linkName) {
    return attrValue === linkName ? "nav-link-active" : "";
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-header">
        Made with <i class="fas fa-code"></i> and lots of ❤️ for developers by developers.
      </div>
      <ul class="list list-inline">
        <li>
          <a target="_blank" href="https://github.com/anupkrbid"
            ><i class="fab fa-github-square"></i></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/anupkrbid"
            ><i class="fab fa-twitter-square"></i></i
          ></a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/anupkrbid/"
            ><i class="fab fa-linkedin"></i></i
          ></a>
        </li>
      </ul>
    </footer>
      `;
  }
}

class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const cardType = this.attributes.type.value;
    this.innerHTML = `
    <div class="card ${this.getCardType(cardType)}">
      <div class="card-img">
        <img src="https://picsum.photos/450/600" alt="card image" />
      </div>
      <div class="card-description-action">
        <div class="card-description mb-8 mi-8">
          <h3 class="h5">Card Heading</h3>
          <p class="h6">$ 200</p>
        </div>
        <div class="card-action">
          <button class="btn btn-primary-outlined">add to cart</button>
          <button class="btn btn-primary">buy now</button>
        </div>
      </div>
    </div>
      `;
  }

  getCardType(cardType) {
    return cardType === "landscape" ? "card-landscape" : "card-potrait";
  }
}

customElements.define("custom-header", Header);
customElements.define("custom-sidebar", Sidebar);
customElements.define("custom-footer", Footer);
customElements.define("custom-card", Card);
