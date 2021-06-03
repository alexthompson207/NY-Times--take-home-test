describe('Home View Features', () => {

  beforeEach(() => {
    cy.fixture('storyData').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt', stories)
    })
    cy.visit('http://localhost:3000/');
  });

  it('should have a title and description', () => {
    cy.get('h1').contains('NYT News Reader')
    cy.get('.header-details').contains('Pulling top articles from the New York Times')
  });

  it('should have a loading message before articles are displayed', () => {
    cy.get('h2').contains('Loading...')
  });

  it('should not have a home button displayed when on home view', () => {
    cy.get('main').contains('Home').should('not.exist')
  });

  it('should display a section containing all the articles', () => {
    cy.get('.news-view a').should('have.length', 3)
  });

  it('should display an article title, image, and author', () => {
    cy.get('.article-card').first().contains('Biden’s Climate Summit Sets Up a Bigger Test of American Power')
    cy.get('.article-card').first().contains('By Somini Sengupta')
    cy.get('.article-card').first().children('img').should('have.class', 'article-img')
  });

  it('should display a different article title, image, and author', () => {
    cy.get('.article-card').eq(1).contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?')
    cy.get('.article-card').eq(1).contains('By Brad Plumer and Nadja Popovich')
    cy.get('.article-card').eq(1).children('img').should('have.class', 'article-img')
  });

  it('should display to the user the number of articles of the page', () => {
    cy.get('.news-results').contains('3');
  });

  it('should display a filter dropdown menu', () => {
    cy.get('label').contains('Filter by Section');
    cy.get('.filter-select option').should('have.length', 26);
  });

  it('should be able to click on an article and the url will update', () => {
    cy.get('.article-card').first().click()
    cy.url().should('include', '')
  });

  it('should be able to click on a different article and the url will update', () => {
    cy.get('.article-card').eq(1).click()
    cy.url().should('include', 'http://localhost:3000/1')
  });

  it('should display an article title after clicking on an article', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.article-card').eq(1).click()
    cy.get('h1').contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?')
    cy.url().should('eq', 'http://localhost:3000/1');
  });
})

describe.only('Home View Filter Articles', () => {

  beforeEach(() => {
    cy.fixture('storyData').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt', stories)
    })
    cy.visit('http://localhost:3000/');
  });

  it('should allow users to select an article section from dropdown menu', () => {
    cy.get('label').contains('Filter by Section');
    cy.get('.news-results').contains('3');
    cy.get('.filter-select option').should('have.length', 26);
    cy.get('.filter-select').select('arts').should('have.value', 'arts');
    cy.get('.news-results').contains('1');
  });

  // it('should only display articles whose titles match the search input ', () => {
  //   cy.get('.news-results').contains('3');
  //   cy.get('.news-view a').should('have.length', 3)

  //   cy.get('input[name="search"]')
  //     .type('Globally')
  //     .should('have.value', 'Globally')

  //   cy.get('.news-results').contains('1');
  //   cy.get('.news-view a').should('have.length', 1)
  //   cy.get('.news-view').contains('The U.S. Has a New Climate Goal. How Does It Stack Up Globally?');
  // });

  // it('should display an error message if no articles match search criteria', () => {
  //   cy.get('input[name="search"]')
  //     .type('Nothing')

  //   cy.get('.news-view a').should('have.length', 0)
  //   cy.get('h1').contains('No articles match your search, please try again!')
  // });

  // it('should be able to clear search and see all articles', () => {
  //   cy.get('input[name="search"]')
  //     .type('Nothing')

  //   cy.get('.news-view a').should('have.length', 0)
  //   cy.get('input[name="search"]').clear()
  //   cy.get('.news-view a').should('have.length', 3)
  // });
})