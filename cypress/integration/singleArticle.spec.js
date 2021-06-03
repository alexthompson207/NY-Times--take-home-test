describe('Single Article View Features', () => {

  beforeEach(() => {
    cy.fixture('storyData').then(stories => {
      cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt', stories)
    })
    cy.visit('http://localhost:3000/');
    cy.get('.article-card').first().click();
  });

  it('should have a title and description in the header', () => {
    cy.get('h1').contains('NYT News Reader');
    cy.get('.header-details').contains('Pulling top articles from the New York Times');
  });

  it('should display the article title', () => {
    cy.get('.details-title').contains('Biden’s Climate Summit Sets Up a Bigger Test of American Power');
  });

  it('should display the article overview, author, date published, and section', () => {
    cy.get('.details-overview').contains('There were notable pledges of action, but several important greenhouse gas polluters were conspicuously silent. It showed the challenges that lie ahead.');
    cy.get('.details-author').contains('By Somini Sengupta');
    cy.get('.details-date').contains('Fri Apr 23 2021');
    cy.get('.details-section').contains('ARTS');
  });

  it('should display an image for the article', () => {
    cy.get('.article-details-view').children('img').should('have.class', 'details-img')
  });

  it('should display a link to the article on the New York Times Website', () => {
    cy.get('.article-details-view').children('a').should('have.class', 'details-link')
  });

  it('should allow users to click on the link and be redirected to the NYT website in a new tab', () => {
    cy.get('.details-link').click();
    cy.url().should('include', 'http://localhost:3000/')
  });

  it('should have a home button displayed', () => {
    cy.get('main').contains('Back').should('exist')
  });

  it('should return to the homepage when the home button is clicked', () => {
    cy.url().should('eq', 'http://localhost:3000/0');
    cy.get('.news-view a').should('not.exist');
    cy.get('.back-btn').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.news-view a').should('have.length', 3);
  });
});

describe('Single Article View Server-Side Error', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt', {
      statusCode: 404
    })

    cy.visit('http://localhost:3000/0');
  });

  it('should display an error message when the server is down', () => {
    cy.get('.error-view').contains('Oops, something went wrong')
  });
});

describe('Single Article View Client-Side Error', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NyU9tPGJBvDz5j0PEOAANPDOu9XMKitt', {
      statusCode: 500
    })

    cy.visit('http://localhost:3000/0');
  });

  it('should display an error message when the server is down', () => {
    cy.get('.error-view').contains('Oops, something went wrong')
  });
});