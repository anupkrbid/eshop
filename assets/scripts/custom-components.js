class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="d-none-below-laptop-mini">
      <nav class="nav">
          <div class="nav-brand-container">
              <a class="nav-brand" href="/index.html">eshop</a>
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
                                  <input type="search" class="form-control" placeholder="Search" aria-describedby="inputGroupPrepend" />
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
                                      <i class="fas fa-shopping-bag fa-2x"></i>
                                      <span class="badge badge-top-right">10</span>
                                  </div>
                              </a>
                          </li>
                          <li>
                              <div class="dropdown" data-dropdown>
                                  <button class="btn btn-icon" data-dropdown-trigger>
                                      <i class="fas fa-user-circle fa-2x" aria-hidden="true" data-dropdown-trigger></i>
                                  </button>
                                  <div class="dropdown-menu">
                                      <ul class="list list-items-gapped align-items-stretch">
                                          <li>
                                              <a class="nav-link" href="/index.html"> Home </a>
                                          </li>
                                          <li>
                                              <a class="nav-link" href="#"> Profile </a>
                                          </li>
                                          <li>
                                              <a class="nav-link nav-link-active" href="/wishlist.html">
                                                  Wishlist
                                              </a>
                                          </li>
                                          <li>
                                              <button class="btn is-100">Leave</button>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </li>

                          <li>
                              <button class="btn btn-primary" onclick="showSignInModal(event)">Join</button>
                          </li>
                      </ui>
                  </div>
              </div>
          </div>
      </nav>
  </header>
  <header class="d-none-above-laptop-mini">
      <nav class="nav">
          <div class="nav-brand-container">
              <a class="nav-brand" href="/index.html">eshop</a>
          </div>
          <div class="nav-content justify-content-flex-end">
              <ui class="list list-inline">
                  <li>
                  <form novalidate>
                      <label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" id="inputGroupPrepend">
                                      <i class="fas fa-search"></i>
                                  </span>
                              </div>
                              <input type="search" class="form-control" placeholder="Search" aria-describedby="inputGroupPrepend" />
                              <!-- <button class="btn btn-primary">Search</button> -->
                          </div>
                      </label>
                  </form>
                  </li>
                  <li>
                      <a class="btn btn-icon" href="/cart.html">
                          <div class="badge-container">
                              <i class="fas fa-shopping-bag fa-2x"></i>
                              <span class="badge badge-top-right">10</span>
                          </div>
                      </a>
                  </li>
                  <li>
                      <div class="dropdown" data-dropdown>
                          <button class="btn btn-icon" data-dropdown-trigger>
                              <i class="fas fa-user-circle fa-2x" aria-hidden="true" data-dropdown-trigger></i>
                          </button>
                          <div class="dropdown-menu">
                              <ul class="list list-items-gapped align-items-stretch">
                                  <li>
                                      <a class="nav-link" href="/index.html"> Home </a>
                                  </li>
                                  <li>
                                      <a class="nav-link" href="#"> Profile </a>
                                  </li>
                                  <li>
                                      <a class="nav-link nav-link-active" href="/wishlist.html">
                                          Wishlist
                                      </a>
                                  </li>
                                  <li>
                                      <button class="btn is-100">Leave</button>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </li>

                  <li>
                      <button class="btn btn-primary" onclick="showSignInModal(event)">Join</button>
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
customElements.define("custom-footer", Footer);
customElements.define("custom-card", Card);
