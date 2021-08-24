var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: [        
		]
	},
    methods: {
		addTodo: function() {
			var newTodo = this.todoText;

			this.todos.push(
				{text: newTodo}
			);
			this.todoText = '';
		}, 
        delTodo: function(index) {
            this.todos.splice(index, 1);
          }


    }
	});
  