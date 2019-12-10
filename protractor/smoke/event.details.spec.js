describe('Event Details', function(){
    describe('Rattings Block', function(){

        beforeEach(function(){
            browser.get('http://localhost:3000/#!/EventRatings/5defc36a8ff55c640d2fc139');
        })
        it('Should show all ratings', function(){
            var ratings= element.all(by.repeater('r in eventDetails.ratings'));

            expect(ratings.count()).toBe(0);

        });

        it('Should have a description', function(){
            var descriptions = element.all(by.repeater('r in eventDetails.ratings').column('description'));

            expect(descriptions.getText()).toMatch('Description');
        })
    });
});