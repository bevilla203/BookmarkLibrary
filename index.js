class bookmark{
    constructor(link, name){
        this.link = link;
        this.name = name;
    }
}
class user_input{
    constructor(){
        this.libary = []
    }
    book_mark1(){
        const book_mark = document.getElementById('book-mark')
        book_mark.addEventListener('click',(event)=>{
            const link_input= document.getElementById('link-input').value;
            const name_input = document.getElementById('name-input').value;
            let newobj = {link:link_input, name:name_input}
            this.libary.push(newobj)
            // this.libary.forEach(element => {
            //     console.log(element)
            // });
            this.render();
            event.preventDefault();
        });
    }
    render(){
        const ul = document.querySelector('#book-marks');
            this.libary.forEach((element, index) => {
            if(index === this.libary.length-1){
            const createLi = document.createElement('li');
            ul.appendChild(createLi);
            createLi.innerHTML = `name: ${element.name}, link: ${element.link}`;

            // assign id of count to li
            createLi.setAttribute("id", element.name);
            }
            console.log(this.libary);
        });
    }
    remove_mark(){
        const remove_mark = document.getElementById('remove-mark')
        remove_mark.addEventListener('click',(event)=>{
            const remove_name_input = document.getElementById('remove-name-input').value;
            console.log(remove_name_input);
            const newArray = this.libary.filter(removeMe => removeMe !== remove_name_input);
            console.log(newArray);

            this.render();
            event.preventDefault();
        });
    }
}
let call_user_input = new user_input;
call_user_input.book_mark1();
call_user_input.render();
call_user_input.remove_mark();
let call_book_mark = new bookmark;