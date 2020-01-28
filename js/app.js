var app = new Vue({
    el: '#app',
    data: {
        quotes: [
            '"The unexamined life is not worth living."',
            '"The purpose of meditation is to discover what your mind is like when you are no longer perpetually identified with the contents of your thoughts."',
            '"If you think you can stay angry for a day or even an hour, without continually manufacturing this emotion by thinking without knowing that you’re thinking: you are mistaken. This is an objective claim about mechanics of your own subjectivity..."',
            '"That which is aware of sadness is not sad. The moment I get lost in thoughts however, I\'m lost as everyone else."',
            '"This is really a journey without a goal. The "goal" is to simply notice whatever is appearing in each moment. Not to change it, not to improve it, not to get rid of it... just notice whatever is happening on it\'s own."',
        ],
    },
    computed: {
        randomQuotes: function(){
            output = []
            for (var i = this.quotes.length; i >= 0; i--) {
                output.push(this.quotes[Math.random() * i | 0]);
            }
            return output
        }
    }

})

// Set carousel-item active to the first element
var ul = document.querySelector('.carousel-inner');
ul.children[0].setAttribute('class', 'carousel-item active')