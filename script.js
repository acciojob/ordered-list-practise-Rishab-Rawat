//your JS code here. If required.
"()=>list_texts.forEach((text, idx) => {
    cy.get('li').eq(idx).should('have.text', text);
});