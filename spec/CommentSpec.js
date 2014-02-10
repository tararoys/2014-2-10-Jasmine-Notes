describe("Tara is", function() {
  
  describe("Learning How To Set up Jasmine", function(){
    it("should written have a passing test", function() {
      expect(true).toBe(true);
    });
  });

  describe("Learning Object Oriented Programming using", function(){
    describe("using [Ben's Zoo code](https://gist.github.com/bneuman619/8846586) as a template", function(){
      it("should create an object literal", function(){
        my_first_object_literal = {
          key : "value",
          another_key : "another_value"
        };
        expect(my_first_object_literal.key).toBe("value");
        expect(my_first_object_literal.another_key).toBe("another_value");
      });

      it("Should create an object literal with a function", function(){
         my_second_object_literal_with_a_function = {
           key : null,
          set_the_key: function(set_key){
            this.key = set_key
          }
         };

         my_second_object_literal_with_a_function.set_the_key(3);
         expect(my_second_object_literal_with_a_function.key).toBe(3);
      
       });

 

    });
  });


});