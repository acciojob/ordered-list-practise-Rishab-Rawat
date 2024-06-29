//your JS code here. If required.
list_texts.forEach((text, idx) => {
    // Adjust the expected text to match exactly, correcting the possessive form
    const correctedText = text.replace("it's", "its");
    cy.get('li').eq(idx).should('have.text', correctedText);
});